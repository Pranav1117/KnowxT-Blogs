import React from "react";

const BlogDescriptionSkeleton = () => {
  return (
    <div className="flex justify-between pt-24 px-8 w-[60%] mx-auto">
      <div className="animate-pulse flex flex-col space-x-4 gap-3 p-5 w-[80%] border-gray-200">
       
        <div className="flex-1 flex-col  space-y-8 py-1 ">
          <div className="space-y-8 flex flex-col">
            <div className="h-7 bg-gray-200 self-center rounded w-[60%]"></div>
            <div className="h-3 self-end bg-gray-200 rounded w-[20%]"></div>
            <div className="flex flex-col gap-3">
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
              <div className="h-4 bg-gray-200 rounded w-[100%]"></div>
            </div>
              <div className="h-4 bg-gray-200 rounded w-[15%]"></div>
          </div>
        </div>
      </div>
      <div className="w-[20%] p-5">
         <div className="flex items-center gap-4">
          <div className="rounded-full ml-3 bg-gray-200 h-10 w-10"></div>
          <div className="h-4 bg-gray-200 rounded w-[40%]"></div>
        </div>
        </div>
    </div>
  );
};

export default BlogDescriptionSkeleton;
