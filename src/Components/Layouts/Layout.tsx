import Appbar from "./Appbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import {
  useRecoilStateLoadable,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { userAtom, userSelector } from "../../Recoil/User";

const Layout = () => {
  // TODO = > Implement functionality to know if user is logged in, if not loggedn in then navigate to login page.
  const navigate = useNavigate();
  const userLoadable = useRecoilValueLoadable(userSelector);
console.log(userLoadable)
  const currentRoute = window.location.pathname;

  const Loader = ({ loadMsg = "Loading..." }: { loadMsg: String }) => {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-5">
        <div className="rounded-md h-10 w-10 border-4 border-t-4 border-red-600 animate-spin"></div>
        <div className="text-xl text-red-900 tracking-wide font-semibold animate-bounce">
          {loadMsg}
        </div>
      </div>
    );
  };

  if (userLoadable.state == "hasError" && currentRoute != "/login") {
    navigate("/login");
  }
  
  return (
    <div>
      <div className=" w-[100%] z-10 h-14 fixed bg-customRed">
        <Appbar />
      </div>

      {userLoadable.state === "loading" ? (
        <Loader loadMsg={"Loadinnng..."} />
      ) : (
        <div className="overflow-auto min-h-[calc(100vh-82px)]">
          <Outlet />
        </div>
      )}

      <div className="h-6">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
