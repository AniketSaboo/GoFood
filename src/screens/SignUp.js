import React from "react";
import { useState } from "react";
import { createSearchParams, Link } from "react-router-dom";

export default function SignUp() {
  // const
  // const

  // const <handleSubmit />
  // useState
  // const [first,setfirst]
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response=fetch("")
    // const response
    

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // bosy:JSON.stringify()/
      body: JSON.stringify({
        // name:credentials
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        // location:credentials.location
        // location
        // location:credentials.geolocation
        // location:credentials.geolocation
        // location:credentials.g//l
        location: credentials.geolocation,
      }),
    });
    // const json
    // const json=await//
    // const json=await response.json///
    // const json=await response.json()
    // const
    // const json=await respinse
    // const json =await response.json()
    // console.log(json)
    const json = await response.json();
    console.log(json);

    // if(!json)
    // <if />
    // if(!json.success)/
    // if(!json.sux)
    // if(!json)
    if (!json.success) {
      alert("Enter valid Credentials");
    }
  };

  // const onChange
  // const onChange=()
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    // <div>SignUp</div>

    <>
      {/* <div className='container'></div> */}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // emial/
              name="email"
              value={credentials.email}
              // id="exampleemail"
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              // password/
              // password='password' value={credentials.password}
              // password='password' value={cre}//
              // password
              // password='password'
              // value={credentials.password}
              name="password"
              // value={credentials}
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              // emial/
              name="geolocation"
              value={credentials.geolocation}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}