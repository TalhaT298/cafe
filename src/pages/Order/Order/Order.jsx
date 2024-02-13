import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/ordercover.webp";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
  return (
    <div>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
    </div>
  );
};

export default Order;
