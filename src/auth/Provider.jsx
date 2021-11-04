import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import authStorage from "./storage";
import AuthContext from "./context";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    setUser(user);
  };

  if (!ready) {
    return <AppLoading startAsync={restoreUser} onFinish={() => setReady(true)} onError={console.warn} />;
  }

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
