import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((currentCount) => currentCount + 1)
    }
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;