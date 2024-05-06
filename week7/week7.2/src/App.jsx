import { useContext, useState } from "react"
// import { CountContext } from "./context";
import { useRecoilValue,useRecoilState, RecoilRoot, useSetRecoilState } from "recoil";
import { CountAtom,EvenSelector } from "./store/atoms/Count";


function App() {
  
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
     <RecoilRoot>  {/* yaha provider jo ki RecoilRoot hai usk andar wrap kia ha*/}

     <Count />
     </RecoilRoot>
      
     
    </div>
  )
}

function Count() {
  console.log("count re-renderd")
  return <div>
    <CountRenderer />
    <Buttons />
    <IsEven></IsEven>
    
  </div>
}

function CountRenderer() {   // is child me recoil use kiya hai
  const count=useRecoilValue(CountAtom)

  return (
    <div>
      {count}
      {/* {count % 2 === 0 && <IsEven />} */}
    </div>
  );
}

function Buttons() {
  // const [count,setCount]=useRecoilState(CountAtom)//yaha bhi recoil use kiya hai
  // if we are using above useRecoilState we accessing count as well although we can get this using diffenret approach like setCount((Prev_count)=>Prev_count+1) and this approach we help in by not to re-rendering of Buttons component.

  const setCount= useSetRecoilState(CountAtom)
  console.log("button re-rendering")
  return <div>
    <button onClick={() => {
      // setCount(count + 1) //used when useRecoilState was using
      setCount(prev_count=>prev_count+1)
      
    }}>Increase</button>

    <button onClick={() => {
      // setCount(count - 1)
      setCount(prev_count=>prev_count-1)
    }}>Decrease</button>
  </div>
}


function IsEven() {
  // const count = useRecoilValue(CountAtom);
  console.log("Is even rendering");
  
  // if (count % 2 === 0) {
  //   return (
  //     <div>
  //       <p>Count is Even</p> 
  //     </div>
  //   );

  //best solution 
  /*const  iseven= useMemo(()=>{
    return count%2==0;
  },[count])

  return (
    <div>
      {iseven?"count is even":null}
    </div>
  )
  */

  //another best solution
  const iseven=useRecoilValue(EvenSelector)
  
    return (
      <div>
        {iseven? `<p>Count is Even</p>`:null}
      </div>
    );
  
  
  // return null; // If count is not even, return null or nothing
}
export default App