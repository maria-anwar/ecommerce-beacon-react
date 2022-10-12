import {createContext} from "react"

export const CartContext = createContext({
    id:'',
    category:'',
    name:'',
    img:'',
    description:'',
    price:'',
})
