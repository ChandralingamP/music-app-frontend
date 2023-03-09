import axios from "axios";

export async function addUser(userId,userName) {
  const response = await axios.post("http://localhost:5000/users/add", {
    userId: userId,
    userName : userName
  });
  return response.data.userName;
}
export async function getUser(userId) {
  const response = await axios.get("http://localhost:5000/users/:"+userId);
  return response.data.userName;
}
