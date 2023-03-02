import React from 'react'
import Input from "./Input";
import Forms from "./Forms";
import { useState } from "react";
import { useNavigate,Link } from 'react-router-dom';
import { toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {

  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const navigate=useNavigate();


  const ProceedLogin = (e) =>  {
    e.preventDefault();
    if(validate()){
      //implementation
      //console.log('proceed');
      fetch('http://localhost:8000/user/'+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
        //console.log(resp)
        if(Object.keys(resp).length === 0){
          toast.error('Enter valid username');
        }else{
          if(resp.password === password){
            toast.success('Logged in!');
            navigate('/homepage')
          }else{
            toast.error('Enter valid informations');
          }
        
        } 
        
      }).catch((err)=>{
        toast.error('Login Failed');
      });
     
    }
  }
  const validate = () => {
    let result = true;
    if(username ==='' || username ===null){
      result=false;
      toast.warning('Please enter username');
    }
    if(password ==='' || password ===null){
      result=false;
      toast.warning('Please enter password');
    }
    return result;
  }

/*
    const[user, setUser] = useState({ name: "",passwd: "" })
    const handleChange = (e) =>{
  
      if(e.target.type==="text") {
       
        setUser({...user, name: e.target.value});
        console.log(user);
      }
      else if(e.target.type==="password"){
        setUser({...user, password: e.target.value});
        console.log(user);
      }
  
      
      
    };
  
    const handleClick = () => {
      if(user.name===""){
        alert("You need to your valid email");
  
      }else if(user.password===""){
        alert("Enter your password");
      }else{
        alert("Email:" +user.name +"Password:"+user.password);
      }
    }
*/
  return (


    <>
    <ToastContainer />
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl"> 
             <h1 className="text-3xl font-semibold text-center text-blue-600">
                   Welcome to ProjectHub
              </h1>
     
              <Forms onSubmit={ProceedLogin}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Username
                  </label>
                  <Input type={"text"} value={username} onChange={(e) => usernameupdate(e.target.value)}/>
                  <label
                    htmlFor="password" 
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Password
                  </label>
                  <Input type={"password"} value={password} onChange={(e) => passwordupdate(e.target.value)}/>
                  <div className="mt-6">
                        <button type="submit" className='w-full px-6 py-2.5
                    bg-blue-600 text-white
                    text-white font-medium text-xs leading-tight
                    uppercase rounded shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition duration-150 ease-in-out
                    mb-2'>
                            Login
                          
                        </button>
                        <Link   className='w-full px-6 py-2.5
                    bg-green-600 text-white
                    text-white font-medium text-xs leading-tight
                    uppercase rounded shadow-md
                    hover:bg-green-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition duration-150 ease-in-out' to={'/register'}>Register</Link>
                        
                        
                        
          </div>

              </Forms>
             
                          
                        
        </div>
    </div>
    
    
    
    </>
    /*<>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl"> 
             <h1 className="text-3xl font-semibold text-center text-blue-600">
                   Welcome to ProjectHub
              </h1>
     
              <Forms>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Email
                  </label>
                  <Input type={"text"} value={user.name} onChange={handleChange}/>
                  <label
                    htmlFor="password" 
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Password
                  </label>
                  <Input type={"password"} value={user.password} onChange={handleChange}/>
                  <Button onClick={handleClick}
                  />
              </Forms>
        </div>
    </div>
    
    
    
    </>*/
  )
}

export default LoginPage