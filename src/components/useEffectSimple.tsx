import { useEffect, useState } from "react";

const UseEffectSimple = () => {
    const [current, update] = useState(1);
    useEffect(() => {
        document.title = `hello ${current}`;
    });
    return (
        <div>
            <h1>Update Page Title</h1>
            <p>You have clicked {current} times.</p>
            <button onClick={() => update(current + 1)}>Click</button>
        </div>
    );
};
export default UseEffectSimple;
