import { useState } from "react";
import axios from "axios";
import { useRefresh } from "../components/RefreshContext";

export const useVoteReaction = (topicId: number, likes: number, dislikes: number) => {
  const { triggerRefresh } = useRefresh();
  const [selected, setSelected] = useState<"LIKE" | "DISLIKE" | null>(null);

  const totalVotes = likes + dislikes;
  const likePercentage = totalVotes ? Math.round((likes / totalVotes) * 100) : 0;
  const dislikePercentage = totalVotes ? Math.round((dislikes / totalVotes) * 100) : 0;

  const handleVote = async (reactionType: "LIKE" | "DISLIKE") => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("User not authenticated");

      const response = await axios.post(
        "http://localhost:8080/api/reactions/vote",
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            topicId: topicId,
            reactionType: reactionType,
          },
        }
      );

      if (response.status === 200) {
        setSelected(reactionType);
        triggerRefresh();
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return {
    likePercentage,
    dislikePercentage,
    selected,
    handleLike: () => handleVote("LIKE"),
    handleDislike: () => handleVote("DISLIKE"),
  };
};
