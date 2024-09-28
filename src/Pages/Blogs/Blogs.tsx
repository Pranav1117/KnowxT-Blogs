import { useEffect, useState } from "react";
import BlogCard from "./BlogComponents/BlogCard";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom, userSelector } from "../../Recoil/User";
import BlogsSkeleton from "../../Components/Skeletons/BlogsSkeleton";
import { fetchAllBlogs } from "../../Services/BlogsService";
import Hero from "../../Components/Hero/Hero";

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
  const user = useRecoilValue(userAtom);
  const [allBlogs, setAllBlogs] = useState<blog[]>([]);
  const [loading, setLoading] = useState(false);
console.log(user);
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const response = await fetchAllBlogs();
      if (response?.status === 200) {
        setAllBlogs(response?.data.blogs);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <>
        <Hero />
        {[1, 2, 3, 4, 5].map((item, index) => (
          <BlogsSkeleton />
        ))}
      </>
    );
  }

  return (
    <div>
      <Hero />
      <div
        className={`flex flex-col py-10 px-20 relative duration-200 ease-in -top-40`}
      >
        <div className="w-[70%] bg-white shadow-lg mx-auto">
          {allBlogs.length > 0
            ? allBlogs.map((blog, index) => {
                return (
                  <div className="flex">
                    <BlogCard
                      blogId={blog.id}
                      title={blog.title}
                      content={blog.content}
                      authorName={blog.author.username}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
export default Blogs;
