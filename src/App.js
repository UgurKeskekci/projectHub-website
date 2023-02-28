import Input from "./components/Input";
import Button from "./components/Button";
import Forms from "./components/Forms";
import { useState } from "react";
function App() {

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

  return (
  <>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl"> 
             <h1 className="text-3xl font-semibold text-center text-orange-500">
                   Welcome to ProjectHub
              </h1>
     
              <Forms>
                  <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                    >
                    Email
                  </label>
                  <Input type={"text"} value={user.name} onChange={handleChange}/>
                  <label
                    for="password" 
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
  </>
         
  
  );
}

export default App;
