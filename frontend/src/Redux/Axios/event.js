import axios from "axios";

export const event = axios.create({
    baseURL: "https://evallo-backend-2n3s.onrender.com/api/events"
  });

