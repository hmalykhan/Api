"use client"
import { createContext } from "react"
export interface inter_data{
    userId:number
    id:number
    title:string
    completed:boolean
}
interface chek{
    [z:string]:any
}
export const magzine=createContext({} as chek)