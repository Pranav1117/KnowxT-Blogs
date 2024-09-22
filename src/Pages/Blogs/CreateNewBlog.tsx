import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../Recoil/User";
import { Spinner} from "../../Components/Common"

interface inputData {
  title: string;
  content: string;
}

const CreateNewBlog = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState<inputData>({
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

  const handlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8787/api/v1/blog", {
        ...inputData,
        userId: user?.id,
      });
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
      <div className=" w-[50%] p-2 mx-auto">
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
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Upload file
              </label>
              <input
                className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
              />
              <p className="mt-1 text-sm text-gray-500 " id="file_input_help">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div className="self-end">
              <button
                className="bg-blue-600 py-2 px-6 text-white rounded hover:bg-blue-800 min-w-28"
                onClick={(e) => handlePost(e)}
              >
                {" "}
                {loading? <Spinner/> : "POST"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewBlog;
