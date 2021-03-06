import { fetchSampleData } from "../../app/api/mockApi";
import { asynActionError, asynActionFinish, asynActionStart } from "../../app/async/asyncReducer";
import { CREATE_EVENT, UPDATE_EVENT ,DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";

export function loadEvents(){
    return async function(dispatch){

        dispatch(asynActionStart())
        try{
            const events = await fetchSampleData();
            dispatch({type:FETCH_EVENTS, payload:events})
            dispatch(asynActionFinish())

        }catch(error){
            dispatch(asynActionError(error))

        }
    }
}

export function listenToEvents(events){
    return {
        type:FETCH_EVENTS,
        payload:events
    }
}

export function createEvent(event){
    return {
        type:CREATE_EVENT,
        payload:event
    }
}

export function updateEvent(event){
    return {
        type:UPDATE_EVENT,
        payload:event
    }
}

export function deleteEvent(eventId){
    return {
        type:DELETE_EVENT,
        payload:eventId
    }
}