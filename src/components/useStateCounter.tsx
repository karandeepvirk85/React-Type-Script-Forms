import { useState } from "react";

const UseStateCounter = () => {
    // Set Initial State
    const [count, setCounter] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCounter(count + 1)}>Click</button>
        </>
    );
};

export default UseStateCounter;
