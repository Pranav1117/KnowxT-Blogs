import { useState, MouseEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../Recoil/User";
import { Spinner } from "../../Components/Common";
import { InputForNewBlog } from "../../Types/blogsTypes";
import { BASE_URL } from "../../Constants";

const CreateNewBlog = () => {
  const token = localStorage.getItem("knowxt-token");

  const navigate = useNavigate();

  const user = useRecoilValue(userAtom);
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState<InputForNewBlog>({
    title: "",
    content: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePost = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/blog`,
        {
          ...inputData,
          userId: user?.id,
        },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        setLoading(false);
        toast.success("Blog uploaded sucessfully");
        navigate("/blogs");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to upload blog");
    }
  };

  return (
    <div className="pt-16 mt-10">
      <div className="w-[90%] md:w-[50%] p-2 mx-auto">
        <form className="flex flex-col gap-3">
          <input
            name="title"
            className="border-b-2 w-[100%] px-2 pt-5 pb-2 text-3xl focus:outline-none"
            type="text"
            placeholder="Title..."
            onChange={(e) => handleOnChange(e)}
            value={inputData.title}
          />
          <textarea
            name="content"
            onChange={(e) => handleOnChange(e)}
            className="focus:outline-none border-b-2 resize-none text-xl"
            rows={9}
            placeholder="Tell your story "
            value={inputData.content}
          />
          <div className="flex flex-col">
            <div className="self-end">
              <button
                className="bg-blue-600 py-2 px-6 text-white rounded hover:bg-blue-800 md:min-w-28"
                onClick={handlePost}
              >
                {" "}
                {loading ? <Spinner /> : "POST"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewBlog;
