import React from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import color from "../config/color";
import Constants from "expo-constants";

function Header() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.TitleText}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    height: 80,
    justifyContent: "center",
    backgroundColor: color.primary,
  },
  TitleText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: Constants.statusBarHeight,
    color: color.white,
  },
});
export default Header;
