import React from "react";
import Cover from "../../Shared/Cover/Cover";
import orderCover from "../../../assets/ordercover.webp";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
  return (
    <div>
      <Cover img={orderCover} title="Order Food"></Cover>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
    </div>
  );
};

export default Order;
