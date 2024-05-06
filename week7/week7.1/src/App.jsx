import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
const Dashboard=React.lazy(()=>import("./components/Dashboard"));
import ToggleComponent from "./components/ToggleComponent";
import { Counter } from "./components/Counter";
import  Header from "./components/Header"
import  Footer from "./components/Footer"
function App() {
  return (
    <BrowserRouter>
      <div>
        <ToggleComponent />
        <Header/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={<div>loading...</div>}><Dashboard /></Suspense>} /> 
           {/* react.lazy() use kr rhe hai to Suspense use krna padega aur react.lazy optimization ke liye use kr rhe hai jab route krege to sirf uska hi content backend se milna chaiye agar normal routing krte h to sare pages ka information aa jata h jiski need nhj hume user jo route pe jaye bs uska content mile isliye lazy loading use krne ka */}
          <Route path="/" element={<Landing />} />
        </Routes>
        
        {/* Propdeling */}
        <Counter></Counter>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
