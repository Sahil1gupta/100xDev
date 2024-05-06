import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useRecoilValue,useRecoilState, RecoilRoot, useSetRecoilState } from "recoil";

import Todos from './components/Todos'
import ShowTodos from './components/ShowTodos';
import SearchFilter from './components/SearchFilter';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hii</h1>
      <RecoilRoot>
      <Todos/>
      <SearchFilter/>
      <ShowTodos/>
      </RecoilRoot>
     
    </div>
  )
}

export default App
