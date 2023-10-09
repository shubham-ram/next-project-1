import { INCREMENT_COUNTER,DESCREMENT_COUNTER, INCREMENT_COUNTER_2, DESCREMENT_COUNTER_2 } from "../action/type";

const counterReducer =(state=0, action)=>{
    switch(action.type){
        case INCREMENT_COUNTER:
            return state + action.payload
        case DESCREMENT_COUNTER:
            return state - action.payload;
        default :
            return state
    }
}

export default counterReducer