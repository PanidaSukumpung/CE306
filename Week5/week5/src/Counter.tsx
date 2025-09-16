import React, { useState } from "react";
import './Counter.css'

interface CounterProps {
    initialCount ?: number;
}
const Counter: React.FC<CounterProps> = ({initialCount = 0}) => {
    const [count, setCount] = useState<number>(initialCount);
    return (
        <div className="container">
            <h2>Counter Exercise</h2>
            <p>{count}</p>
            <div className="all-btn">
                <button className="btn-increase" onClick={() => setCount(count + 1)}>+ เพิ่ม</button>
                <button className = 'btn-decrease' onClick={() => setCount(count - 1)}>- ลบ</button>
                <button className="btn-reset" onClick={() => setCount(0)}> Reset </button>
            </div>
        </div>
    )
}

export default Counter;