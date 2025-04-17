const SecondaryCard = ({ pill, content, info, gradient }) => {
  return (
    <div
      className={`w-[15rem] h-[12rem] relative mt-10 bg-gradient-to-b ${gradient} rounded-lg shadow-xl ml-5 p-4`}
    >
      <div
        className={`absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-b ${gradient} text-white font-semibold rounded-full py-2 px-6 text-sm shadow-md`}
      >
        {pill}
      </div>

      <div className="flex items-center justify-center h-full">
        <h2 className="text-4xl font-bold text-white">{content}</h2>
      </div>

      <div className="absolute bottom-4 left-6 text-sm text-white">{info}</div>
    </div>
  );
};

export default SecondaryCard;
