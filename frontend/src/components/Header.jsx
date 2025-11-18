import logo from "../../public/images/logo.png";
function Header() {
  return (
    <div className=" md:px-5 md:py-4 px-2 py-3 flex justify-between items-center text-gray-100 md:text-2xl text-[16px] mb-3 border-b-[#1E2939] border-b">
      <div>
        <img src={logo} alt="logo" className="md:w-32 w-28" />
      </div>
      <div>
        <button className="text-gray-400  mr-1.5 md:mr-2 font-medium hover:text-gray-800 hover:bg-gray-400 transition-all duration-300 rounded-[10px] px-2 py-3 md:px-5 md:py-2">
          Login
        </button>
        <button className="text-gray-50  font-medium hover:bg-[#026a4b] bg-[#007a55] transition-all duration-300 rounded-[10px] px-5 py-2">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
