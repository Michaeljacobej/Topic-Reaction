
import React from "react";
import { Modal, Form, Input, Button, message } from "antd";
import useAddTopic from "../hooks/useAddTopic";
import { useTranslation } from "react-i18next";

interface TopicModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (values: { title: string; description: string }) => void;
}

const TopicModal: React.FC<TopicModalProps> = ({ isVisible, onClose }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { t , i18n} = useTranslation();
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
      key={i18n.language}
      title={t("addNewTopic")}
      open={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          {t("cancel")}

        </Button>,
        <Button key="submit" type="primary" onClick={handleOk} loading={loading}>
          {t("submit")}
         
        </Button>,
      ]}
      centered
    >
      
      <Form form={form} layout="vertical">
        {contextHolder} 
        <Form.Item
            label={t("title")}
            name="title"
            rules={[{ required: true, message: t("titleRequired") }]}
          >
            <Input placeholder={t("enterTitle")} />
          </Form.Item>


          <Form.Item
            label={t("description")}
            name="description"
            rules={[{ required: true, message: t("descriptionRequired") }]}
          >
            <Input.TextArea rows={4} placeholder={t("enterDescription")} />
          </Form.Item>
      </Form>
    </Modal>
  );
};

export default TopicModal;

