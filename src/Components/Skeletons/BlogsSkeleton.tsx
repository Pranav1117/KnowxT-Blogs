
const BlogsSkeleton = () => {
  return (
    <div className="pt-0 md:pt-16 w-[100%] md:w-[60%] mx-auto">
      <div className="animate-pulse flex flex-col space-x-4 gap-3 p-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <div className="rounded-full ml-3 bg-gray-200 h-10 w-10"></div>
          <div className="h-4 bg-gray-200 rounded w-[40%]"></div>
        </div>
        <div className="flex-1 flex-col  space-y-8 py-1 ">
          <div className="space-y-2">
            <div className="h-7 bg-gray-200 rounded w-[60%]"></div>
            <div className="h-4 bg-gray-200 rounded w-[80%]"></div>
            <div className="h-4 bg-gray-200 rounded w-[80%]"></div>
            <div className="h-4 bg-gray-200 rounded w-[15%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSkeleton;
