import React from "react";
import type { FormProps } from "antd";
import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

type FieldType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const containerStyle: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  background: "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg') center/cover no-repeat",
  position: "relative",
  overflow: "hidden",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)", 
};

const cardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 450, 
  padding: 32,
  borderRadius: 16,
  background: "#ffffff",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  position: "relative",
  zIndex: 2, 
};

const Login: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div> 
      <Card style={cardStyle}>
        <Title level={2} style={{ marginBottom: 8, color: "#333" }}>
          Welcome Back!
        </Title>
        <Text type="secondary" style={{ display: "block", marginBottom: 20 }}>
          Please enter your login details to continue.
        </Text>

        <Form
          name="login"
          style={{ textAlign: "left" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Log In
            </Button>
          </Form.Item>
        </Form>

        <Text type="secondary">
          Don't have an account? <a href="/register">Sign Up</a>
        </Text>
      </Card>
    </div>
  );
};

export default Login;
