// Simple Use Of State Function
import { useState } from "react";
const ChangeText = () => {
    const [name, changeName] = useState("Loading Name");
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => changeName("Karandeep Virk")}>
                Click Me
            </button>
        </div>
    );
};

export { ChangeText };
