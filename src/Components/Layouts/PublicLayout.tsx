import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { userSelector } from "../../Recoil/User";

const PublicLayout = () => {
  const navigate = useNavigate();
  const userLoadable = useRecoilValueLoadable(userSelector);
  
  const currentRoute = window.location.pathname;

  if (currentRoute === "/login" && userLoadable.state === "hasValue") {
    navigate("/blogs");
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PublicLayout;
