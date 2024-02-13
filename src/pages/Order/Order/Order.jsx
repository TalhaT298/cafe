import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/ordercover.webp";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";

const Order = () => {
    const [tabIndex,setTabIndex]=useState(0);
    const [menu]=useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;
