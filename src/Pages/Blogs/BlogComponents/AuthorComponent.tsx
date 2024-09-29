import { authorComponentProps } from "../../../Types/blogsTypes";

const AuthorComponent = ({ authorName, quote }: authorComponentProps) => {
  return (
    <div className="py-5">
      <div className="flex gap-4">
        <div className="h-10 w-10  flex justify-center items-center rounded-full bg-gray-200 text-xl font-semibold mt-4">{authorName[0].toUpperCase()}</div>
        <div className="w-[60%]">
          <div className="text-2xl font-semibold">{authorName.toUpperCase()}</div>
          <div className="text-gray-500 break-words truncate">{quote}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthorComponent;
