import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext.js';

const Alert = () => {
const { alert, hide } = useContext(AlertContext);

    if(!alert) return null
    return (
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Ахтунг!</strong> Вы что-то нажали, перезагрузите компьютер.&nbsp; 
                {alert.text}
                <button onClick={hide} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    );
};

export default Alert;