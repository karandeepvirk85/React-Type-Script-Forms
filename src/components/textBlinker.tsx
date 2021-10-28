import { useState } from "react";
function TextBlinker() {
    const [color, setColor] = useState("red");
    const arrColors = [
        "pink",
        "blue",
        "green",
        "gray",
        "black",
        "yellow",
        "skyblue",
        "orange",
    ];
    setInterval(function () {
        setColor(
            arrColors[Math.floor((Math.random() as any) * arrColors.length)]
        );
    }, 100);

    return (
        <>
            <div>
                <h1>Text Blinker</h1>
                <div style={{ color: color }}>
                    <h2>I am Blinking</h2>
                </div>
            </div>
        </>
    );
}
export default TextBlinker;
