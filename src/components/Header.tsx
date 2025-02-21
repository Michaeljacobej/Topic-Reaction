import React from "react";
import {  Typography } from "antd";


const { Title } = Typography;

const Header: React.FC = () => {
  return (

        <Title level={2} style={{ marginBottom: 8, color: "#333" }}>
          Header
        </Title>
       
  );
};

export default Header;
