import React, { useState } from "react";
import { Button, Row, Col, Typography, Space } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ButtonVotting: React.FC = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [selected, setSelected] = useState<"like" | "dislike" | null>(null);

  const totalVotes = likes + dislikes;
  const likePercentage = totalVotes ? Math.round((likes / totalVotes) * 100) : 0;
  const dislikePercentage = totalVotes ? Math.round((dislikes / totalVotes) * 100) : 0;

  const handleLike = () => {
    setLikes(likes + 1);
    setSelected("like");
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    setSelected("dislike");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Row gutter={[16, 16]} align="middle" justify="center">
        
        {/* Like Button */}
        <Col>
          <Space>
            <Button
              type="primary"
              shape="round"
              icon={<LikeOutlined />}
              size="large"
              onClick={handleLike}
              style={{
                background: selected === "like" ? "#2E7D32" : "#4CAF50",
                borderColor: selected === "like" ? "#2E7D32" : "#4CAF50",
                color: "#fff",
                transition: "all 0.3s ease",
                boxShadow: selected === "like" ? "0px 0px 12px rgba(76, 175, 80, 0.8)" : "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Like
            </Button>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#4CAF50",
                padding: "6px 12px",
                background: "#E8F5E9",
                borderRadius: "12px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {likePercentage}%
            </Text>
          </Space>
        </Col>

        {/* Dislike Button */}
        <Col>
          <Space>
            <Button
              type="primary"
              shape="round"
              icon={<DislikeOutlined />}
              size="large"
              onClick={handleDislike}
              style={{
                background: selected === "dislike" ? "#C62828" : "#F44336",
                borderColor: selected === "dislike" ? "#C62828" : "#F44336",
                color: "#fff",
                transition: "all 0.3s ease",
                boxShadow: selected === "dislike" ? "0px 0px 12px rgba(244, 67, 54, 0.8)" : "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Dislike
            </Button>
            <Text
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#F44336",
                padding: "6px 12px",
                background: "#FFEBEE",
                borderRadius: "12px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              {dislikePercentage}%
            </Text>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ButtonVotting;
