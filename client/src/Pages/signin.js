import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../redux/Actions/Actions";

const SignIn = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label>email</label>
      <input type="text" name="email" onChange={handlechange} />
      <label>password</label>
      <input type="password" name="password" onChange={handlechange} />
      <Link to="/profile">
        <button onClick={() => dispatch(signin(user))}>Signin</button>
      </Link>
    </div>
  );
};

export default SignIn;