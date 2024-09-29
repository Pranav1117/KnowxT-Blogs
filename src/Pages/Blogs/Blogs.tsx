import { useEffect, useState } from "react";
import BlogCard from "./BlogComponents/BlogCard";
import { fetchAllBlogs } from "../../Services/BlogsService";
import { Skeletons, Hero } from "../../Components";
import { Blog } from "../../Types/blogsTypes";

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

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
        {[1, 2, 3, 4, 5].map(() => (
          <Skeletons.BlogsSkeleton />
        ))}
      </>
    );
  }

  return (
    <div>
      <Hero />
      <div
        className={`flex flex-col md:px-10 py-10 lg:px-20 relative duration-200 ease-in -top-32`}
      >
        <div className="md:w-[90%] lg:w-[70%] bg-white shadow-lg mx-auto">
          {allBlogs.length > 0
            ? allBlogs.map((blog) => {
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
