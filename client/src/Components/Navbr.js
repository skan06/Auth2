import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/Actions/Actions'


const Navbr = () => {
    const dispatch=useDispatch()
    const isAuth=useSelector((state)=>state.userReducer.isAuth)
  return (
    <>
        <header>
            <Link to="/">
                <h2>Authentication</h2>
            </Link>
            {isAuth ? (
                <Link to="/" onClick={() => dispatch(logout())}>
                    {" "}
                    <a href="#d" className="btn-area">
                        Logout
                    </a>
                </Link>
            ) : (
                <div className="btns">
                    <Link to="/signup">
                        {" "}
                        <a href="#d" className="btn-area">
                            SignUp
                        </a>
                    </Link>

                    <Link to="/signin">
                        <a href="#d" className="btn-area">
                            SignIn
                        </a>
                    </Link>
                </div>
            )}
        </header>
    </>
  )
}

export default Navbr