import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../redux/Actions/Actions";

const SignUp = () => {
  const [NewUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setNewUser({ ...NewUser, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label>Name</label>
      <input type="text" name="name" onChange={handlechange} />
      <label>email</label>
      <input type="text" name="email" onChange={handlechange} />
      <label>password</label>
      <input type="password" name="password" onChange={handlechange} />
      <Link to="/profile">
        <button onClick={() => dispatch(signup(NewUser))}>Signup</button>
      </Link>
    </div>
  );
};

export default SignUp;

