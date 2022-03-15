import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asynActionFinish } from "../../../../../../Documents/webD-neog/revents/src/app/async/asyncReducer";
import { asynActionError, asynActionStart } from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/firestoreService";

export default function useFirestoreCollection({query,data,deps})
{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch( asynActionStart() );
        const unsubscribe = query().onSnapshot(
            snapshot => {
                const docs = snapshot.docs.map(doc => dataFromSnapshot(doc) )
                data(docs)
                dispatch( asynActionFinish() )
            },
            error => dispatch( asynActionError() )
        );
        return () => {
            unsubscribe()
        }
    },deps) 

}