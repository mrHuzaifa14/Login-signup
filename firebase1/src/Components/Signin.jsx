import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import "./app.css"


const auth = getAuth(app);




const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            alert("Success! User Signed In.");
            console.log("User:", userCredential.user);
          })
          .catch((error) => {
            alert(`Error: ${error.message}`);
            console.error("Error:", error);
          });
      };
  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <label>Enter your Email</label>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter you Email" />
      <label>Enter your Password</label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="email" placeholder="Enter your Password" />

      <button onClick={signIn}>Submit</button>
    </div>
  )
}

export default Signin