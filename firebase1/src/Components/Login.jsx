import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import "./app.css"

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");   // Corrected variable name
  const [password, setPassword] = useState("");

  

  const createUser = (e) => {
    e.preventDefault();  // Prevents form from refreshing the page

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Success! User created.");
        console.log("User:", userCredential.user);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
        console.error("Error:", error);
      });
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={createUser}>  {/* Form submission fixed */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}    // Fixed value binding
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}   // Fixed value binding
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>  {/* Click handler fixed */}
      </form>
    </div>
  );
};

export default Login;
