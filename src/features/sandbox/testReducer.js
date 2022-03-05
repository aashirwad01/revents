import { toast } from "react-toastify";
import { asynActionError, asynActionFinish, asynActionStart } from "../../app/async/asyncReducer"
import { delay } from "../../app/common/util/util";

//actions 
const INCREMENT_COUNTER='INCREMENT_COUNTER'
const DECREMENT_COUNTER='DECREMENT_COUNTER'


//action creaters
export function increment(amount){

    return async function(dispatch){
        dispatch(asynActionStart());

        try{
            await delay(1000)
            dispatch( {
                    type:INCREMENT_COUNTER,
                     payload:amount
                 })
            dispatch(asynActionFinish());

        }catch(error){
            dispatch(asynActionError(error))
        }
       
    }

}

export function decrement(amount){
    return async function(dispatch){
        dispatch(asynActionStart());

        try{
            await delay(1000)
           
            dispatch( {
                    type:DECREMENT_COUNTER,
                     payload:amount
                 })
            dispatch(asynActionFinish());

        }catch(error){
            dispatch(asynActionError(error))
            toast.error(error);
        }
}

}

//initial data

const initialState={
    data:42
}

//reducer pure function

export default function testReducer(state=initialState , action){
    
    switch(action.type){
        case INCREMENT_COUNTER:
            return{
                ...state,
                data:state.data+action.payload
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                data:state.data-action.payload
            };
        default:
            return state;
    }
}