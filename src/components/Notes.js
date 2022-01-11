import React from 'react';

const Notes = ({ notes }) => {

    const notesItems = (notes) => {
        return notes.map( (note) => { 
            return (
                <div key={note.id}>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between w100 p-2">
                            <strong>
                                {note.title}
                            </strong>
                            <small>
                                {new Date().toLocaleDateString()}
                            </small>
                        </div>
                        <button 
                            type="button" 
                            className="btn btn-outline-danger">
                                X
                        </button>
                    </li>
                </div>
            )
        })
    }

    return (
        <ul className="list-group">
            {notesItems(notes)}
        </ul>
    );
};

export default Notes;