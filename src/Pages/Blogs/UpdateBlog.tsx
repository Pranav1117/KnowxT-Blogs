import axios from "axios";
import React, { MouseEvent, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "../../Components/Common";
import { InputForNewBlog } from "../../Types/blogsTypes";

const UpdateBlog = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState<InputForNewBlog>({
    title: state.title,
    content: state.content,
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

  const handleUpdate = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedBlog = { ...inputData, id: state.id };
      const res = await axios.patch(
        "http://127.0.0.1:8787/api/v1/blog/updateblog",
        updatedBlog
      );
      if (res.status === 200) {
        setLoading(false);
        toast.success("Blog updated Succesfully");
        navigate("/blogs");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update Blog");
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
            <div className="self-end">
              <button
                className="bg-blue-600 py-2 px-6 text-white rounded hover:bg-blue-800 min-w-28"
                onClick={(e) => handleUpdate(e)}
              >
                {" "}
                {loading ? <Spinner /> : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
