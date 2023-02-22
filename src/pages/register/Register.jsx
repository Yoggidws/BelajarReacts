import axios from "axios";
import { useState } from "react"
import "./register.css"



export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='register'>
      <span className="register-title">Register</span>
      <form action="" className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="register-input"
          placeholder='Enter your Username..'
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="register-input"
          placeholder='Enter your Email..'
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="register-input"
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}
          autoComplete="on"
        />
        <button className='register-button' type="submit"> Register! </button>
      </form>
      {error && <span>something went wrong</span>}
    </div>
  )
}
