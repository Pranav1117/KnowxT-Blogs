import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { userSelector } from "../../Recoil/User";
import { PageLoader } from "../Common";

const PublicLayout = () => {
  const navigate = useNavigate();
  const userLoadable = useRecoilValueLoadable(userSelector);
  const currentRoute = window.location.pathname;

  if (
    (currentRoute === "/login") &&
    userLoadable.state === "hasValue"
  ) {
    navigate("/blogs");
  }

  return (
    <main>
      {userLoadable.state === "loading" ? (
        <PageLoader loadMsg={"Loadinnng..."} />
      ) : (
        <div className="overflow-auto min-h-[calc(100vh-82px)]">
          <Outlet />
        </div>
      )}
    </main>
  );
};

export default PublicLayout;
