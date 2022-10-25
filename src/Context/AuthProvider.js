import React, { createContext, useState } from "react";
import app from "../firebase/firebase.init";
import { getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [lodding, setLoadding] = useState(true);

  const providerLogin = (provider) => {
    setLoadding(true);
    return signInWithPopup(auth, provider);
  };

  const authInfo = { user, lodding, providerLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
