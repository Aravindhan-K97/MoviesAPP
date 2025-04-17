import { useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";
import { useFetchGenresQuery } from "../../redux/api/genre";
import SliderUtil from "../../component/SliderUtil";

const MoviesContainerPage = () => {
  const { data: newMovies } = useGetNewMoviesQuery();
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: genres } = useFetchGenresQuery();
  const { data: randomMovies } = useGetRandomMoviesQuery();

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = newMovies?.filter(
    (movie) => selectedGenre === null || movie.genre === selectedGenre
  );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-start">
      {/* Genre Buttons */}
      <nav className="lg:w-[20%] flex flex-wrap justify-start items-center space-x-4 lg:flex-col xl:flex-col md:flex-row sm:flex-row mb-6 lg:mb-0">
        {genres?.map((g) => (
          <button
            key={g._id}
            className={`transition duration-300 ease-in-out hover:bg-gray-200 block p-2 rounded mb-2 text-lg ${
              selectedGenre === g._id ? "bg-gray-200" : ""
            }`}
            onClick={() => handleGenreClick(g._id)}
          >
            {g.name}
          </button>
        ))}
      </nav>

      {/* Movie Sliders Section */}
      <section className="w-full lg:w-[75%]">
        {/* Random Movies Slider */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">Choose For You</h1>
          <SliderUtil data={randomMovies} />
        </div>

        {/* Top Movies Slider */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">Top Movies</h1>
          <SliderUtil data={topMovies} />
        </div>

        {/* Filtered Movies Slider */}
        <div className="mb-8">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">Choose Movie</h1>
          <SliderUtil data={filteredMovies} />
        </div>
      </section>
    </div>
  );
};

export default MoviesContainerPage;
