import { Zap } from "lucide-react";

function HeroSection() {
  return (
    <div className="flex md:px-5  gap-8 flex-col justify-center mt-20 mx-auto items-center ">
      <div className="flex px-4 py-3 bg-[rgb(0,19,12)] rounded-3xl border-[0.5px]  border-[#003523]">
        <Zap color="#00D492" size={25} />{" "}
        <span className="md:ml-3 ml-2 text-[#00D492] text-[12px] md:textlg">
          Simple Task Management
        </span>
      </div>
      <div className="flex flex-col justify-center items-center px-2">
        <p>Organize your tasks,</p>
        <p>simplify your life</p>
      </div>

      <div className="text-center text-gray-400 max-w-[690px] font-medium text-[18px] ">
        A lightweight todo app that helps you focus on what matters. No clutter,
        just simple task management that works.
      </div>

      <div>
        <button className="bg-[#04bc82] hover:bg-[#049064]  mr-4 rounded-[9px] transition-all duration-300 cursor-pointer  px-4 py-2  md:font-medium">
          Get Started Free
        </button>
        <button className="bg-gray-200  text-gray-700 hover:bg-[#141D2D] hover:text-white transition-all duration-300 cursor-pointer rounded-[9px] px-4 py-2 font font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
