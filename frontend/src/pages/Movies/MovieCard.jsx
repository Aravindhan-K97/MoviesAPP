import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div key={movie._id} className="relative group m-4 sm:m-6 lg:m-8">
      <Link to={`/movies/${movie._id}`}>
        <img
          src={movie.image}
          alt={movie.name}
          className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem] md:w-[20rem] md:h-[20rem] object-cover rounded-lg shadow-lg transition duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-80"
        />
      </Link>

      <div className="absolute bottom-5 left-5 right-5 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
        <p className="text-white text-sm sm:text-lg font-bold text-shadow-md">{movie.name}</p>
      </div>
    </div>
  );
};

export default MovieCard;
