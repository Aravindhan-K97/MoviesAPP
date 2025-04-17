import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../pages/Movies/MovieCard";
import { useState, useEffect } from "react";
import Loader from "../component/Loader"; // Assuming you have a Loader component for better UX

const SliderUtil = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Effect to stop loading once data is available
  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false); // Stop loading if data exists
    }
  }, [data]); // Dependency array ensures this runs only when 'data' changes

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center my-4">
          <Loader /> {/* Show loading spinner or animation */}
        </div>
      ) : data?.length === 0 ? (
        <p className="text-center text-white">No movies available.</p>
      ) : (
        <Slider {...settings}>
          {data?.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default SliderUtil;
