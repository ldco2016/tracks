import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return <View />;
};

export default ResolveAuthScreen;
