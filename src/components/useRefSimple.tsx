import { useRef, useState } from "react";

const UseRefSimple = () => {
    const inPutRef = useRef(null);
    const [isFocused, setFocus] = useState(false);
    if (isFocused) {
        inPutRef.current.focus();
    }
    return (
        <div>
            {<input ref={inPutRef} />}
            <button
                onClick={
                    !isFocused ? () => setFocus(true) : () => setFocus(false)
                }
            >
                Focus On Input
            </button>
        </div>
    );
};
export { UseRefSimple };
