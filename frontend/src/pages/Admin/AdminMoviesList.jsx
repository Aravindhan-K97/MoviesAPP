import { Link } from "react-router-dom";
import { useGetAllMoviesQuery } from "../../redux/api/movies";

const AdminMoviesList = () => {
  const { data: movies } = useGetAllMoviesQuery();

  return (
    <div className="container mx-[9rem]">
      <div className="flex flex-col md:flex-row">
        <div className="p-3">
          <div className="ml-[2rem] text-xl font-bold h-12">
            All Movies ({movies?.length})
          </div>

          <div className="flex flex-wrap justify-center items-center p-[2rem]">
            {movies?.map((movie) => (
              <Link
                key={movie._id}
                to={`/admin/movies/update/${movie._id}`}
                className="block mb-4 overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <div className="max-w-sm m-[2rem] rounded-lg overflow-hidden shadow-xl bg-white hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="px-6 py-4 border-b border-gray-300">
                    <div className="font-bold text-xl mb-2">{movie.name}</div>
                  </div>

                  <p className="px-6 py-2 text-gray-700 text-base">{movie.detail}</p>

                  <div className="flex justify-center mt-4 mb-[2rem]">
                    <Link
                      to={`/admin/movies/update/${movie._id}`}
                      className="bg-teal-500 text-white font-bold py-2 px-4 rounded-full hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Update Movie
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMoviesList;
