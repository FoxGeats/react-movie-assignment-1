import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
//import "../css/Login.css";
import Spinner from '../components/spinner';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      <Spinner />
      return;
    }
    //if (user) navigate("/movies/home");
    if (user) navigate("/");
  }, [user, loading]);

  const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

  return (
    
    <>
    <Paper 
    component="ul" 
    sx={{...root}}
  >
    <li>
        <h2>Login</h2>
        

</li>
      </Paper>   
<Paper 
    component="ul" 
    sx={{...root}}
  >
    <li>
        <TextField
          required
          id="outlined-required"
          label="E-mail Address"
       
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         
        />
        </li>
     </Paper>

        <Paper 
    component="ul" 
    sx={{...root}}
  >
    <li>
<TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /></li>
        </Paper>

    <Paper 
    component="ul" 
    sx={{...root}}
  >
    <li>   
        <button
         
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        </li>
        </Paper>
        <Paper 
    component="ul" 
    sx={{...root}}
  >
        <li>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        </li>
        </Paper>
        <Paper 
    component="ul" 
    sx={{...root}}
  >
        <li>
          <Link to="/reset">Forgot Password</Link>
        </li>
        </Paper>
        <Paper 
    component="ul" 
    sx={{...root}}
  >
        <li>
          Don't have an account? <Link to="/register">Register</Link> now.
        </li>
        </Paper>
       
   </>
  );
}
export default LoginPage;