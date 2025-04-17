import { Link } from "react-router-dom";

const MovieTabs = ({ userInfo, submitHandler, comment, setComment, movie }) => {
  return (
    <div className="p-4">
      {/* Review Form */}
      <section>
        {userInfo ? (
          <form onSubmit={submitHandler}>
            <div className="my-4">
              <label htmlFor="comment" className="block text-xl mb-2">
                Write Your Review
              </label>

              <textarea
                id="comment"
                rows="4"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Write your thoughts about the movie..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p className="mt-4">
            Please{" "}
            <Link to="/login" className="text-teal-600 hover:underline">
              Sign In
            </Link>{" "}
            to write a review.
          </p>
        )}
      </section>

      {/* Reviews Section */}
      <section className="mt-8">
        {movie?.reviews.length === 0 ? (
          <p className="text-gray-500 text-center">No Reviews Yet</p>
        ) : (
          <div className="space-y-6">
            {movie?.reviews.map((review) => (
              <div
                key={review._id}
                className="p-6 rounded-lg w-full max-w-3xl mx-auto border border-gray-300"
              >
                <div className="flex justify-between mb-4">
                  <strong className="text-[#B0B0B0] text-lg">{review.name}</strong>
                  <p className="text-[#B0B0B0] text-sm">{review.createdAt.substring(0, 10)}</p>
                </div>

                <p className="text-black">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MovieTabs;
