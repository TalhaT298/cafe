import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
  const {user, logOut}=useContext(AuthContext);

  const handleLogOut =()=>{
        logOut()
        .then(() => { })
        .catch((error) => 
          
          console.log(error)
        );
  }
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {
        user?  <>
         <button onClick={handleLogOut} className="btn btn-ghost">Button</button>
        
        </>:<>
        <li><Link to="/login">Login</Link></li>
        </>
      }
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl text-white bg-black">
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
            className="menu font-medium text-black  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32"
          >
            {navOption}
          </ul>
        </div>
        <Link to="/"><a className="btn btn-ghost text-xl">javaJive</a></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium items-center  px-1">
          {navOption}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
