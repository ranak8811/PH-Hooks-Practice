import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookmarkContext } from "../providers/BookMarksProvider";
import { UserContext } from "../providers/UserProvider";

const Navbar = () => {
  const { bookmarks } = useContext(BookmarkContext);
  const { user } = useContext(UserContext);
  const links = (
    <div className="lg:flex gap-2 space-y-1 lg:space-y-0">
      <li>
        <NavLink to={"/"}>All Posts</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Bookmark: ({bookmarks.length})</NavLink>
      </li>
      <li>
        <NavLink to={"/"}>Hi, {user.name}</NavLink>
      </li>
      <li>
        <NavLink to={"/common/contact/true"}>Contact Us</NavLink>
        {/* optional params */}
      </li>
      <li>
        <NavLink to={"/common/about"}>About Us</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
