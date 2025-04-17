import { useGetUsersQuery } from "../../../../redux/api/users";

const PrimaryCard = () => {
  const { data: visitors } = useGetUsersQuery();

  return (
    <div className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-2">🎉 Congratulations!</h2>
      <p className="text-lg">
        You have <span className="font-semibold">{visitors?.length}</span> new users watching your content.
      </p>
    </div>
  );
};

export default PrimaryCard;
