import React from "react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
import coffeeshops from "./data";

// Component
import CoffeeItem from "./CoffeeItem";

const CoffeeList = ({navigation}) => {
  const coffeeshopList = coffeeshops.map((coffeeshop) => (
    <CoffeeItem navigation={navigation} coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));
  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};

export default CoffeeList;
