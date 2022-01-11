import React from 'react';

const Form = () => {
    return (
        <form>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Введите название заметки"/>
            </div>
        </form>
    );
};

export default Form;