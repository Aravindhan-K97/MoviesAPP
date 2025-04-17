import { useGetUsersQuery } from "../../../../redux/api/users";
import PrimaryCard from "./PrimaryCard";

const RealTimeCard = () => {
  const { data: visitors } = useGetUsersQuery();

  return (
    <div className="w-full max-w-md bg-[#2C2C2C] text-white rounded-xl shadow-xl p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-2">🕒 Real-Time Stats</h2>
      <p className="text-gray-400 mb-4 text-sm">Live Update</p>

      <div className="border-t border-gray-600 my-4"></div>

      <h2 className="text-4xl font-bold mb-2">{visitors?.length || 0}</h2>
      <p className="text-gray-400 mb-4 text-sm">Subscribers</p>

      <hr className="border-t border-gray-600 mb-4" />

      <PrimaryCard />
    </div>
  );
};

export default RealTimeCard;
