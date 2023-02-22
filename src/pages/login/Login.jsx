import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./login.css"



export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      // console.log(isFetching)
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className='login'>
      <span className="login-title">Login</span>
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="login-input"
          placeholder='Enter your username...'
          autoComplete="on"
          ref={userRef}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="login-input"
          placeholder='Enter your password'
          autoComplete="current-password"
          ref={passwordRef}
        />
        <button className='login-button' type="submit" disabled={isFetching}> Login </button>
      </form>
    </div>
  )
}
