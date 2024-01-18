import React, { useState } from 'react';

const State = () => {
    
    const [value,setValue] = useState(0)

    const add = () =>{
        setValue(value+1)
    }

    const remove = () =>{
        setValue(value-1)
    }

    return (
        <div>
            <h2>Count {value}</h2>
            <button onClick={add}>Increment</button>
            <button onClick={remove}>Decrement</button>
            <h3>This is state component from state.jsx</h3>
        </div>
    );
};

export default State;