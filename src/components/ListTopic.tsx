import React from "react";
import { Row, Col, Card, Typography } from "antd";
import ButtonVotting from "./ButtonVoting";

const { Title } = Typography;

interface ListTopicProps {
  imageUrl: string;
  title: string;
  createdBy: string;
  description: string;
}

const ListTopic: React.FC<ListTopicProps> = ({ imageUrl, title, createdBy, description }) => {
  return (
    <div style={{ padding: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          borderRadius: "16px",
          width: "100%",
          maxWidth: "1200px",
          padding: "20px",
          textAlign: "center",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <Row gutter={[16, 16]} align="middle">
    
          <Col xs={24} sm={8} md={6} lg={6} xl={6} style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "180px",
                height: "180px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src={imageUrl}
                alt="Topic"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </Col>

          <Col xs={24} sm={16} md={18} lg={18} xl={18}>
            <div style={{ padding: "16px", textAlign: "center" }}>
              <Title level={3} style={{ marginBottom: 8 }}>{title}</Title>
              <p style={{ fontWeight: 500, color: "#555", margin: "5px 0" }}>
                <strong>Created by:</strong> {createdBy}
              </p>
              <p style={{ color: "#777", lineHeight: "1.6", margin: "5px 0" }}>{description}</p>
            </div>

            <div style={{ textAlign: "center", marginTop: "12px" }}>
              <ButtonVotting />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ListTopic;
