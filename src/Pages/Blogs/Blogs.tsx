import { useEffect, useState } from "react";
import BlogCard from "./BlogComponents/BlogCard";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom, userSelector } from "../../Recoil/User";
import BlogsSkeleton from "../../Components/Skeletons/BlogsSkeleton";
import { fetchAllBlogs } from "../../Services/BlogsService";

interface authorProp {
  email: string;
  id: number;
  password: string;
  username: string;
}

interface blog {
  id: string;
  author: authorProp;
  authorId: number;
  title: string;
  content: string;
  createdAt: string;
}

const Blogs = () => {
  const user = useRecoilValue(userAtom)
  const [allBlogs, setAllBlogs] = useState<blog[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const response = await fetchAllBlogs()
      if(response?.status === 200){
        setAllBlogs(response?.data.blogs);
      }
      setLoading(false);
    }  
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <BlogsSkeleton />
        ))}
      </>
    );
  }

  return (
    <div className="flex py-10 px-20 ">
      <div className="w-[70%] mx-auto">
        {allBlogs.length > 0
          ? allBlogs.map((blog, index) => {
              return (
                <div className="flex">
                  {/* <div className=""> */}
                  <BlogCard
                    blogId={blog.id}
                    title={blog.title}
                    // dateCreated={blog.dateCreated}
                    content={blog.content}
                    authorName={blog.author.username}
                    // img={blog.imgUrl}
                  />
                  {/* </div> */}
                  {/* <div className="w-[30%] py-10"><AuthorComponent authorName={blog.author} quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id," /></div> */}
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default Blogs;
