import { ADD_TODO, DELETE_TODO } from "./type"

export const addToDo =(payload)=>{
    return {
        type: ADD_TODO,
        payload,
    }
}

export const deleteToDo =(payload)=>{
    return{  
        type: DELETE_TODO,
        payload
    }
}