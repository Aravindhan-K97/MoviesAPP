import SliderUtil from "../../component/SliderUtil";
import { useGetNewMoviesQuery } from "../../redux/api/movies";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useGetNewMoviesQuery();

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
      {/* Navigation */}
      <nav className="w-full md:w-1/5 flex flex-col space-y-3">
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:bg-teal-200 bg-[#f4f4f4] text-black rounded-md px-4 py-2 text-base font-medium"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="transition duration-300 ease-in-out hover:bg-teal-200 bg-[#f4f4f4] text-black rounded-md px-4 py-2 text-base font-medium"
        >
          Browse Movies
        </Link>
      </nav>

      {/* Slider Section */}
      <div className="w-full md:w-4/5">
        <SliderUtil data={data} />
      </div>
    </div>
  );
};

export default Header;
