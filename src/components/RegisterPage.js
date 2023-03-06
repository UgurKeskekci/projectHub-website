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
    const [confirmPassword, confirmPasswordchange]=useState("");

    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  
    const navigate=useNavigate();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@cerebrumtechnologies.com$/;
    const passwordRegex = /^.{4,}$/;


    const validatePassword = (password) =>{
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      return regex.test(password);
    }


    const handleSubmit =(e)=>{
        e.preventDefault();

        

        if (password !== confirmPassword) {
          toast.error('Passwords do not match');
          return;
        }

        if (!emailRegex.test(email)) {
          toast.error('You should use your company e-mail!');
          return;
        }
    
      
        let regobj={id,email,password,confirmPassword};
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
   

    const handlePasswordChange = (e) => {
      const value = e.target.value;
      passwordchange(value);
  
      if (!passwordRegex.test(value)) {
        e.target.setCustomValidity('');
      } else {
        e.target.setCustomValidity('');
      }
    }


  
    
    const handleConfirmPasswordChange = (e) => {
      const value = e.target.value;
      confirmPasswordchange(value);
  
      if (value !== password) {
        setConfirmPasswordValid(true);
      } else {
        setConfirmPasswordValid(false);
      }
    };


  return (
    <div className="bg-slate-900 relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-slate-400 rounded-md shadow-md lg:max-w-xl"> 
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
                  <Input  placeholder="Enter your username" type={"text"} value={id} onChange={e=>idchange(e.target.value)}/>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Email 
                  </label>
                  <Input placeholder="example@cerebrumtechnologies.com" type={"email"} value={email} onChange={e=>emailchange(e.target.value)}  />
                  <label
                    htmlFor="password" 
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Password
                  </label>
                  <Input placeholder="*****************" type={"password"} value={password} onChange={e=>passwordchange(e.target.value)} onBlur={handlePasswordChange}/>
                  <label
                    htmlFor="password" 
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Confirm Password
                  </label>
                  <Input placeholder="*****************" type={"password"} value={confirmPassword} onChange={e=>confirmPasswordchange(e.target.value)} onBlur={() => handleConfirmPasswordChange(!confirmPasswordValid)}/>
                  
                  <div className="mt-6">
                        <button type="submit" className='w-full px-6 py-2.5
                    bg-blue-600
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