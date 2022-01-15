import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Notes = ({ notes, onRemove }) => {
    return (
            <TransitionGroup 
                component='ul'
                className="list-group"
            >
                {notes.map( (note) => { 
                    return (
                        <CSSTransition
                        key={note.id}
                        timeout={800}
                        classNames={'note'}
                        >            
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between w100 p-2">
                                    <strong>{note.title}</strong>
                                    <small>{note.date}</small>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn btn-outline-danger"
                                    onClick={() => onRemove(note.id)}
                                    >
                                        X
                                </button>
                            </li>
                        </CSSTransition>

                    )
                }).reverse()}
            </TransitionGroup>

    );
};

export default Notes;