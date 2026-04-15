import axios from "axios";

export const getEducation = async () => {
  const res = await axios.get("/api/education");
  return res.data.education;
};

export const getExperiece = async () => {
  const res = await axios.get("/api/experience");
  return res.data.experience;
};

export const getProject = async () => {
  const res = await axios.get("/api/project");
  return res.data.project;
};
