import React from "react";
import LoginForm from "./authComponents/Signup/LoginForm";
import Quote from "../../Components/Quote";

 const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <Quote quote="'Because remembering 15 different passwords is obviously what I live for. Welcome back!'"/>
      <LoginForm />
    </div>
  );
};
export default Login