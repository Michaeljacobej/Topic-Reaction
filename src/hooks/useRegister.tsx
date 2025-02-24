import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useRegister = (messageApi: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const register = async (values: { fullname: string; email: string; password: string }) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", values);

      const { error_schema, output_schema } = response.data;

      if (error_schema?.error_code === "BOTR940-00-000" && output_schema) {
        messageApi.success("Registration successful! Redirecting...");
        setTimeout(() => navigate("/login"), 1500);
   
      } else {
        const errorMessage = error_schema?.error_message?.english || "Login failed!";
        messageApi.error(errorMessage);
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Failed to register.";
      setError(errorMessage);
      messageApi.error(errorMessage);
    
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

export default useRegister;
