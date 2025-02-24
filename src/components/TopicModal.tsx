
import React from "react";
import { Modal, Form, Input, Button, message } from "antd";
import useAddTopic from "../hooks/useAddTopic";

interface TopicModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (values: { title: string; description: string }) => void;
}

const TopicModal: React.FC<TopicModalProps> = ({ isVisible, onClose }) => {
    const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const { addTopic, loading, error } = useAddTopic(messageApi);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await addTopic(values.title, values.description);
      message.success("Topic added successfully!");
      form.resetFields();
      onClose();
    } catch (err) {
      message.error(error || "Failed to add topic.");
      console.log(err);
    }
  };

  return (
    <Modal
      title="Add a New Topic"
      open={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk} loading={loading}>
          Submit
        </Button>,
      ]}
      centered
    >
      
      <Form form={form} layout="vertical">
        {contextHolder} 
        <Form.Item label="Title" name="title" rules={[{ required: true, message: "Title is required" }]}>
          <Input placeholder="Enter topic title" />
        </Form.Item>

        <Form.Item label="Description" name="description" rules={[{ required: true, message: "Description is required" }]}>
          <Input.TextArea rows={4} placeholder="Enter topic description" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TopicModal;

