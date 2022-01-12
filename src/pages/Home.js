import React, { useContext, useEffect } from 'react';
import FirebaseContext from '../context/firebase/farebaseContext';

import Form from '../components/Form';
import Notes from '../components/Notes';
import Loader from '../components/Loader';


const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext);
    
    useEffect(() => {fetchNotes()},
    //eslint-disable-next-line 
    [])

    console.log("loading", loading);
    
    return (
        <>
            <Form/>
            <hr/>
            
{/*             {loading 
                ? <Loader /> 
                : <Notes notes={notes} />
            }
 */}            
                <Loader /> 

        </>
    );
};

export default Home;