const VideoCard = ({ image, title, date, comments }) => {
  return (
    <div className="flex items-center w-[90%] mt-5 bg-[#2a2a2a] p-4 rounded-lg shadow-lg">
      {/* Video Thumbnail */}
      <div className="w-[4rem] h-[4rem] overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Card Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Video Info */}
      <div className="ml-4 flex-grow">
        <h2 className="text-lg text-white font-semibold">{title}</h2>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
      </div>

      {/* Comments */}
      <div className="flex items-center justify-end">
        <div className="text-white text-lg font-semibold">{comments}</div>
      </div>
    </div>
  );
};

export default VideoCard;
