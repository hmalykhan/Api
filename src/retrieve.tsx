"use client"
import { useState } from "react"
import { useContext } from "react"
import { magzine,inter_data } from "./context"
import {get} from './cruds'
import { useEffect } from "react"
const Retrieve=()=>{
    const [art,setart]=useState<inter_data[]>([])
    const obj=useContext(magzine)
    useEffect(()=>{const get=async()=>{
      const raw=await fetch('https://jsonplaceholder.typicode.com/todos')
      const data= await raw.json()
      obj.setarr(data)
  }
get()
},[])
    return(
      <div className='grid grid-cols-2 gap-4'>
      {obj.arr.map((mag:inter_data,id:number)=>{
          return(
              <div key={id} className='w-full bg-blue-50 py-10 px-8 rounded-lg flex justify-between shadow-md'>
          <div className='flex flex-col justify-between font-sans text-xl gap-y-3'>
            <div>UserId: {mag.userId}</div>
            <span>Id: {mag.id}</span>
            <span>Title: {mag.title}</span>
            <span>Status: {mag.completed?"true":"false"}</span>
          </div>
          <div className='flex flex-col justify-between items-center font-sans'>
            <div onClick={()=>{obj.terminate(mag.id)}} className='h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-lg cursor-pointer'>X</div>
            <div onClick={()=>{obj.setuserid(mag.userId);obj.setid(mag.id);obj.settitle(mag.title);obj.setcompleted(mag.completed===true?"true":"false")}} className='underline underline-offset-2 cursor-pointer'>Edit</div>
          </div>
        </div>
          )
      })}
      
      </div>
    )
}
export default Retrieve