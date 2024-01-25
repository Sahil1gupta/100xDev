import { useState } from "react";
import { Header } from "../components/Header";
import "./App.css";
//https://gist.github.com/Sahil1gupta/63a177c62fa25c074097601cf91fa8c4  --same notes.txt me dala hai

//https://gist.github.com/Sahil1gupta/2ff8f5aa0ddc16b68ebb114fc33b07bb  --todo task
function App() {
  return  <div>
  <CardWrapper innerComponent={<TextComponent/>}/>

  </div>
}


function CardWrapper({innerComponent}){
    return <div style={{border:"2px solid black",padding:"10 px"}}>
      {innerComponent}
    </div>
}

function TextComponent(){
  return <div>
    hii there
  </div>
}

// const Header=React.memo(function({"pass-your-props"}){
//           return (
//             <div>
//               {pass-your-props}
//             </div>
//           )
// })
export default App;
