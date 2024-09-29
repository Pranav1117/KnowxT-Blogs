const PageLoader = ({ loadMsg = "Loading..." }: { loadMsg: String }) => {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-5">
        <div className="rounded-md h-10 w-10 border-4 border-t-4 border-red-600 animate-spin"></div>
        <div className="text-xl text-red-900 tracking-wide font-semibold animate-bounce">
          {loadMsg}
        </div>
      </div>
    );
  };
  export default PageLoader;