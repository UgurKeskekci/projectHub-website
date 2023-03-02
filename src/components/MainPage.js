import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';


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
    <div className='flex flex-row bg-gray-800'>
    <div className="container my-24 px-6 mx-auto bg-gray-300 rounded mx-8">
        <section className='mb-32 text-center text-gray-800'>
            <div className='max-w-[700px] mx-auto px-3 lg:px-6'>
                <h2 className='text-3xl font-bold mb-12'>
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
            </form>
        </section>
        </div>
        
        <div className="container my-24 px-6 mx-auto bg-gray-300 rounded mx-8">
        <section className='mb-32 text-center text-gray-800 '>
            <div>
                <h2 className='text-3xl font-bold mb-12'>
                    Project Ideas
                </h2>
                <hr></hr>
               
                <div>
        <h2>Submitted Data:</h2>
        <ul>
          {data.map((item, index) => (
            <>
                


            <li key={index}>
                <div className="grid grid-cols-2 gap-2 mb-3
                    border bg-gray-400  rounded 
                    shadow-sm shadow-black">
                    <div className="... text-left"><p>Name: {item.name}</p></div>
                    <div className="... text-left"> <p>Email: {item.projectName}</p></div>
                    
                    <div className="col-span-2 ... text-left"> <p>Message: {item.message}</p></div>
                    
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