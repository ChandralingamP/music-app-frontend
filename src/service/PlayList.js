import axios from "axios";

export async function getUserPlayList(UserId) {
  const response = await axios.get("http://localhost:5000/playlist/"+UserId);
  return response.data;
}
