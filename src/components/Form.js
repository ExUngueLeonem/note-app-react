import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import FirebaseContext from '../context/firebase/farebaseContext';

const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = (e) => {
        e.preventDefault();

        if(value.trim()) {
            firebase.addNote(value.trim()).then( () => {
                alert.show('заметка создана', 'success');
            }).catch( () => { 
                alert.show('кто-то накосячил', 'danger')
            })
            setValue('')
        } else {
            alert.show('введите текст');
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e => setValue(e.target.value)}/>
            </div>
        </form>
    );
};

export default Form;