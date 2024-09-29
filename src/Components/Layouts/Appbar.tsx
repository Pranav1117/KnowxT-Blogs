import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../../Recoil/User";
import { API, ROUTES } from "../../Constants";

const Appbar = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userAtom);

  const handleLogout = () => {
    localStorage.removeItem("knowxt-token");
    toast.success("Log out succesfully");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("knowxt-token");
    const fetchUser = async () => {
      const { data } = await axios.get(API.GET_USER, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <div className="w-full z-10 flex justify-between items-center px-4 py-2 md:px-10 md:py-3">
      <div
        className="text-2xl text-white font-bold cursor-pointer"
        onClick={() => navigate(ROUTES.BLOG_ALL)}
      >
        KnowXT
      </div>

      <div className="flex gap-2 md:gap-8 items-center">
        {window.location.pathname === ROUTES.BLOG_CREATE_NEW ? (
          ""
        ) : (
          <button
            className="text-white  px-2 py-1 rounded-lg cursor-pointer"
            onClick={() => navigate(ROUTES.BLOG_CREATE_NEW)}
          >
            Write your story
          </button>
        )}
        <div className="text-white cursor-pointer" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Appbar;
