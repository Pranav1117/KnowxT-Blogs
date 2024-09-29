import { useRecoilValueLoadable,  } from "recoil";
import { Outlet, useNavigate } from "react-router-dom";
import { Appbar, Footer } from "./";
import { PageLoader } from "../Common";
import { userSelector } from "../../Recoil/User";

const Layout = () => {
  const navigate = useNavigate();
  const userLoadable = useRecoilValueLoadable(userSelector);

  const currentRoute = window.location.pathname;

  if (userLoadable.state == "hasError" && currentRoute != "/login") {
    navigate("/login");
  }
  if (userLoadable.state == "hasValue" && currentRoute === "/") {
    navigate("/blogs");
  }

  return (
    <div>
      <div className=" w-[100%] z-10 h-14 fixed bg-customRed">
        <Appbar />
      </div>

      {userLoadable.state === "loading" ? (
        <PageLoader loadMsg={"Loadinnng..."} />
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
