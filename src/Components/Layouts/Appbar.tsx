import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom } from "../../Recoil/User";
import toast from "react-hot-toast";
import axios from "axios";

const Appbar = () => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false)
  const [user,setUser] = useRecoilState(userAtom)

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
      console.log(data.user)
      setUser(data.user)
    };
    fetchUser();
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-10 py-3">
      {/* Logo */}
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/blogs")}
      >
        KnowXT
      </div>

      {/* User icon to toggle dropdown */}
      <div
        className="bg-gray-700 cursor-pointer text-white text-xl rounded-full h-10 w-10 flex justify-center items-center"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {user?.username?.[0]}
      </div>

      {/* Dropdown */}
      {showDropDown && (
        <div className="absolute top-16 right-10 bg-white shadow-md rounded-lg w-56">
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
      )}
    </div>
  );
};

export default Appbar;
