import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

const APIService = {};

APIService.loginUser = async (username, password) => {
  try {
    const res = await api.post(`/login`, { username, password });
    return res.data;
  } catch (error) {
    alert("Username and/or password are incorrect");
  }
};

APIService.signupUser = async (data) => {
  try {
    const res = await api.post(`/signup`, data);
    return res.data;
  } catch (error) {
    alert(error);
  }
};

APIService.addTasks = async (
  data,
  caregiverID = "653ec2ecdd96de4bc85014fd"
) => {
  try {
    const res = await api.post(`/addTask`, { tasks: data, caregiverID });
    return res.data;
  } catch (error) {
    alert(error);
  }
};

APIService.addNote = async (data) => {
  try {
    const res = await api.post(`/addNote`, data);
    console.log("Response:", res.data);
    return res.data;
  } catch (error) {
    console.log("ERROR:", error);
    alert(error);
  }
};

APIService.getNotes = async (data) => {
  try {
    const res = await api.get("/getNotes/:userID", data);
    console.log("response:", res.data);
  } catch (error) {
    console.log("ERROR:", error);
    alert(error);
  }
};

APIService.sendWeeklyReport = async () => {
  try {
    const res = await api.post("/sendWeeklyReport");
    return res.data;
  } catch (error) {
    console.error("Error sending the weekly report email", error);
    throw error;
  }
};

export default APIService;
