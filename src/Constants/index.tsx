export const API = {
    GET_USER : `http://127.0.0.1:8787/api/v1/user/getuser`,
}

export const NOTIFICATIONS = {
    SIGNUP_SUCCESS: "Signup Successfull",
    LOGIN_SUCCESS: "Login Successful",
    BLOG_DELETE_FAIL: "Failed to delete blog"
}

export const MESSAGES = {
    EMAIL_INVALID_FORMAT: "Invalid email format",
    EMAIL_REQUIRED: "Email is required",
    PASSWORD_LENGTH: "Password should be at least 6 characters",
    PASSWORD_REQUIRED: "Password is required"

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