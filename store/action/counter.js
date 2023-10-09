import { DESCREMENT_COUNTER, INCREMENT_COUNTER } from "./type"

export const incrementCounter=(payload)=>{
    return {
        type: INCREMENT_COUNTER,
        payload: payload
    }
}

export const decrementCounter = (payload)=>{
    return {
        type: DESCREMENT_COUNTER,
        payload: payload
    }
}
