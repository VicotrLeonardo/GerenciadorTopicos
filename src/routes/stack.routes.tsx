import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { TabsRoutes } from "./tabsRoutes";
import { Home } from "../pages/Home";
import { NovoTopico } from "../pages/NovoTopico";
import { TopicoPage } from "../pages/TopicoPage";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="NovoTopico" component={NovoTopico} />
      <Screen name="TopicoPage" component={TopicoPage} />
    </Navigator>
  );
}
