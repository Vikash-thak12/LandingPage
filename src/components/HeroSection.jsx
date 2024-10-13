import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">Virtual Build Tools <span>for <br />Developers</span></h1>
        <p className="text-center max-w-4xl mx-auto mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum velit ipsam neque fuga possimus est</p>
      </div>
      <div className="flex items-center justify-center mt-5 gap-5">
        <a href="#" className="p-3 rounded-xl bg-orange-500">Get free</a>
        <a href="#" className="border p-3 rounded-xl">Documentation</a>
      </div>
      <div className="mt-5 flex flex-col md:flex-row items-center justify-center w-full">
        <video muted autoPlay loop className="rounded-lg w-full md:w-[40%] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
            <source src={video1} type="video/mp4"/>
        </video>
        <video muted autoPlay loop className="rounded-lg w-full md:w-[40%] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
};

export default HeroSection;