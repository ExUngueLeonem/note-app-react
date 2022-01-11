import React from 'react';
import Form from '../components/Form';
import Notes from '../components/Notes';

const Home = () => {
    const notes = new Array(4)
        .fill('')
        .map((item, i) => ({id: i, title: `Note ${i + 1}`}));

    return (
        <div>
            <Form/>
            <hr/>
            <Notes notes={notes} />
        </div>
    );
};

export default Home;