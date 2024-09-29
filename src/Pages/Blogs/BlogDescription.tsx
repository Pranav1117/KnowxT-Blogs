import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import * as CONSTANT from "../../Constants/index";
import AuthorComponent from "./BlogComponents/AuthorComponent";
import Modal from "../../Components/Common/Modal";
import { getFormatedDate } from "../../Utils/index";
import { deleteBlog, fetchBlogById } from "../../Services/BlogsService";
import { Common, Skeletons,  } from "../../Components"
import { buttonType } from "../../Components/Common/Button";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { userAtom, userSelector } from "../../Recoil/User";
import { Blog } from "../../Types/blogsTypes";


const BlogDescription = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

  // const userLoadable = useRecoilValueLoadable(userSelector);
  const user = useRecoilValue(userAtom)
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
        <Skeletons.BlogDescription />
      </>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="pt-14 md:pt-24 md:px-8">
      {blog ? (
        <div className="w-[90%] mx-auto p-2 md:p-5 flex flex-col-reverse md:flex-row gap-2 md:gap-5">
          <div className="flex flex-col p-2 w-[90%] min-h-[50vh] md:min-h-[70vh] md:w-[70%]">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 md:text-center">
                {blog.title}
              </h1>
              <div className="flex items-center mb-5 md:mb-0 justify-between gap-5 md:gap-8 py-2 md:p-4 md:justify-end">
                <p className="text-sm text-gray-500">
                  Published on {getFormatedDate(blog.createdAt)}
                </p>
                <div className={`${user?.id === blog.author.id ? "flex" : "hidden"} gap-3`}>
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
          <div className="p-2 w-[100%] md:w-[25%]">
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
          <div className="flex flex-col gap-6">
            <div className="text-center text-xl">Are you sure you want to delete ?</div>
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
