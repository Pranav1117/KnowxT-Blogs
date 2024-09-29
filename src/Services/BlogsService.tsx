import axios from "axios";
import toast from "react-hot-toast";
import * as CONSTANT from "../Constants/index";

const token = localStorage.getItem("knowxt-token");

export const fetchAllBlogs = async () => {
  try {
    const response = await axios.get(CONSTANT.API.GET_ALL_BLOGS, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(
        error.response.data.message || CONSTANT.NOTIFICATIONS.ERR_OCCURED
      );
    } else {
      toast.error(CONSTANT.NOTIFICATIONS.NETWORK_ERR);
    }
  }
};

export const fetchBlogById = async (state: number | string) => {
  try {
    const res = await axios.get(`${CONSTANT.API.GET_BLOG_BY_ID}${state}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      toast.error(
        error.response.data.message || CONSTANT.NOTIFICATIONS.ERR_OCCURED
      );
    } else {
      toast.error(CONSTANT.NOTIFICATIONS.NETWORK_ERR);
    }
  }
};

export const deleteBlog = async (id: string | undefined) => {
  try {
    const res = await axios.delete(`${CONSTANT.API.DELETE_BLOG}${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return res;
  } catch (error) {
    toast.error(CONSTANT.NOTIFICATIONS.BLOG_DELETE_FAIL);
  }
};