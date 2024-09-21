import { useNavigate } from "react-router-dom";
import { getFormatedDate } from "../../../Utils/formatDate";
import { useEffect } from "react";

interface BlogCardProps {
  title: string;
  content: string;
  authorName: string;
  blogId: string;
}

const BlogCard = ({ title, content, authorName, blogId }: BlogCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="p-5  border-b-2 flex items-center justify-between w-[100%] ">
      <div
        className=""
        onClick={() => navigate(`/blog/${blogId}`, { state: blogId })}
      >
        <div className="flex justify-between items-center">
          <div className=" flex flex-col gap-2 cursor-pointer ease-linear duration-100 px-5 py-4 rounded ">
            <div className="flex gap-5">
              <div className="bg-gray-700 w-8 h-8 rounded-full text-white text-md flex items-center justify-center">
                {authorName[0]}
              </div>
              <div className="text-gray-500 ">
                {" "}
                {/* {getFormatedDate(dateCreated)} */}
              </div>
            </div>
            <div className="font-bold text-4xl">{title}</div>
            <div className="text-xl">{content}</div>
          </div>
        </div>
        <div className="text-gray-500 px-5">
          - {Math.ceil(content.length / 100)} min read
        </div>
      </div>
      <div className="w-60 h-full">
        {/* <img src={img} className="w-[100%]" /> */}
      </div>
    </div>
  );
};

export default BlogCard;
