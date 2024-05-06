import React, { useState, useCallback, memo } from "react";

export function Assignment1() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(
        function(prevCount){
            return setCount(prevCount+1)  
        },[]
    );
//upar usecallback me we can write only setCount(count+1) it will work but the catch is we need to pass the 'count' state as dependency
//to get free from this we can create the function within useCallback aur ye function ke pass automatically preCount bolo ya Currentcount rehta hi hai jisko hum log access kr sakte h to count ko as a dependecy pass krne ki need nhi hai 
    const handleDecrement = useCallback(
        () => setCount((prevCount) => prevCount - 1),
        []
    );

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

// eslint-disable-next-line react/display-name
const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
