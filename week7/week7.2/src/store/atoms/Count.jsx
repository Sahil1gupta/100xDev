import {atom,selector} from 'recoil'
// atom --->useState
export const CountAtom=atom({
    key:'CountAtom',
    default:0
})

export const EvenSelector=selector({
    key:'EvenSelector',
    get:({get})=>{
        const count=get(EvenSelector)
        return count%2;
    }
})