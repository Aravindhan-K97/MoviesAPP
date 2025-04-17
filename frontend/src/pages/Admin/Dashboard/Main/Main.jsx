import SecondaryCard from "./SecondaryCard";
import VideoCard from "./VideoCard";
import ReactTimeCard from "./RealTimeCard";

import {
  useGetTopMoviesQuery,
  useGetAllMoviesQuery,
} from "../../../../redux/api/movies";
import { useGetUsersQuery } from "../../../../redux/api/users";
import RealTimeCard from "./RealTimeCard";

const Main = () => {
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: visitors } = useGetUsersQuery();
  const { data: allMovies } = useGetAllMoviesQuery();

  const totalCommentsLength = allMovies?.map((m) => m.numReviews);
  const sumOfCommentsLength = totalCommentsLength?.reduce(
    (acc, length) => acc + length,
    0
  );

  return (
    <div className="bg-[#0f0f0f] min-h-screen px-6 py-10">
      <section className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          {/* Metric Cards */}
          <div className="flex flex-wrap gap-6 mb-10">
            <SecondaryCard
              pill="Users"
              content={visitors?.length}
              info="20.2k more than usual"
              gradient="from-teal-500 to-lime-400"
            />
            <SecondaryCard
              pill="Comments"
              content={sumOfCommentsLength}
              info="742.8 more than usual"
              gradient="from-[#CCC514] to-[#CDCB8E]"
            />
            <SecondaryCard
              pill="Movies"
              content={allMovies?.length}
              info="372+ more than usual"
              gradient="from-green-500 to-lime-400"
            />
          </div>
  
          {/* Section Heading */}
          <div className="flex justify-between text-white font-bold mb-4">
            <p>Top Content</p>
            <p>Comments</p>
          </div>
  
          {/* Movie Cards */}
          <div className="flex flex-col gap-4">
            {topMovies?.map((movie) => (
              <VideoCard
                key={movie._id}
                image={movie.image}
                title={movie.name}
                date={movie.year}
                comments={movie.numReviews}
              />
            ))}
          </div>
        </div>
  
        {/* Right Section */}
        <div className="w-full lg:w-[30%]">
          <RealTimeCard />
        </div>
      </section>
    </div>
  );
  
};

export default Main;
