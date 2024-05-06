import React from "react";
import {
  useRecoilValue,
  useRecoilState,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";
import { AllTodos, titleState,descriptionState } from "../store/atoms/todos";
import { useEffect } from "react";

function Todos() {
  const [allTodos, setAllTodos] = useRecoilState(AllTodos);
  const [title, setTitle] = useRecoilState(titleState);
  const [description, setDescription] = useRecoilState(descriptionState);
  
  const addTodo = () => {
    // Add the new todo to the existing list of todos
    setAllTodos([...allTodos, { Title: title, Description: description }]);
    console.log(allTodos)
  };
  useEffect(()=>{
    console.log(allTodos)
  },[allTodos])
  return (
    <div>
      <h2>hello</h2>
      <input
        
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="enter title"
      />
      <input
        
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="enter description"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Todos;
