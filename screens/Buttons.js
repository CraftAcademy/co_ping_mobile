import React from "react";
import { onLogout } from "../modules/authentication";
import { useDispatch } from "react-redux";
import { TouchableHighlight, StyleSheet, Text } from "react-native";
import { SHOW_LOGIN_FORM } from "../state/actions/actionTypes";

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onLogout(dispatch)}
    >
      <Text id="logout-button" style={styles.buttonText}>
        Logout
      </Text>
    </TouchableHighlight>
  );
};

const LoginButton = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ type: SHOW_LOGIN_FORM });
  };
  return (
    <TouchableHighlight style={styles.authButton} onPress={login}>
      <Text id="login-button" style={styles.buttonText}>
        Login
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "#71B280",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#134e5e",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4.65,
  },
  buttonText: {
    color: "white",
    fontFamily: "Futura-Medium",
    fontSize: 20,
    fontWeight: "600",
  },
  authButton: {
    height: 60,
    width: "40%",
    borderRadius: 10,
    backgroundColor: "#71B280",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#134e5e",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});

export { LogoutButton, LoginButton };
