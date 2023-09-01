"use client"
import React from "react";
import { useContext } from "react";
import { inter_data, magzine } from "./context";
import { useState } from "react";
const Place=()=>{
  const obj=useContext(magzine)
  let temp:inter_data
    return(
        <div> 
         <div className='flex justify-between'>
           <input type="number" value={obj.userId} onChange={(e)=>{obj.setuserid(e.target.value)}} className=' rounded-lg text-lg py-4 px-1 border-b font-sans focus:outline-none' placeholder='Enter the userId'></input>
           <input type="number" value={obj.id} onChange={(e)=>{obj.setid(e.target.value)}} className=' rounded-lg text-lg py-4 px-1 border-b font-sans focus:outline-none' placeholder='Enter the Id'></input>
           <input type="text" value={obj.title} onChange={(e)=>{obj.settitle(e.target.value)}} className=' rounded-lg text-lg py-4 px-1 border-b font-sans focus:outline-none' placeholder='Enter the title'></input>
           <input type="text" value={obj.completed} onChange={(e)=>{obj.setcompleted(e.target.value)}} className=' rounded-lg text-lg py-4 px-1 border-b font-sans focus:outline-none' placeholder='Enter the status'></input>
         </div>
         <div className='py-10 w-full text-center'>
           <button onClick={()=>{
            obj.add({userId:parseInt(obj.userId),id:parseInt(obj.id),title:obj.title,completed:obj.completed==='true'?true:false})
            // console.log({userid:obj.userId,id:obj.id,title:obj.title,completed:obj.completed})
           }} className='rounded-lg py-4 border-none font-sans bg-blue-600 text-white text-lg px-12'>Add</button>
           </div>
    </div>
    )
}
export default Place