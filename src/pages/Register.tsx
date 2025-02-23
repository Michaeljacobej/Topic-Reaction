import React from "react";
import { Button, Card, Checkbox, Form, Input, Typography, message } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

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
  maxWidth: 400,
  padding: 24,
  borderRadius: 16,
  background: "#ffffff",
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  position: "relative",
  zIndex: 2,
};

const Register: React.FC = () => {
  const { register, loading, error } = useRegister();
  const navigate = useNavigate();

  const onFinish = async (values: { fullname: string; email: string; password: string }) => {
    const result = await register(values);
    if (result) {
      message.success("Registration successful! Redirecting...");
      navigate("/login");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <Card style={cardStyle}>
        <Title level={2} style={{ marginBottom: 8, color: "#333" }}>
          Create an Account
        </Title>
        <Text type="secondary" style={{ display: "block", marginBottom: 10 }}>
          Sign up to join our community
        </Text>

        <Form name="register" style={{ textAlign: "left" }} onFinish={onFinish} autoComplete="off">
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your Fullname!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Fullname" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email", message: "Please enter a valid email address!" }, 
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {error && <Text type="danger">{error}</Text>}

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large" loading={loading}>
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <Text type="secondary">
          Already have an account? <a href="/login">Log in</a>
        </Text>
      </Card>
    </div>
  );
};

export default Register;
