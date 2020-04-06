import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Components
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import { Icon } from "native-base";
import CartButton from "./CartButton"
const { Navigator, Screen } = createStackNavigator();
export default function RootNavigator() {
  return (
    <Navigator initialRouteName="Login"
    screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "rgb(20,90,100)",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Screen name="Login" component={Login} options={{ title: "Log in" }}></Screen>
      <Screen name="Signup" component={Signup} options={{ title: "Register" }}></Screen>
      <Screen name="CoffeeList" component={CoffeeList} options={{ title: "Coffee List",headerRight: () => <Icon name="cart" />}}></Screen>
      <Screen name="CoffeeDetail" component={CoffeeDetail} options={({ route }) => {
    const { coffeeshop } = route.params;
    return {
      title: coffeeshop.name, headerRight: () => <Icon name="cart" />};} }>
      </Screen>
    <Screen name="CoffeeCart" component={CoffeeCart} options={{ title: "Coffee Cart"}}></Screen>
    </Navigator>
  );
}




