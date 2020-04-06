import React from "react";

import { Button, Icon } from "native-base";



const CartButton = ({ navigation }) => {
  return (
    <Button transparent>
      <Icon
        name="cart"
        style={{ color: "white" }}
        onPress={()=>navigation.navigate("CoffeeCart")} 
      />
    </Button>
  );
};

export default CartButton;