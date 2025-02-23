import React, { useState } from "react";
import { Typography, Button, Switch, Flex, Grid } from "antd";
import { PlusOutlined, LogoutOutlined } from "@ant-design/icons";
import TopicModal from "./TopicModal";
import useLogout from "../hooks/useLogout"; // Import useLogout

const { Title } = Typography;
const { useBreakpoint } = Grid;

const Header: React.FC = () => {
  const [language, setLanguage] = useState("en");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const screens = useBreakpoint();
  const { logout } = useLogout();

  const handleLanguageChange = (checked: boolean) => {
    setLanguage(checked ? "it" : "en");
  };

  const showModal = () => setIsModalVisible(true);
  const handleClose = () => setIsModalVisible(false);

  const handleSubmit = (values: { title: string; description: string }) => {
    console.log("Submitted:", values);
    setIsModalVisible(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#fff",
          width: "100%",
          height: "80px",
          borderRadius: "50px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
          padding: screens.xs ? "0 5px" : "0 10px",
        }}
      >
        <Title
          level={screens.xs ? 4 : 3}
          style={{
            margin: 0,
            color: "#666",
            fontWeight: "bold",
            letterSpacing: "1px",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            marginLeft: "10px",
          }}
        >
          📌 List of Topics
        </Title>

        <Flex align="center" gap={screens.xs ? 10 : 15}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{
              background: "linear-gradient(135deg, #4A90E2, #76B1E7)",
              borderRadius: "50px",
              fontWeight: "bold",
              border: "none",
              transition: "transform 0.3s",
              boxShadow: "0 4px 8px rgba(74, 144, 226, 0.4)",
            }}
            className="hover-scale"
            onClick={showModal}
          >
            {!screens.xs && "Add Topic"}
          </Button>

          <Switch
            checked={language === "it"}
            checkedChildren="IT"
            unCheckedChildren="EN"
            onChange={handleLanguageChange}
            style={{
              width: screens.xs ? "50px" : "70px",
              height: "30px",
              background: language === "it"
                ? "linear-gradient(135deg, #064635, #0B8457)"
                : "linear-gradient(135deg, #bbb, #888)",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
              transition: "background 0.3s ease-in-out",
            }}
          />

          <Button
            danger
            icon={<LogoutOutlined />}
            style={{
              background: "linear-gradient(135deg, #D72638, #FF4B5C)",
              color: "#fff",
              borderRadius: "20px",
              fontWeight: "bold",
              padding: "10px 24px",
              border: "none",
              transition: "transform 0.3s",
              boxShadow: "0 4px 8px rgba(215, 38, 56, 0.4)",
              marginRight: "20px",
            }}
            className="hover-scale"
            onClick={logout} 
          >
            {!screens.xs && "Logout"}
          </Button>
        </Flex>
      </div>

      <TopicModal isVisible={isModalVisible} onClose={handleClose} onSubmit={handleSubmit} />
    </>
  );
};

export default Header;
