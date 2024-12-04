import React, { useEffect, useState, useRef } from "react";
// import 
import { useDispatchCart, useCart } from "./ContextReducer";
import { useSearchParams } from "react-router-dom";


// let data
export default function Card(props) {
    let dispatch = useDispatchCart();

    let data = useCart();
    // const/
    // const priceRef//
    // const priceRef=useRef/
    // 
    // const priceRef=useRef/
    // const price/
    const priceRef = useRef();


    // let options 
    // let options=
    let options = props.options || {};
    // let priceOptions=Object.keys(options);
    let priceOptions = Object.keys(options);

    // use/
    // useState(1)
    const [qty, setQty] = useState(1)
    // const
    // const [size]
    // cs
    // const [size, setSize] = useState("")
    // const [szie]
    const [size, setSize] = useState("")

    // let foosItem
    // let foodItem = props.foodItem;
    // let foodItem=props.foodItem;
    // let foodItem=props.foodIt/
    // let foodItem=props.foodItes
    // let foodItem=props.foodIteml
    // let foodItem=props.foodItem;
    // let foodItem=props.foodItem
    // let foodItem = props.foodItem;
    // const handleAddToCart/

    const handleAddToCart = async () => {


        // let food=[]
        let food = []
        // for(const items of dat/)
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;

                break;
            }
        }
        // if (food !== [])
        if (food.length !== 0) {
            if (food.size === size) {
                // await dispatch({type:})
                // await/
                // await dispatch({type:"UPDATE",id:})
                // await /
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                // return'
                return
            }
            // else if()
            // else if(food./)
            // else if(food.size!==size)
            else if (food.size !== size) {

                // { await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })}
                // await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                // return
                return
            }
            // 
            // return/
            // 
            // return 
            // 
            // return/
            // 
            // return/
            // return
            // re/
            // return
            // return
            // return/
            // 
            // retr/
            // 
            // 
            // 
            // 
            // 
            // return/
            // retn//
            // retrn/
            // return/
            return

        }

        // await
        // await dispatch({t//})
        // await dispatch({type})
        await dispatch({ type: 'ADD', id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        // console.log(dispatch)
        // console.log(state)///
        // console.log(state)
        // conso/
        // console.log(d)
        // console.log(data)/
        console.log(data);
    }

    let finalPrice = qty * parseInt(options[size]);
    // useEffect(())
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])
    return (
        // <div>Card</div>
        <div>



            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                {/* <img className="card-img-top" src="https://th.bing.com/th/id/OIP.mcrj7U4Xu2611XJap1ToJQHaE8?rs=1&pid=ImgDetMain" style={{ "width": "100%", "maxHeight": "200px" }} alt="Card image cap" /> */}
                {/* <img className="card-img-top" src={props.imgSrc} style={{ "width": "100%", "maxHeight": "200px" }} alt="Card image cap" /> */}
                <img className="card-img-top" src={props.foodItem.img} style={{ width: "100%", height: "200px", objectFit: "cover" }} alt="Card image cap" />
                <div className="card-body">
                    {/* <h5 className="card-title">{props.foodName}</h5> */}
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">Some quick example text */}
                    {/* to build on the card title and make up the bulk of the card's content. */}
                    {/* </p> */}


                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {/* {
                  Array.from(Array(4),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })
                }
                 */}
                            {/* <option zvalue="Half">Half</option>
                        <option value="Full">Full</option> */}

                            {priceOptions.map((data) => {
                                // return/
                                // return <option key={data} value={data}></option>
                                // return <option key={data} value={data}>{data}</option>
                                return <option key={data} value={data}>{data}</option>
                            })

                            }
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            {/* Total Price */}
                            {/* $(finalPrice) */}
                            {/* $(finalPrice)/- */}
                            ${finalPrice}/-
                        </div>
                    </div>
                    {/* <hr></hr> */}
                    <hr></hr>
                    {/* button */}
                    {/* <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add To Cart</button>   */}
                    {/*  */}
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success" onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}