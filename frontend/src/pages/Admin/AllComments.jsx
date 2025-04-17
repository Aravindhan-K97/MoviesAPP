import {
  useDeleteCommentMutation,
  useGetAllMoviesQuery,
} from "../../redux/api/movies";
import { toast } from "react-toastify";

const AllComments = () => {
  const { data: movies, refetch } = useGetAllMoviesQuery();
  const [deleteComment] = useDeleteCommentMutation();

  const handleDeleteComment = async (movieId, reviewId) => {
    try {
      // Optimistic update: remove comment from the local state before refetching
      toast.success("Comment Deleted");

      await deleteComment({ movieId, reviewId }); // Call the API to delete comment

      refetch(); // Refetch to get the updated list of comments
    } catch (error) {
      toast.error("Error deleting comment");
      console.error("Error deleting comment: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {movies?.map((movie) => (
        <section key={movie._id} className="my-8 p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl text-white font-bold mb-4">{movie.name} - Reviews</h3>

          {movie?.reviews?.length === 0 ? (
            <p className="text-gray-400">No reviews yet</p>
          ) : (
            movie?.reviews?.map((review) => (
              <div
                key={review._id}
                className="bg-[#1A1A1A] p-6 rounded-lg mb-6 flex flex-col md:flex-row items-start md:items-center"
              >
                <div className="md:w-3/4">
                  <div className="flex justify-between">
                    <strong className="text-[#B0B0B0]">{review.name}</strong>
                    <p className="text-[#B0B0B0]">
                      {review.createdAt.substring(0, 10)}
                    </p>
                  </div>

                  <p className="my-4 text-white">{review.comment}</p>
                </div>

                <button
                  className="mt-4 md:mt-0 text-red-500 hover:text-red-700 font-semibold border border-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-md transition"
                  onClick={() => handleDeleteComment(movie._id, review._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      ))}
    </div>
  );
};

export default AllComments;
