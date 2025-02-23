import React, { useState } from "react";
import { Button, Row, Col, Typography, Space } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ButtonVotting: React.FC = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);


  const totalVotes = likes + dislikes;
  const likePercentage = totalVotes ? Math.round((likes / totalVotes) * 100) : 0;
  const dislikePercentage = totalVotes ? Math.round((dislikes / totalVotes) * 100) : 0;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Row gutter={[16, 16]} align="middle" justify="center">
 
        <Col>
          <Space>
            <Button
              type="primary"
              shape="round"
              icon={<LikeOutlined />}
              size="large"
              onClick={() => setLikes(likes + 1)}
              style={{
                background: "#4CAF50",
                borderColor: "#4CAF50",
                color: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Like
            </Button>
            <Text style={{ fontSize: "18px", fontWeight: "bold", color: "#4CAF50" }}>
              {likePercentage}%
            </Text>
          </Space>
        </Col>

        <Col>
          <Space>
            <Button
              type="primary"
              shape="round"
              icon={<DislikeOutlined />}
              size="large"
              onClick={() => setDislikes(dislikes + 1)}
              style={{
                background: "#F44336",
                borderColor: "#F44336",
                color: "#fff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Dislike
            </Button>
            <Text style={{ fontSize: "18px", fontWeight: "bold", color: "#F44336" }}>
              {dislikePercentage}%
            </Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ButtonVotting;
