import { useState } from "react";
import axios from "axios";

interface RegisterData {
  fullname: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", data);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Registration failed");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};

export default useRegister;
