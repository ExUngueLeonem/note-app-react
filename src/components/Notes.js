import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Notes = ({ notes, onRemove }) => {
    return (
/*         <CSSTransition
            timeout={750}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
 */            <ul className="list-group">
            {notes.map( (note) => { 
                return (
                    <div key={note.id}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between w100 p-2">
                                <strong>
                                    {note.title}
                                </strong>
                                <small>
                                    {note.date}
                                </small>
                            </div>
                            <button 
                                type="button" 
                                className="btn btn-outline-danger"
                                onClick={() => onRemove(note.id)}
                                >
                                    X
                            </button>
                        </li>
                    </div>
                )
            }).reverse()}
            </ul>
/*         </CSSTransition>
 */
    );
};

export default Notes;