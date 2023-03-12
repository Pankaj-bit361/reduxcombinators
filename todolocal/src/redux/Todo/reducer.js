import { ADDTODO } from "./actiontypes";

const initstate={
  Todos:[]
}

export const reducer =(state=initstate,{type,payload})=>{
    switch(type){
        case ADDTODO:{
            return {
                ...state,Todos:[...state.Todos,payload]
            }
        }
        default:{
            return state
        }
    }
}