import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="grid-rows-2 min-h-screen gap-2 mx-auto bg-black ">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
