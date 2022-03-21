import React from "react";
import { StatusBar } from "react-native";
import { Home } from "./src/pages/Home";
import { NovoTopico } from "./src/pages/NovoTopico";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </>
  );
}
