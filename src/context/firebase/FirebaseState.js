import React, { useReducer } from "react";
import axios from 'axios';
import FirebaseContext from "./farebaseContext";
import { firebaseReducer } from "./firebaseReducer";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../types";
import { REACT_APP_DB_URL } from '../../secureVar.js';

const url = REACT_APP_DB_URL;

const FirebaseState = ({ children }) => {
    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchNotes = async () => {
        showLoader();
        try {
            const res = await axios.get( `${url}/notes.json`)
            
            const payload = Object.keys(res.data).map( key => {
                return {
                    ...res.data[key],
                    id:[key]
                }
            })
            
            dispatch({type: FETCH_NOTES, payload})
        } catch (error) {
            console.log('бжж база данных пуста');
        }

    }

    const addNote = async ( title ) => {
        const note = {
            title, date: new Date().toJSON()
        }

        try {
            const res = await axios.post(`${url}/notes.json`, note)
            const payload = {...note, id: res.data.name}

            dispatch({
                type: ADD_NOTE,
                payload
            })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const removeNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`)
        console.log(id);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, addNote, removeNote, fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;