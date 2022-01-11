import React from 'react';

const Alert = ({ alert }) => {
    if(!alert) return null
    return (
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>Ахтунг!</strong> Вы что-то нажали, перезагрузите компьютер.&nbsp; 
                {alert.text}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    );
};

export default Alert;