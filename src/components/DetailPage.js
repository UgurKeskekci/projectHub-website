import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const DetailPage =() => {
    const{detailsid}=useParams();
    const [userdata, userdatachange] = useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/formdata/"+detailsid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            userdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })

    },[detailsid]);
    <div>
   
</div>
    return(
         <>
      
<div class='flex items-center justify-center min-h-screen bg-slate-900 h-screen  bg-gradient-to-br'>
	<div class="p-4 items-center justify-center w-[680px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
		<img  class="mx-auto w-full block w-4/12 h-40 rounded-lg"  alt="art cover" loading="lazy" src='https://picsum.photos/seed/2/2000/1000' />
		<div class="sm:w-8/12 pl-0 p-5">
			<div class="space-y-2">
				<div class="space-y-4">
					<h4 class="text-md font-semibold text-cyan-900 text-justify">
                        {
                        userdata && 
                        <h1>{userdata.projectName}</h1>
                        }
                    </h4>
				</div>
				<div class="flex items-center space-x-4 justify-between">
					<div class="flex gap-3 space-y-1">
						<span class="text-sm">{
                        userdata && 
                        <h1>{userdata.message}</h1>
                        } </span>
					</div>
					<div class=" px-3 py-1 rounded-lg flex space-x-2 flex-row">
						
					</div>
				</div>
				<div class="flex items-center space-x-4 justify-between">
					<div class="text-grey-500 flex flex-row space-x-1  my-4">
						<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
						<p class="text-xs">{userdata.name}</p>
					</div>
					<div class="flex flex-row space-x-1">
						
						<div
							class="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
							<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>
							<span>99</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

				

       
        </>
    );


}

/*
const DetailPage = () => {
    const{id}=useParams();

    const[userdata,userdatachange]=useState({})

    useEffect(() => {
        fetch("http://localhost:8000/formdata/"+id).then((res)=>{
            return res.json();
        }).then((resp)=>{
            userdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[id]);
 
  return (
    <div>
       
    {
    userdata &&

        <h1>Details:{userdata.name}({userdata.id})</h1>
    }
    </div>
  )
}
*/
export default DetailPage