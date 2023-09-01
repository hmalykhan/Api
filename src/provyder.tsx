"use client"
import { magzine,inter_data } from "./context";
import React from "react";
import { useState } from "react";
const Provyder=({children,}:{children:React.ReactNode})=>{
    const [arr,setarr]=useState<inter_data[]>([])
    const [userId,setuserid]=useState("")
    const [id,setid]=useState("")
    const [title,settitle]=useState("")
    const [completed,setcompleted]=useState("")
    const [del,setdel]=useState()
    const add=(obj:inter_data)=>{
        let data=arr.find((item)=>{return item.id==obj.id})
        // console.log(data)
        if(data){let mag=arr.filter((item)=>{return item.id!==obj.id})
        const put=async()=>{
            const raw=await fetch(`https://jsonplaceholder.typicode.com/todos/${obj.id}`,{method:'PUT',body:JSON.stringify(obj),  headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },})
            }
            put()
            setarr([obj,...mag])
            setuserid("")
            setid("")
            setcompleted("")
            settitle("")
        // console.log(mag)
        return
      }
      else{
        const insert=async()=>{
          const raw=await fetch('https://jsonplaceholder.typicode.com/todos',{method:'POST',body:JSON.stringify(obj),  headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },})
          }
          insert()
          setarr([obj,...arr])
          setuserid("")
            setid("")
            setcompleted("")
            settitle("")
          // console.log("this is the else part.",data)
        }
    }
    const terminate=(id:number)=>{
        let mag=arr.filter((item)=>{return item.id!==id})
        const del=async() =>{
            const raw=await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{method:"DELETE"})
          }
          del()
          setarr([...mag])
    }
    return(
        <div>
            <magzine.Provider value={{arr,setarr,userId,setuserid,id,setid,title,settitle,completed,setcompleted,add,del,setdel,terminate}}>
            {children}
            </magzine.Provider>
        </div>
    )
}
export default Provyder