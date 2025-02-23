import React from "react";
import Header from "../components/Header";
import ListTopic from "../components/ListTopic";

const HomePage: React.FC = () => {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    
      <Header />
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <ListTopic
            key={index}
            imageUrl="https://picsum.photos/300/200"
            title={`Amazing Landscape ${index + 1}`}
            createdBy="John Doe"
            description="A breathtaking view of the mountains and sea, showcasing nature's beauty."
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
