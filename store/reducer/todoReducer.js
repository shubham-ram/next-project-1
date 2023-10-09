import { ADD_TODO, DELETE_TODO } from "../action/type"

const initialState = []

const toDoReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_TODO:
            return state.filter((todo)=>todo.id !== action.payload)
        default: 
            return state
    }
}

export default toDoReducer