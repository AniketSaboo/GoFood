// i
import React, { createContext, useContext, useReducer } from "react";

// const CartStateContext=createContext();
const CartStateContext = createContext();
// cons/
const CartDispatchContext = createContext();
// export default function ContextReducer(){
//     return(
//         <div>ContextReducer</div>
//     )
// }

// export 
// export const Cart
// export const 

// const 
// const reducer/


// const 
// const /
// const reducer/
// const 
// const reducer=
const reducer = (state, action) => {
    // 
    // switch
    switch (action.type) {
        case "ADD":
            // return[...state,{}]
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]

        case "REMOVE":
            // let
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        // case
        // case/
        case "UPDATE":
            let arr = [...state]
            // newAr/
            // arr.find((food,index)=>{})

            // arr
            // arr.find((f)/)
            // arr.find((food,index/))
            // arr.find((food,index)=>)
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)

                    // arr[index]
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                // return arr/
                // r
                return arr
            })
            // return arr/
            // return a
            // retrun a
            return arr
        case "DROP":
            let empty_arr = []
            return empty_arr
        default:
            // console.log("")
            // console
            // console.log("Error in Reducer")
            console.log("Error in Reducer");
    }
}
export const CartProvider = ({ children }) => {
    // const [state,dis//]
    // const [state,dispatch]//
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {/* {chu/} */}
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

// export
// 
// export const useCart/
// export const useCart=()=>useContext(Car)
// export const useCart=()
// export /
// export const useCart=()=>useContext(CartStateContext);

// export const useCart=()
export const useCart = () => useContext(CartStateContext);
// export const useDispatchCart
export const useDispatchCart = () => useContext(CartDispatchContext);