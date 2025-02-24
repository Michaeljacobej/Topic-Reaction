import { useState } from "react";
import axios from "axios";
import { useRefresh } from "../components/RefreshContext";

const useAddTopic = (messageApi: any) => {
  const [loading, setLoading] = useState(false);
  const { triggerRefresh } = useRefresh();
  const [error, setError] = useState<string | null>(null);

  const addTopic = async (title: string, description: string) => {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("User not authenticated. Please log in again.");

      const response = await axios.post(
        "http://localhost:8080/api/topics/add",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );

      triggerRefresh();

      // Show success message
      messageApi.success("Topic added successfully!");

      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data || "Failed to add topic.";
      setError(errorMessage);

      // Show error message
      messageApi.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { addTopic, loading, error };
};

export default useAddTopic;
