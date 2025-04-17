import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="-translate-y-10 flex h-screen fixed mt-10 border-r-2 border-[#242424]">
      <aside className="text-white w-64 flex-shrink-0">
        <ul className="py-4">
          <li className="text-lg">
            <Link
              to="/admin/movies/dashboard"
              className={`block p-2 ml-20 mb-10 rounded-full ${
                location.pathname === "/admin/movies/dashboard"
                  ? "bg-gradient-to-b from-green-500 to-lime-400"
                  : "hover:bg-gradient-to-b from-green-500 to-lime-400"
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/admin/movies/create"
              className={`block p-2 ml-20 mb-10 rounded-full ${
                location.pathname === "/admin/movies/create"
                  ? "bg-gradient-to-b from-green-500 to-lime-400"
                  : "hover:bg-gradient-to-b from-green-500 to-lime-400"
              }`}
            >
              Create Movie
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/admin/movies/genre"
              className={`block p-2 ml-20 mb-10 rounded-full ${
                location.pathname === "/admin/movies/genre"
                  ? "bg-gradient-to-b from-green-500 to-lime-400"
                  : "hover:bg-gradient-to-b from-green-500 to-lime-400"
              }`}
            >
              Create Genre
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/admin/movies-list"
              className={`block p-2 ml-20 mb-10 rounded-full ${
                location.pathname === "/admin/movies-list"
                  ? "bg-gradient-to-b from-green-500 to-lime-400"
                  : "hover:bg-gradient-to-b from-green-500 to-lime-400"
              }`}
            >
              Update Movie
            </Link>
          </li>
          <li className="text-lg">
            <Link
              to="/admin/movies/comments"
              className={`block p-2 ml-20 mb-10 rounded-full ${
                location.pathname === "/admin/movies/comments"
                  ? "bg-gradient-to-b from-green-500 to-lime-400"
                  : "hover:bg-gradient-to-b from-green-500 to-lime-400"
              }`}
            >
              Comments
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
