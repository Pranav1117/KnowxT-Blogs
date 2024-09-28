import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../../Recoil/User";
import toast from "react-hot-toast";
import axios from "axios";

const Appbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userAtom);

  const handleLogout = () => {
    localStorage.removeItem("knowxt-token");
    toast.success("Log out succesfully");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("knowxt-token");
    const fetchUser = async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:8787/api/v1/user/getuser",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(data.user);
    };
    fetchUser();
  }, []);

  return (
    <div className="w-full z-10 flex justify-between items-center px-10 py-3">
      <div
        className="text-2xl text-white font-bold cursor-pointer"
        onClick={() => navigate("/blogs")}
      >
        KnowXT
      </div>

      {/* User icon to toggle dropdown */}
      <div className="flex gap-8 items-center">
        {window.location.pathname === "/createnewblog" ? (
          ""
        ) : (
          <button
            className="text-white  px-2 py-1 rounded-lg cursor-pointer"
            onClick={() => navigate("/createnewblog")}
          >
            Write your story
          </button>
        )}
        <div className="text-white cursor-pointer" onClick={() => navigate("/profile")}>Profile</div>
        <div className="text-white cursor-pointer" onClick={handleLogout}>Logout</div>
      </div>

      {/* Dropdown */}
      {/* {showDropDown && (
        <div className="absolute top-16 right-10  shadow-md rounded-lg w-56">
          <div className="py-2">
            <div
              className="flex items-center gap-x-3.5 py-2 px-4 hover:bg-gray-100 text-gray-800 cursor-pointer"
              to="/profile"
            >
              <svg
                className="shrink-0 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 17l-5-5 5-5" />
                <path d="M4 12h11" />
              </svg>
              Profile
            </div>
            <div
              onClick={handleLogout}
              className="flex items-center gap-x-3.5 py-2 px-4 hover:bg-gray-100 text-gray-800 cursor-pointer"
            >
              <svg
                className="shrink-0 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 16l4 4m0-4l-4 4" />
                <path d="M3 6v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z" />
              </svg>
              Sign Out
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Appbar;
