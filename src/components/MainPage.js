import React from 'react'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';


function MainPage() {
    const [name, setName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]); 
    const LoadDetail=(id)=>{
        navigate("/DetailPage/"+id);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, ProjectName: ${projectName}, Message:${message}`);
        setData([{ name, projectName, message },...data]);
        setName('');
        setProjectName('');
        setMessage('');

        //json
        let dataobj={name,projectName,message};

    
        fetch("http://localhost:8000/formdata",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(dataobj)
        }).then((res)=>{
            toast.success('Data saved')
        }).catch((err)=>{
            toast.err('Fill all blanks',err.message);
        })

      };


      //to get data from json to ideas form
        const[userdata, userdatachange]=useState(null);
        const navigate = useNavigate();
        useEffect(() => {
            fetch("http://localhost:8000/formdata").then((res)=>{
                return res.json();
            }).then((resp)=>{
                resp.reverse(); //son eklenen en üstte gösterilsin
                userdatachange(resp);
            }).catch((err)=>{
                console.log(err.message);
            })

        },[])
      
      


  return (
    <>
    <div className='flex flex-row bg-slate-900 h-screen min-h-screen'>
    <div className="container my-36 px-6 bg-gray-800 rounded mr-16 ml-16 overflow-auto">
        <section className='mb-32 text-center text-gray-800'>
            <div className='max-w-[700px] mx-auto px-3 lg:px-6'>
                <h2 className='text-white text-3xl font-bold mb-12'>
                    Project Form
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-6'>
                    <input required key="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name Surname' className='form-control block 
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    transition ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md shadow-black'>
  
                    </input>
                    
                </div>
                <div className='form-group mb-6' >
                    <input required key="projectname" type="text" placeholder='Project Name' value={projectName} onChange={(e)=>setProjectName(e.target.value)} className='form-control block 
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    transition ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md shadow-black'>
                    
                    </input>
                </div>
                <div className='form-group mb-6'>
                    <textarea required rows="3" placeholder='Enter your idea' key="message" value={message} onChange={(e)=>setMessage(e.target.value)} 
                    className='form-control block 
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300 rounded
                    transition ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md shadow-black'>

                    </textarea>
                </div>
                <button key="submit-button" type='submit' className='w-full px-6 py-2.5
                    bg-blue-600 
                    text-white font-medium text-xs leading-tight
                    uppercase rounded shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition duration-150 ease-in-out shadow-black'>
                    submit
                </button>
                <div className='flex mt-2'>
                        <Link   className='w-full px-6 py-2.5
                            bg-green-600 
                            text-white font-medium text-xs leading-tight
                            uppercase rounded shadow-md
                            hover:bg-green-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition duration-150 ease-in-out' to={'/'}>Back to Login Page
                        </Link>
                </div>
                
            </form>
        </section>
        </div>
        
        <div className="container  my-6 px-6  bg-gray-800 rounded mr-16 ml-2 overflow-auto">
        <section className='mb-32 text-center text-gray-800 '>
            <div>
                <h2 className='text-white text-3xl font-bold mb-12'>
                    Project Ideas
                </h2>
                <hr></hr>
                
               
                <div>
            
        
        <ul className='mt-4'>
          {data.map((item, index) => (
            <>
            <li key={index}>
                <div className="flex flex-col md:flex-col justify-center text-left  rounded-xl bg-slate-700 mb-2">
                    <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-2 ">
                        <div slot="bottom-left" className="max-w-xs ">
                            <div className="p-2 shadow-md m-2">
                                <div className="text-s font-bold text-left uppercase text-teal-700  mb-2">{item.name}</div>
                                <div className="text-xl text-white text-left font-medium">{item.projectName}</div>
                                <div className="truncate text-white text-left">{item.message}</div>
                                <div className="text-white text-left mt-2"><button  className="flex-no-shrink  px-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border text-white rounded-full" onClick={()=>{LoadDetail(item.id)}}>Read More...</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                
              </li>
            </>
            
          ))}
        </ul>

        <ul className='mt-4'>
          {userdata && userdata.map((item, index) => (
            <>
                <li key={index}>

                <div className="flex flex-col md:flex-col justify-center text-left  rounded-xl bg-slate-700 mb-2">
                    <div className="transition-all ease-in-out duration-1000 flex flex-col justify-center mr-0 md:mr-2 ">
                        <div slot="bottom-left" className="max-w-xs ">
                            <div className="p-2 shadow-md m-2">
                                <div className="text-s font-bold text-left uppercase text-teal-700  mb-2">{item.name}</div>
                                <div className="text-xl text-white text-left font-medium">{item.projectName}</div>
                                <div className="truncate text-white text-left">{item.message}</div>
                                <div className="text-white text-left mt-2"><button  className="flex-no-shrink  px-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border text-white rounded-full" onClick={()=>{LoadDetail(item.id)}}>Read More...</button></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                                
                </li>
            </>
            
          ))}
        </ul>
        </div>
        </div>    
        
        </section>
        
        </div>
       
        </div>
       


    </>
  )
}

export default MainPage