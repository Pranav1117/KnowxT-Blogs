import axios from "axios";
import toast from "react-hot-toast";
import * as URL from "../Constants/index";

interface FormValues {
  email: string;
  password: string;
}

interface Username {
  username: string;
}

type SignUpFormValues = FormValues & Username;

export const fetchUser = async (token: string | null) => {
  const res = await axios.get(URL.API.GET_USER, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const login = async (values: FormValues) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8787/api/v1/user/signin",
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
      "http://127.0.0.1:8787/api/v1/user/signup",
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
