import React from "react";
import {
  useRecoilValue,
  useRecoilState,
  RecoilRoot,
  useSetRecoilState,
} from "recoil";

import { AllTodos, titleState, descriptionState,FilteredData } from "../store/atoms/todos";

function ShowTodos() {
  const allTodos = useRecoilValue(AllTodos);
  const FilteredDat=useRecoilValue(FilteredData);
  console.log(FilteredDat)
  return (
    <div>
      {allTodos.map((todo, index) => (
        <div key={index} style={{ background: "pink", marginBottom: 10 }}>
            <p>{todo.Title}<br></br>
            {todo.Description}
            </p>
            
        </div>
      ))}
    </div>
  );
}

export default ShowTodos;
