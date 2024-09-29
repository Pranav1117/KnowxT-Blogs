import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import Spinner from "../../../../Components/Common/Spinner";
import { signUp } from "../../../../Services/UsersService";
import * as CONSTANT from "../../../../Constants/index";
import { SignUpFormValues } from "../../../../Types/userTypes";



const initialValues: SignUpFormValues = {
  username: "",
  email: "",
  password: "",
};

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required(CONSTANT.MESSAGES.USERNAME_REQUIRED),
    email: Yup.string()
      .email(CONSTANT.MESSAGES.EMAIL_INVALID_FORMAT)
      .required(CONSTANT.MESSAGES.EMAIL_REQUIRED),
    password: Yup.string()
      .min(6, CONSTANT.MESSAGES.PASSWORD_LENGTH)
      .required(CONSTANT.MESSAGES.PASSWORD_REQUIRED),
  });

  const handleSubmit = async (values: SignUpFormValues) => {
    const response = await signUp(values);
    if (response?.status === 200) {
      localStorage.setItem("knowxt-token", response.data.token);
      toast.success(CONSTANT.NOTIFICATIONS.SIGNUP_SUCCESS);
      navigate(CONSTANT.ROUTES.BLOG_ALL);
    }
  };

  const inputFieldsCss = "border-2 rounded p-2";
  const labelCss = "font-semibold text-lg mb-2";
  const errorCss = "text-red-600";

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-6 p-10 rounded w-[90%] md:w-[60%]">
        <div className="text-center text-3xl font-extrabold">
          Create An Acount
        </div>

        <div className="flex flex-col gap-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="flex flex-col">
                  <label htmlFor="username" className={labelCss}>
                    Username
                  </label>
                  <Field
                    className={inputFieldsCss}
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className={`error-message ${errorCss}`}
                  >
                    {(msg) => (
                      <div className={`error-message ${errorCss}`}>{msg}</div>
                    )}
                  </ErrorMessage>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className={labelCss}>
                    Email
                  </label>
                  <Field
                    className={inputFieldsCss}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  >
                    {(msg) => (
                      <div className={`error-message ${errorCss}`}>{msg}</div>
                    )}
                  </ErrorMessage>
                </div>{" "}
                <div className="flex flex-col">
                  <label htmlFor="password" className={labelCss}>
                    Password
                  </label>
                  <Field
                    className={inputFieldsCss}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  >
                    {(msg) => (
                      <div className={`error-message ${errorCss}`}>{msg}</div>
                    )}
                  </ErrorMessage>
                  <div>
                    <p className="text-center text-gray-500 my-3">
                      Already Have an acount ?{" "}
                      <Link to="/login" className="underline">
                        Login
                      </Link>
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white p-2 rounded w-[100%] hover:bg-gray-900"
                    >
                      {isSubmitting ? <Spinner /> : "Submit"}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
