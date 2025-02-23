import React from "react";
import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <div style={loadingContainerStyle}>
      <Spin size="large" tip="Loading..." />
    </div>
  );
};

export default Loading;

const loadingContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  background: "rgba(255, 255, 255, 0.7)", 
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
};
