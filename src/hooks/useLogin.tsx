import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRefresh } from "../components/RefreshContext";


const useLogin = (messageApi: any) => {
  const { triggerRefresh } = useRefresh();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      const { error_schema, output_schema } = response.data;

      if (error_schema?.error_code === "BOTR940-00-000" && output_schema) {
        localStorage.setItem("token", output_schema);
        triggerRefresh();
        messageApi.success("Login successful! Redirecting...");

        setTimeout(() => navigate("/home"), 1500);
      } else {
        const errorMessage = error_schema?.error_message?.english || "Login failed!";
        messageApi.error(errorMessage);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.error_schema?.error_message?.english || "Login failed!";
      setError(errorMessage);
      messageApi.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
