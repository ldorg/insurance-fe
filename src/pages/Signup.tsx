import React from "react";
import FullpageFormLayout from "../components/layouts/fullpageFormLayout";
import SignupForm from "../components/forms/SignupForm";

const Login = () => {
  return (
    <FullpageFormLayout artUrl="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80">
      <SignupForm />
    </FullpageFormLayout>
  );
};

export default Login;
