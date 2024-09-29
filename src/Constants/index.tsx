export const BASE_URL = "https://backend.pranavbavaskar1.workers.dev/api/v1";

export const API = {
  GET_USER: `${BASE_URL}/user/getuser`,
  LOGIN: `${BASE_URL}/user/signin`,
  SIGN_UP: `${BASE_URL}/user/signup`,
  GET_ALL_BLOGS: `${BASE_URL}/blog/all`,
  GET_BLOG_BY_ID: `${BASE_URL}/blog/details/`,
  DELETE_BLOG: `${BASE_URL}/blog/deleteblog/`,
};

export const NOTIFICATIONS = {
  SIGNUP_SUCCESS: "Signup Successfull",
  LOGIN_SUCCESS: "Login Successful",
  BLOG_DELETE_FAIL: "Failed to delete blog",
  ERR_OCCURED: "An error occured",
  NETWORK_ERR: "Network Error",
};

export const MESSAGES = {
  EMAIL_INVALID_FORMAT: "Invalid email format",
  EMAIL_REQUIRED: "Email is required",
  PASSWORD_LENGTH: "Password should be at least 6 characters",
  PASSWORD_REQUIRED: "Password is required",
  USERNAME_REQUIRED: "Username is required",
};

export const ROUTES = {
  PROFILE: "/profile",
  BLOG_ALL: "/blogs",
  BLOG_DESCRIPTION: "/blog/:id",
  BLOG_CREATE_NEW: "/createnewblog",
  BLOG_UPDATE: "/updateblog",
  SIGNUP: "/signup",
  LOGIN: "/login",
};
