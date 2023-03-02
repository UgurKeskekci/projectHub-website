import React from 'react'
import Input from "./Input";
import Forms from "./Forms";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function RegisterPage() {

    const [id, idchange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
   
    const navigate=useNavigate();


    const handleSubmit =(e)=>{
        e.preventDefault();

        let regobj={id,email,password};
        //console.log(regobj);


        fetch("http://localhost:8000/user",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success('Registered Successfully')
            navigate('/')//login page
        }).catch((err)=>{
            toast.err('Enter Valid Informations',err.message);
        });
    }




  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl"> 
             <h1 className="text-3xl font-semibold text-center text-blue-600">
                   Welcome to ProjectHub Register Page
              </h1>
     
              <Forms onSubmit={handleSubmit}>
              <label
                    htmlFor="text"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Username
                  </label>
                  <Input  type={"text"} value={id} onChange={e=>idchange(e.target.value)} />
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Email
                  </label>
                  <Input type={"text"} value={email} onChange={e=>emailchange(e.target.value)}  />
                  <label
                    htmlFor="password" 
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Password
                  </label>
                  <Input type={"password"} value={password} onChange={e=>passwordchange(e.target.value)}/>
                  <div className="mt-6">
                        <button type="submit" className='w-full px-6 py-2.5
                    bg-blue-600 text-white
                    text-white font-medium text-xs leading-tight
                    uppercase rounded shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition duration-150 ease-in-out'>
                            Register
                          
                        </button>
          </div>

              </Forms>
        </div>
    </div>
  )
}

export default RegisterPage