import React, { useReducer } from "react";
import FirebaseContext from "./farebaseContext";
import { firebaseReducer } from "./firebaseReducer";



const FirebaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    return (
        <FirebaseContext.Provider value={
            ''
        }>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;