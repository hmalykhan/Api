export const get=async<T>(url:string):Promise<T> =>{
    const raw=await fetch(url)
    return await raw.json()
}
export const insert=async<T>(url:string,obj:T):Promise<T> =>{
    const raw=await fetch(url,{method:'POST',body:JSON.stringify(obj),  headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },})
    return await raw.json()
}
export const put=async<T>(url:string,obj:T):Promise<T> =>{
  const raw=await fetch(url,{method:'PUT',body:JSON.stringify(obj),  headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },})
  return await raw.json()
}
export const del=async(url:string) =>{
  const raw=await fetch(url,{method:"DELETE"})
}