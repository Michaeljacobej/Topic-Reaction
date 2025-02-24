import React from "react";
import { Button, Row, Col, Typography, Space, message } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { useVoteReaction } from "../hooks/useVoteReaction";

const { Text } = Typography;

interface ButtonVotingProps {
  postId: number;
  likes: number;
  dislikes: number;
}

const ButtonVoting: React.FC<ButtonVotingProps> = ({ postId, likes, dislikes }) => {
   const [messageApi, contextHolder] = message.useMessage();
    
  const { likePercentage, dislikePercentage, selected, handleLike, handleDislike } =
    useVoteReaction(postId, likes, dislikes,messageApi);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
       {contextHolder}
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
                background: selected === "LIKE" ? "#2E7D32" : "#4CAF50",
                borderColor: selected === "LIKE" ? "#2E7D32" : "#4CAF50",
                color: "#fff",
                transition: "all 0.3s ease",
                boxShadow: selected === "LIKE" ? "0px 0px 12px rgba(76, 175, 80, 0.8)" : "0px 4px 10px rgba(0, 0, 0, 0.2)",
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
                background: selected === "DISLIKE" ? "#C62828" : "#F44336",
                borderColor: selected === "DISLIKE" ? "#C62828" : "#F44336",
                color: "#fff",
                transition: "all 0.3s ease",
                boxShadow: selected === "DISLIKE" ? "0px 0px 12px rgba(244, 67, 54, 0.8)" : "0px 4px 10px rgba(0, 0, 0, 0.2)",
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

export default ButtonVoting;
