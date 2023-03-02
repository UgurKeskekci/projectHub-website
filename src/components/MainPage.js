import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';


function MainPage() {
    const [name, setName] = useState('');
    const [projectName, setProjectName] = useState('');
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]); 


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, ProjectName: ${projectName}, Message:${message}`);
        setData([...data, { name, projectName, message }]);
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
            toast.success('Data saved to json')
        }).catch((err)=>{
            toast.err('Fill all blanks',err.message);
        })

      };


  return (
    <>
    <div className='flex flex-row bg-slate-900'>
    <div className="container my-24 px-6 mx-auto bg-gray-800 rounded mx-12">
        <section className='mb-32 text-center text-gray-800'>
            <div className='max-w-[700px] mx-auto px-3 lg:px-6'>
                <h2 className='text-white text-3xl font-bold mb-12'>
                    Project Form
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-6'>
                    <input key="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name Surname' className='form-control block 
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
                    <input key="projectname" type="text" placeholder='Project Name' value={projectName} onChange={(e)=>setProjectName(e.target.value)} className='form-control block 
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
                    <textarea rows="3" placeholder='Enter your idea' key="message" value={message} onChange={(e)=>setMessage(e.target.value)} 
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
                    bg-blue-600 text-white
                    text-white font-medium text-xs leading-tight
                    uppercase rounded shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition duration-150 ease-in-out shadow-md shadow-black'>
                    submit
                </button>
                <div className='flex mt-2'>
                        <Link   className='w-full px-6 py-2.5
                            bg-green-600 text-white
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
        
        <div className="container  my-24 px-6 mx-auto bg-gray-800 rounded mx-12">
        <section className='mb-32 text-center text-gray-800 '>
            <div>
                <h2 className='text-white text-3xl font-bold mb-12'>
                    Project Ideas
                </h2>
                <hr></hr>
                
               
                <div>
            
        <h2></h2>
        <ul className='mt-4'>
          {data.map((item, index) => (
            <>
            <li key={index}>
                <div className="grid grid-cols-1 gap-2 mb-3
                    border bg-gray-200  rounded-lg
                    shadow-sm shadow-black">
                    <div className="... text-left flex"><p className='font-normal text-blue-800 mr-3'> {item.name}  </p><p className='font-normal text-green-600'>{item.projectName}</p></div>
                
                    
                    <div className="col-span-2 ... text-left "> <p className='font-light'> {item.message}</p></div>
                    
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