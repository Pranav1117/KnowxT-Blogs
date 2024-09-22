import axios from "axios";
import toast from "react-hot-toast";
import * as CONSTANT from "../Constants/index";

export const fetchAllBlogs = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8787/api/v1/blog/all");
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data.message || "An error occurred.");
    } else {
      toast.error("Network error");
    }
  }
};

export const fetchBlogById = async (state: number | string) => {
  try {
    const res = await axios.get(
      `http://127.0.0.1:8787/api/v1/blog/details/${state}`
    );
    return res;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(error.response.data.message || "An error occurred.");
    } else {
      toast.error("Network error");
    }
  }
};

export const deleteBlog = async (id: string | undefined) => {
  try {
    const res = await axios.delete(
      `http://127.0.0.1:8787/api/v1/blog/deleteblog/${id}`
    );
    return res;
  } catch (error) {
    toast.error(CONSTANT.NOTIFICATIONS.BLOG_DELETE_FAIL);
  }
};
