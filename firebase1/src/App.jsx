import { getAuth } from "firebase/auth";
import { useState } from "react";
import app from "./firebase"; // Default import
import Login from "./Components/Login";
import Signin from "./Components/Signin";

const auth = getAuth(app);

function App() {
  const [isLogin, setIsLogin] = useState(true); // true for Login, false for Sign Up

  return (
    <div className="app-container">
      {isLogin ? (
        <div>
          <Signin />
          <p className="toggle-link" onClick={() => setIsLogin(false)}>
            Don't have an account? Sign Up
          </p>
        </div>
      ) : (
        <div>
          <Login />
          <p className="toggle-link" onClick={() => setIsLogin(true)}>
            Already have an account? Sign In
          </p>
        </div>
      )}
    </div>
  );
}

export default App;