import React, {useState} from 'react'


const handleLogin = (event)=>{
    console.log("Logged in");
}

export default function Form(props) {
    return (
        <div>
            <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput1"/>
      </div>
      <button className="btn btn-prim" onClick={handleLogin}>Login</button>
        </div>
    )
}
