import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// @ts-ignore
const authContext = createContext();

export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = (): IAuth => {
  return useContext(authContext) as IAuth;
};

interface IAuth {
  user: {
    username: string;
    betaUser: boolean;
    accountType: string;
  } | null;
  signIn: Function;
  signOut: Function;
  register: Function;
}

const useProvideAuth = (): IAuth => {
  const [user, setUser] = useState(null);

  const signIn = (username: string, password: string) => {
    axios
      .post("http://localhost:8000/login", {
        username,
        password,
      })
      .then((r) => {
        setUser(r.data);
      });
  };

  const register = (username: string, password: string, betaUser: boolean) => {
    axios
      .post("http://localhost:8000/register", {
        username,
        password,
        betaUser,
      })
      .then((r) => {
        if (r.data.username) {
          setUser(r.data);
        }
      });
  };

  const signOut = () => {
    setUser(null);
  };

  return {
    user,
    signIn,
    signOut,
    register,
  };
};
