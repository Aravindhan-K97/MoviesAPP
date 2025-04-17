import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetSpecificMovieQuery,
  useAddMovieReviewMutation,
} from "../../redux/api/movies";
import MovieTabs from "./MovieTabs";

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { data: movie, refetch } = useGetSpecificMovieQuery(movieId);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingMovieReview }] =
    useAddMovieReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        id: movieId,
        rating,
        comment,
      }).unwrap();

      refetch();

      toast.success("Review created successfully");
    } catch (error) {
      toast.error(error.data || error.message);
    }
  };

  return (
    <>
      <div>
        <Link
          to="/"
          className="text-white font-semibold hover:underline ml-4 md:ml-8"
        >
          Go Back
        </Link>
      </div>

      <div className="mt-8">
        <div className="flex justify-center items-center mb-8">
          <img
            src={movie?.image}
            alt={movie?.name}
            className="w-[80%] md:w-[60%] rounded-md shadow-lg"
          />
        </div>

        {/* Movie Info Section */}
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
          <section className="md:w-[60%]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{movie?.name}</h2>
            <p className="text-gray-400 text-base md:text-lg">{movie?.detail}</p>
          </section>

          <div className="mt-8 md:mt-0 md:w-[30%]">
            <p className="text-2xl font-semibold mb-2">
              Releasing Date: {movie?.year}
            </p>

            <div>
              <p className="font-semibold">Cast:</p>
              {movie?.cast.map((c, idx) => (
                <ul key={idx} className="mt-2">
                  <li className="text-gray-300">{c}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Movie Review Section */}
        <div className="mt-8">
          <MovieTabs
            loadingMovieReview={loadingMovieReview}
            userInfo={userInfo}
            submitHandler={submitHandler}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            movie={movie}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
