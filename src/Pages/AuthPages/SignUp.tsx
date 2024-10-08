import Quote from "../../Components/Quote";
import SignUpForm from "./authComponents/Signup/SignUpForm";

const SignUp = () => {
  return (
    <div className="grid frid-cols-1 md:grid-cols-2">
      <SignUpForm />
      <Quote
        quote="Because creating yet another account is exactly how I wanted to spend my day. Let's do this!"
      />
    </div>
  );
};
export default SignUp