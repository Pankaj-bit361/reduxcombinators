import { getdata, setdata } from "../../utils/getdata"
import { LOGINPOST } from "./actiontypes"

const initstate={ 
   token:getdata("token")||"",
    authstate:getdata("authstate")||false
}

export const reducer=(state=initstate,{type,payload})=>{
    switch(type){
        case LOGINPOST:{
            setdata("token",payload)
            setdata("authstate",payload?true:true)
return {
    ...state,authstate:true,token:payload
}
        }
        default:{
            return state
        }
    }
}