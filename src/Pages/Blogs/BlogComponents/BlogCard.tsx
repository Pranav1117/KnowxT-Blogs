import { useNavigate } from "react-router-dom";
import { BlogCardProps } from "../../../Types/blogsTypes";



const BlogCard = ({ title, content, authorName, blogId }: BlogCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-2 md:p-5 border-b-2 flex items-center justify-between w-[100%] cursor-pointer"
      onClick={() => navigate(`/blog/${blogId}`, { state: blogId })}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className=" flex flex-col gap-4 cursor-pointer ease-linear duration-100 px-5 py-4 rounded ">
            <div className="flex gap-5">
              <div className="flex gap-4 items-center">
                <span className="bg-gray-700 w-8 h-8 rounded-full text-white text-md flex items-center justify-center">
                  {authorName[0]}
                </span>
                <span className="text-gray-700 text-xl -translate-y-0.5">
                  {authorName.toUpperCase()}
                </span>
              </div>
              <div className="text-gray-500 "> </div>
            </div>
            <div className="font-bold text-2xl md:text-4xl">{title}</div>
            <div className="text-xl">{content}</div>
          </div>
        </div>
        <div className="text-gray-500 px-5">
          - {Math.ceil(content.length / 100)} min read
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
