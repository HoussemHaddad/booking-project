
import { useDispatch } from "react-redux";
import "./login.css";
import { useState } from "react";
import {login,register} from '../../redux/action/action'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch=useDispatch()
  const Navigate=useNavigate()
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

const handlelogin=()=>{
  dispatch(login({email,password},Navigate))

}
const handleregistre=()=>{
  dispatch(register({email,password,username},Navigate))

}



 return(
  <div>
    <>
  <div className="label-container">
    <label htmlFor="toggle-log" className="toggle">
      Login
    </label>
    <label htmlFor="toggle-sign" className="toggle">
      Sign up
    </label>
  </div>
  <div className="container"> 
    <input
      type="radio"
      name="toggles"
      id="toggle-log"
      className="toggle"
      defaultChecked="checked"
    />
    <input type="radio" name="toggles" id="toggle-sign" className="toggle" />
    <div className="panel" id="login">
      <label htmlFor="log-email" onChange={(e)=> setEmail(e.target.value)}>Email</label>
      <input id="log-email" />
      <label htmlFor="log-pass"onChange={(e)=> setPassword(e.target.value)}>Password</label>
      <input type="password" id="log-pass" />
      <button type="submit"onClick={handlelogin}>Login</button>
    </div>
    <div className="panel" id="signup">
      <label htmlFor="sign-email"onChange={(e)=> setEmail(e.target.value)}>Email</label>
      <input id="sign-email" />
      <label htmlFor="sign-pass"onChange={(e)=> setPassword(e.target.value)}>Password</label>
      <input type="password" id="sign-pass" />
      <label htmlFor="sign-confirm" onChange={(e)=> setUsername(e.target.value)}>name</label>
      <input type="text" id="sign-confirm" />
      <button type="text"onClick={handleregistre}>Sign up</button>
    </div>
  </div>
  <a
    href="https://dribbble.com/shots/2287561-Login-Sign-Up-Interface"
    target="_blank"
  >
    Inspiration
  </a>
</>

  </div>
 ) 
   
};

export default Login;