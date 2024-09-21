import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthorComponent from "./BlogComponents/AuthorComponent";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { getFormatedDate } from "../../Utils/formatDate";
import BlogDescriptionSkeleton from "../../Components/Skeletons/BlogDescriptionSkeleton";

interface Author {
  username: string;
  email: string;
  password?: string;
  id: number;
}

interface Blog {
  author: Author;
  authorId: number;
  content: string;
  createdAt: string;
  id: string;
  published: boolean;
  title: string;
}

const BlogDescription = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleEdit = () => {
    navigate("/updateblog", { state: blog });
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `http://127.0.0.1:8787/api/v1/blog/deleteblog/${blog.id}`
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/blogs");
      }
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8787/api/v1/blog/details/${state}`
        );
        console.log(res.data.blog);
        setBlog(res.data.blog);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch the blog");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [state]);

  if (loading)
    return (
      <>
        <BlogDescriptionSkeleton />
      </>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="pt-24 px-8">
      {blog ? (
        <div className="w-[90%] mx-auto p-5 flex gap-5">
          <div className="flex flex-col p-2 min-h-[70vh] w-[70%]">
            <div>
              <h1 className="text-3xl font-bold mb-4 text-center">
                {blog.title}
              </h1>
              <div className="flex items-center gap-8 p-4 justify-end">
                <p className="text-sm text-gray-500 ">
                  Published on {getFormatedDate(blog.createdAt)}
                </p>
                <div className="flex gap-3">
                  <MdOutlineModeEditOutline
                    className="cursor-pointer"
                    onClick={handleEdit}
                  />
                  <MdDeleteOutline
                    className="cursor-pointer"
                    onClick={handleDelete}
                  />
                </div>
              </div>
              <p className="text-lg mb-6">{blog.content}</p>
            </div>
          </div>
          <div className="p-2 w-[25%]">
            <div className="text-xl">Author</div>
            <AuthorComponent
              authorName={ blog.author.username }
              quote="lorem espum fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            />
          </div>
        </div>
      ) : (
        <div>Blog details not available.</div>
      )}
    </div>
  );
};

export default BlogDescription;
