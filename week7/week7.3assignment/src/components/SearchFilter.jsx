import React from 'react'
import {
    useRecoilValue,
    useRecoilState,
    RecoilRoot,
    useSetRecoilState,
  } from "recoil";
  import { AllTodos, titleState, descriptionState ,SearchFilterState} from "../store/atoms/todos";

function SearchFilter() {
    const filterValue=useSetRecoilState(SearchFilterState)
  return (
    <div>
         <div>SearchFilter</div>
        <input onChange={(e)=>(filterValue(e.target.value))} placeholder='search your todo'></input>
    </div>
   
  )
}

export default SearchFilter