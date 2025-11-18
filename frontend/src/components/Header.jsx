import logo from "../../public/images/logo.png";
function Header() {
  return (
    <div className=" px-5 py-4 flex justify-between items-center text-gray-100 text-2xl mb-3 border-b-[#1E2939] border-b">
      <div>
        <img src={logo} alt="logo" className="w-32 " />
      </div>
      <div>
        <button className="text-gray-400 text-xl mr-2 font-medium hover:text-gray-800 hover:bg-gray-400 transition-all duration-300 rounded-[10px]  px-5 py-2">
          Login
        </button>
        <button className="text-gray-50 text-xl font-medium hover:bg-[#026a4b] bg-[#007a55] transition-all duration-300 rounded-[10px] px-5 py-2">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Header;
