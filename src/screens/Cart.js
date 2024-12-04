import React from 'react'
// import trash from "../trash.svg"
// import trash from '../assets/trash.svg';

// export default functoin CartProvider(){}
// import {useCart/}
// import {useCart,useDispatchCart} from '../components/ContextReducer';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
    // let data/
    let data = useCart();
    let dispatch = useDispatchCart();
    // if(data.length)
    // console.log("Cart data:", data);

    if (data.length === 0) {
        console.log("Your Cart is Empty");
        return (
            <div>
                {/* console.log("Empty") */}
                {/* console.log("Your CArt is emoty") */}
                {/* cons */}
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
            </div>
        )
    }
    // const handleCheckOut.
    // const handleCheckOut
    const handleCheckOut = async () => {
        // let/
        // let userEmail=local/

        // let userEm/
        let userEmail = localStorage.getItem("userEmail");
        // let response
        // let/
        // let response = awiat /
        // let response = await fetch("https::/")
        // let response = await fetch("https://localhost:5000/api")
        // let response = await fetch("https://localhost:5000/api/OrderData")
        // let
        // let response 
        // let response /
        // let response =await fetch("https://localhost:5000/api/orderData")
        // let response=await fetch
        let response = await fetch("http://localhost:5000/api/orderData",
            {
                method: 'POST',
                headers: {
                    // 'Content'
                    // 'Content-Type/'
                    // 'Contenr'
                    // 'C/'
                    'Content-Type': 'application/json'
                },
                // body:JSON.stringify
                body: JSON.stringify(
                    // order_data:data/

                    {
                        order_data: data,
                        email: userEmail,
                        oreder_data: new Date().toDateString()
                    }
                )
            }
        );
        // if(response)
        // if()
        // if(response.statue)
        // console.log()
        // console.log("Order Response")
        console.log("Order Response: ", response)
        if (response.status === 200) {
            // dispatch({type:"DRO"})
            // dispatch({type:"DROP"})

            // dispatch
            // dispatch({type:"DROP"})
            dispatch({ type: "DROP" })
        }
        else{
            console.log("Nahi chal rha hai");
            
        }
    }
    // let/
    // let totalPrice=data.reduce((total))
    // let totalPrice=data.reduce((total,food)=>total+)
    // let toalPrice=data.reduce((total/))
    // let/
    // let/
    // let toalPrice
    // let toalPriceda
    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    return (
        // <du/
        // <div></div>
        <div>
            <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>

                {/* <table className='table table-hover'></table> */}
                {/* <table className='table table-hover'> */}
                {/* <table className='table table-hover'> */}
                <table className='table table-hover text-success'>
                    <thead className='text-success fs-4'>
                        <tr>
                            {/* <th scope='col'>#</th> */}
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Quantity</th>
                            <th scope='col'>Option</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    {/* <tbody></tbody> */}
                    <tbody>
                        {
                            data.map((food, index) => (
                                <tr>
                                    {/* <th scope='row'>{index+1}</th> */}
                                    {/* <th scope='row' className='text-success'>{index + 1}</th> */}
                                    <th scope='row' className='text-success'>{index + 1}</th>
                                    <td>{food.name}</td>
                                    <td>{food.qty}</td>
                                    <td>{food.size}</td>
                                    <td>{food.price}</td>
                                    <td><button type="button" className='btn p-0'>
                                        <img src="https://via.placeholder.com/20" alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} />
                                        {/* <img src={trash} alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /> */}

                                    </button></td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
                {/* <div> */}
                <div>{totalPrice}</div>
                <div>
                    <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
                </div>
            </div>
        </div>
    )
}