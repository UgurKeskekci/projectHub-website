import React from 'react'


function Input({type, onChange,placeholder, onBlur}) {
  return (
    <>
      <div className="mb-2">
        <input 
         required type={type} onChange={onChange}  placeholder={placeholder} onBlur={onBlur}
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
               
  </>  
  )
}

export default Input