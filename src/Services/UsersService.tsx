import axios from "axios";
import toast from "react-hot-toast";
import * as URL from "../Constants/index";
import { LoginFormValues, SignUpFormValues } from "../Types/userTypes";

export const fetchUser = async (token: string | null) => {
  const res = await axios.get(URL.API.GET_USER, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const login = async (values: LoginFormValues) => {
  try {
    const response = await axios.post(
      URL.API.LOGIN,
      values
    );
    return response;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      toast.error(err.response.data.message || "An error occurred.");
    } else {
      toast.error("Network error");
    }
  }
};

export const signUp = async (values: SignUpFormValues) => {
  try {
    const res = await axios.post(
      URL.API.SIGN_UP,
      values
    );
   return res;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      toast.error(err.response.data.message || "An error occurred.");
    } else {
      toast.error("Network error or unknown error.");
    }
  }
};
