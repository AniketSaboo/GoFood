// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// // export 
// // 
// // export default function


// export default function Navbar() {
//     // const 

//     // const/
//     // const name/
//     // const navigate = useNavigate();
//     const navigate = useNavigate();
//     /*const handleLogOut = () => {

//         // localStorage
//         // localStorage.removeItem("authToken")
//         localStorage.removeItem("authToken");
//         // navi/
//         // navigate/
//         // 
//         // navigate("/login")
//         // 
//         // nai/
//         // navigate("/login");
//         // navigate("/login")
//         // 
//         // 
//         // nav/
//         // 
//         // navigate("/login")
//         // 
//         // navigate
//         // navigate("/loin//")
//         // 
//         // navigate/
//         // navigate("/")
//         // navigate//
//         // navigate("/loginuser")
//         //navigate("/loginuser")
//         // navigate("/loginuser")
//         // navigate("/login")/
//         // 
//         // navivate
//         // navigate("/loginuser")
//         // navigate("/loginuser/")
//         // navigate("/loginuser")
//         // navigate("/loginuser")
//         // navigate("/loginuser")
//         // navigate("/log")
//         navigate("/loginuser")

//         // 
//         // 




//     }
// */
//     const handleLogOut = () => {
//         console.log("Before removing authToken:", localStorage.getItem("authTokend"));
//         localStorage.removeItem("authTokend");
//         console.log("After removing authToken:", localStorage.getItem("authTokend")); // Should log `null`
//         navigate("/loginuser");
//     };


//     return (
//         <div>


//             <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand fs-1 fs-italic" to="/">GoFood</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav me-auto mb-2">
//                             <li className="nav-item">
//                                 <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
//                             </li>

//                             {/* <li className="nav-item">
//                                 <Link className="nav-link" to="/">Pricing</Link>
//                             </li> */}

//                             {/* Agar mein pehele se login hun to muje MyCart ka option dikhan chahiye*/}

//                             {(localStorage.getItem("authToken")) ?
//                                 // <div></div>
//                                 <li className="nav-item">
//                                     {/* <Link></Link> */}
//                                     {/* <Li></Li */}
//                                     <Link className="nav-link active fs-5" aria-current="page" to="/"> MyOrders</Link>
//                                 </li>
//                                 : ""

//                             }

//                         </ul>

//                         {(!localStorage.getItem("authToken")) ?
//                             <div className="d-flex">

//                                 {/* <Link className="nav-link" to="/login">Login</Link> */}
//                                 <Link className="btn bg-danger text-success mx-1" to="/loginuser">Login</Link>


//                                 {/* <Link className="nav-link" to="/createuser">SignUp</Link> */}
//                                 <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>

//                             </div>
//                             :
//                             // <div></div>
//                             <div>

//                                 {/* <div className="btn bg-danger text-success mx-2">Cart</div> */}
//                                 <div className="btn bg-danger text-success mx-2">Cart</div>
//                                 <div className="btn bg-danger text-success mx-2" onClick={handleLogOut}>LogOut</div>
//                                 {/* Chal raha hai */}
//                                 {/* /Chal raha hai */}
//                             </div>

//                         }

//                     </div>
//                 </div>
//             </nav>




//         </div>
//     )
// }








import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Modal from '../Modal';
// Cart

import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';


export default function Navbar() {

    // const [cartView,setCartView]=useState()
    // const [cartView,set/]

    // const [cartView,set/]
    let data = useCart();
    const [cartView, setCartView] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = () => {
        console.log("Before removing authToken:", localStorage.getItem("authToken"));
        localStorage.removeItem("authToken"); // Corrected the key
        console.log("After removing authToken:", localStorage.getItem("authToken")); // Should log `null`
        navigate("/loginuser"); // Correct route
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fs-italic" to="/">GoFood</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>

                            {localStorage.getItem("authToken") && (
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" to="/myorders">MyOrders</Link>
                                </li>
                            )}
                        </ul>

                        {!localStorage.getItem("authToken") ? (
                            <div className="d-flex">
                                <Link className="btn bg-danger text-white mx-1" to="/loginuser">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
                            </div>
                        ) : (
                            <div>
                                {/* <div className="btn bg-white text-success mx-2">Cart{" "} */}
                                <div className="btn bg-white text-success mx-2" onClick={() => { setCartView(true) }}>Cart{" "}
                                    {/* {<Badge pill bg="danger">2</Badge>} */}
                                    {/* <Badg></Badg> */}
                                    {/* <Badge pill bg="danger">{data.lengt</Badge> */}
                                    {/* <Badge pill bg="dangr"></Badge> */}
                                    <Badge pill bg="danger"> {data.length}</Badge>
                                </div>
                                {/* {cartView} */}
                                {cartView ? <Modal onClose={() => setCartView(false)}> <Cart /></Modal> : null}

                                <div className="btn bg-danger text-white mx-2" onClick={handleLogOut}>LogOut</div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
