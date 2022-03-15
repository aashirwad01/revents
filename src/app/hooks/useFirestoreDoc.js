import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asynActionFinish } from "../../../../../../Documents/webD-neog/revents/src/app/async/asyncReducer";
import { asynActionError, asynActionStart } from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/firestoreService";

export default function useFirestoreDoc({query,data,deps, shouldExcecute = true})
{
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!shouldExcecute) return ;
        dispatch( asynActionStart() );
        const unsubscribe = query().onSnapshot(
            snapshot => {
               
                if(!snapshot.exists){
                    dispatch(asynActionError({code: 'not-found' , message:'Could not find document' }))
                    return
                }
                data(dataFromSnapshot(snapshot))
                dispatch( asynActionFinish() )
            },
            error => dispatch( asynActionError() )
        );
        return () => {
            unsubscribe()
        }
    },deps) 

}