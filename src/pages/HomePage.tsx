import React, { useEffect } from "react";
import Header from "../components/Header";
import ListTopic from "../components/ListTopic";
import useGetListTopics from "../hooks/useGetListTopics";
import { useRefresh } from "../components/RefreshContext"; 

const HomePage: React.FC = () => {
  const { topics, loading, error, refreshTopics } = useGetListTopics();
  const { refreshKey } = useRefresh();

  useEffect(() => {
    refreshTopics();
  }, [refreshKey]);

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
        {loading && <p>Loading topics...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {topics.length > 0 ? (
          topics.map((topic) => (
            <ListTopic
              key={topic.topic_id}
              topic_id={topic.topic_id}
              imageUrl="https://picsum.photos/300/200"
              title={topic.tittle}
              createdBy={topic.created_by}
              description={topic.description}
              likes={topic.likes_count}
              dislikes={topic.dislike_count}
            />
          ))
        ) : (
          !loading && <p>No topics available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
