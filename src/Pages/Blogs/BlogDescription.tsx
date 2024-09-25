import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import AuthorComponent from "./BlogComponents/AuthorComponent";
import { getFormatedDate } from "../../Utils/index";
import BlogDescriptionSkeleton from "../../Components/Skeletons/BlogDescriptionSkeleton";
import { deleteBlog, fetchBlogById } from "../../Services/BlogsService";
import * as CONSTANT from "../../Constants/index";
import Modal from "../../Components/Common/Modal";
import * as Common from "../../Components/Common";
import { buttonType } from "../../Components/Common/Button";
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
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  const handleEdit = () => {
    navigate(CONSTANT.ROUTES.BLOG_UPDATE, { state: blog });
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    const response = await deleteBlog(blog?.id);
    if (response?.status === 200) {
      setDeleteLoading(false);
      toast.success(response?.data.message);
      navigate(CONSTANT.ROUTES.BLOG_ALL);
    }
    setShowDeletePopup(false);
  };

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const response = await fetchBlogById(state);
      if (response?.status === 200) {
        setBlog(response.data.blog);
      }
      setLoading(false);
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
                <p className="text-sm text-gray-500">
                  Published on {getFormatedDate(blog.createdAt)}
                </p>
                <div className="flex gap-3">
                  <MdOutlineModeEditOutline
                    className="cursor-pointer"
                    onClick={handleEdit}
                    color="#E04E66"
                    size={20}
                    
                  />
                  <MdDeleteOutline
                    className="cursor-pointer"
                    onClick={() => setShowDeletePopup(true)}
                    color="#E04E66"
                    size={20}
                  />
                </div>
              </div>
              <p className="text-lg mb-6">{blog.content}</p>
            </div>
          </div>
          <div className="p-2 w-[25%]">
            <div className="text-xl">Author</div>
            <AuthorComponent
              authorName={blog.author.username}
              quote="lorem espum fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
            />
          </div>
        </div>
      ) : (
        <div>Blog details not available.</div>
      )}
      {showDeletePopup ? (
        <Modal
          title="Confirm Delete"
          onClose={() => {
            setShowDeletePopup(false);
          }}
        >
          <div className="flex flex-col gap-4">
            <div>Are you sure you want to delete blog?</div>
            <Common.Button
              label="Delete"
              type={buttonType.Submit}
              onClick={handleDelete}
              loading={deleteLoading}
            />
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogDescription;
