export const getdata=(key)=>{
    let data=JSON.parse(localStorage.getItem(key))
    return data
}

export const setdata=(key,value)=>(
    localStorage.setItem(key,JSON.stringify(value))
)
    
