import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0);

    const handleClicked = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const clickMe = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

    return (
        <div style={{
            border: "2px solid red",
            marginTop: "10px",
            marginBottom: "20px"
        }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleClicked}>Add</button>
            <button onClick={clickMe}>subtract</button>
        </div>
    )
}