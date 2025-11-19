import logo from "/images/logo.png";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between md:px-24 items-center py-8 gap-4">
      <img src={logo} alt="logo image" className="w-26 md:w-32" />
      <p className="text-gray-400">© 2025 Quickdo. All rights reserved.</p>
    </div>
  );
}

export default Footer;
