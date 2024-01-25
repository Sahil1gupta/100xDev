import { useEffect, useMemo, useState } from "react";

export function App2() {
  const [inputValue, setInputValue] = useState(1);
  const [counter, setCounter] = useState(0);
  console.log("app2 entered");

  //useMemo
  const Finalsum = useMemo(() => {
    console.log("Calculating sum...");
    let result = 0;
    for (let i = 1; i <= inputValue; i++) {
      result += i;
    }
    return result;
  }, [inputValue]);

  const handleChange = (event) => {
    console.log("hlg");
    setInputValue(parseInt(event.target.value));
  };

  //using useEffect
/*  const [count,setCount]=useState(0);
    useEffect(()=>{
    let finalCount=0;
     for(let i=1;i<=inputValue;i++){
         finalCount=finalCount+1;
    }
     setCount(finalCount)
   },[inputValue])   //inputValue change hoga to re-rnder hoga fr setCount ye vala state bhi update hoga to vaps se re-render hoga ...useEffect use krne se apne ko ek extra state create krna pad rha h isliye useMemo is better option
*/
  return (
    <div>
      <input
        style={{ margin: 10, padding: 10 }}
        placeholder="write here"
        onChange={handleChange}
      />
      <h3>{`The sum is ${Finalsum}`}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        click me {counter}
      </button>
    </div>
  );
}
