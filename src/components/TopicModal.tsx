import React from "react";
import { Modal, Form, Input, Typography, Button } from "antd";

interface TopicModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (values: { title: string; description: string }) => void;
}

const TopicModal: React.FC<TopicModalProps> = ({ isVisible, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values);
        form.resetFields();
        onClose();
      })
      .catch((error) => console.log("Validation Failed:", error));
  };

  return (
    <Modal
      title={
        <Typography.Title
          level={3}
          style={{
            textAlign: "center",
            marginBottom: 0,
            background: "linear-gradient(135deg, #4A90E2, #76B1E7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Add a New Topic
        </Typography.Title>
      }
      open={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} style={{ borderRadius: "8px" }}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={handleOk}
          style={{
            background: "linear-gradient(135deg, #4A90E2, #76B1E7)",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Submit
        </Button>,
      ]}
      centered
    >
      <Form
        form={form}
        layout="vertical"
        style={{ marginTop: "10px", padding: "10px" }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input
            placeholder="Enter topic title"
            style={{
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Enter topic description"
            style={{
              borderRadius: "8px",
              padding: "10px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TopicModal;
