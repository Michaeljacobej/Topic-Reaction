import { useState, useEffect, useCallback } from "react";
import axios from "axios";

interface Topic {
   topic_id: number;
    tittle: string;
    created_by: string;
  description: string;
  likesCount: number;
  dislikeCount: number;
}

const useGetListTopics = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTopics = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/api/topics/all");
      setTopics(response.data.output_schema || []); // Ensure data structure is correct
    } catch (err: any) {
      setError(err.message || "Failed to fetch topics.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTopics();
  }, [fetchTopics]);

  return { topics, loading, error, refreshTopics: fetchTopics };
};

export default useGetListTopics;
