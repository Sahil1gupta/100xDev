
import {atom,selector} from 'recoil'

export const AllTodos=atom({
    key:'AllTodos',
    default:[]
})
export const titleState=atom({
    key:'titleState',
    default:''
})

export const descriptionState=atom({
    key:'descriptionState',
    default:''
})

export const SearchFilterState=atom({
    key:'SearchFilterState',
    default:''
})

export const FilteredData=selector({
    key:'FilteredData',
    get:({get})=>{
        const AllTodo=get(AllTodos)
        const SearchFilter=get(SearchFilterState)

      const filteredData=  AllTodo.filter((todo)=>{
           return todo.Title.toLowerCase().includes(SearchFilter.toLowerCase())
        })
        return filteredData
    }
})