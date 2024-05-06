import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count}></Count>
      <Buttons count ={count} setCount={setCount}></Buttons>
    </div>
  );
}

function Count({count}) {
  return <div>{count}</div>;
}
function Buttons({count,setCount}) {
  return (
    <div>
      <button  onClick={()=>setCount(count+1)}>Increase</button>
      {/* <button onClick={() => (setCount((prevCount)=>prevCount + 1))}>Increase</button> */}
      <button onClick={() => ( setCount((prevCount)=>prevCount - 1))}>Decrement</button>
    </div>
  );
}
