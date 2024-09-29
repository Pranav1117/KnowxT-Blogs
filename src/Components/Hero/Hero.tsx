import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="relative min-h-[48vh] md:min-h-[60vh] max-h-72 text-white bg-customRed">
      {/* Background abstract design on Hero section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="bg-white opacity-5 w-80 h-80 rounded-full absolute top-20 left-60"></div>
        <div className="bg-white opacity-10 w-64 h-64 rounded-full absolute top-32 right-32"></div>
        <div className="bg-white opacity-15 w-96 h-96 rounded-full absolute top-40 -right-32"></div>
        <div className="bg-white opacity-5 w-40 h-40 rounded-full absolute bottom-20 left-40"></div>
      </div>

      <div className="relative flex flex-col pt-20 md:w-[90%] lg:w-[60%] mx-auto gap-4 z-9 fade-in-animation">
        <div className="text-white text-3xl lg:text-6xl font-bold text-center">
          Unlock a World of Ideas
        </div>
        <div className="text-center">
          Discover thought-provoking articles, personal stories, and expert
          opinions from writers around the globe. Whether you're here to learn,
          share, or get inspired—your journey begins with a single read.
        </div>
        <div className="flex gap-8 self-center">
          <button className="border border-white rounded  px-2 py-1 md:px-4 md:py-2 duration-100 ease-linear hover:bg-white hover:text-black">
            Start Reading
          </button>
          <button className="bg-white text-black border border-white rounded duration-100 ease-linear px-2 py-1 md:px-4 md:py-2 hover:bg-transparent hover:text-white" onClick={() => navigate("/createnewblog")}>
            Write your story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
