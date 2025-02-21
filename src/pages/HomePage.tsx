import React from "react";
// import {  Typography } from "antd";
import Header from "../components/Header";
import ListTopic from "../components/ListTopic";
import FormTopic from "../components/FormTopic";


// const { Title } = Typography;

const HomePage: React.FC = () => {
  return (
      <>
        <Header />
        <ListTopic/>
        <FormTopic/>
      </>
       
  );
};

export default HomePage;
