export const API = {
    GET_USER : `http://127.0.0.1:8787/api/v1/user/getuser`,
    LOGIN: "http://127.0.0.1:8787/api/v1/user/signin",
    SIGN_UP: "http://127.0.0.1:8787/api/v1/user/signup",
    GET_ALL_BLOGS: "http://127.0.0.1:8787/api/v1/blog/all",
    GET_BLOG_BY_ID: `http://127.0.0.1:8787/api/v1/blog/details/`,
    DELETE_BLOG: `http://127.0.0.1:8787/api/v1/blog/deleteblog/`    

}

export const NOTIFICATIONS = {
    SIGNUP_SUCCESS: "Signup Successfull",
    LOGIN_SUCCESS: "Login Successful",
    BLOG_DELETE_FAIL: "Failed to delete blog",
    ERR_OCCURED: "An error occured",
    NETWORK_ERR: "Network Error"
}

export const MESSAGES = {
    EMAIL_INVALID_FORMAT: "Invalid email format",
    EMAIL_REQUIRED: "Email is required",
    PASSWORD_LENGTH: "Password should be at least 6 characters",
    PASSWORD_REQUIRED: "Password is required",
    USERNAME_REQUIRED: "Username is required"
}

export const ROUTES = {
    PROFILE:"/profile",
    BLOG_ALL: "/blogs",
    BLOG_DESCRIPTION:"/blog/:id",
    BLOG_CREATE_NEW:"/createnewblog",
    BLOG_UPDATE:"/updateblog",
    SIGNUP:"/signup",
    LOGIN:"/login"
}