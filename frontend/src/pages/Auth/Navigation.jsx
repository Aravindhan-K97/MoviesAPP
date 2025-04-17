import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/users";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
      setDropdownOpen(false); // Close dropdown after logout
    } catch (error) {
      console.error(error);
    }
  };

  const closeDropdown = () => {
    setDropdownOpen(false); // Close dropdown on option click
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#0f0f0f] border w-[90%] sm:w-[30%] px-6 py-4 rounded-lg shadow-lg">
      <section className="flex justify-between items-center">
        {/* Section 1 */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center transition-transform hover:scale-110 text-white"
            onClick={closeDropdown} // Close dropdown on Home click
          >
            <AiOutlineHome size={26} />
            <span className="ml-2 hidden sm:block">Home</span>
          </Link>

          <Link
            to="/movies"
            className="flex items-center transition-transform hover:scale-110 text-white"
            onClick={closeDropdown} // Close dropdown on Shop click
          >
            <MdOutlineLocalMovies size={26} />
            <span className="ml-2 hidden sm:block">Shop</span>
          </Link>
        </div>

        {/* Section 2 */}
        <div className="relative text-white">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-1 focus:outline-none"
          >
            {userInfo && (
              <>
                <span>{userInfo.username}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </>
            )}
          </button>

          {/* Dropdown */}
          {dropdownOpen && userInfo && (
            <ul
              className={`absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-md py-2 transition-all ease-in-out duration-200 ${
                !userInfo.isAdmin ? "-top-28" : "-top-32"
              }`}
            >
              {userInfo.isAdmin && (
                <li>
                  <Link
                    to="/admin/movies/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeDropdown} // Close dropdown on Dashboard click
                  >
                    Dashboard
                  </Link>
                </li>
              )}

              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={closeDropdown} // Close dropdown on Profile click
                >
                  Profile
                </Link>
              </li>

              <li>
                <button
                  onClick={logoutHandler}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}

          {/* Not logged in */}
          {!userInfo && (
            <ul className="flex space-x-4 mt-2">
              <li>
                <Link
                  to="/login"
                  className="flex items-center transition-transform hover:scale-110"
                  onClick={closeDropdown} // Close dropdown on Login click
                >
                  <AiOutlineLogin size={24} className="mr-2" />
                  <span className="hidden sm:block">Login</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="flex items-center transition-transform hover:scale-110"
                  onClick={closeDropdown} // Close dropdown on Register click
                >
                  <AiOutlineUserAdd size={24} className="mr-2" />
                  <span className="hidden sm:block">Register</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default Navigation;
