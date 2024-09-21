import axios from "axios";
import * as URL from "../Constants/index";

export const  fetchUser = async (token: (string | null)) => {
  const res = await axios.get(URL.API.GET_USER, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
