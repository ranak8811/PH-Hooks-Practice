import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
