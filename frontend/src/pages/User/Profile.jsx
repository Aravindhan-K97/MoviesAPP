import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../component/Loader";
import { useProfileMutation } from "../../redux/api/users";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: loadingUpdateProfile }] = useProfileMutation();

  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo]);

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Navigation Tab */}
      <div className="fixed top-0 left-0 w-full z-10 p-4 shadow-lg">
        <Link to="/" className="text-teal-500 hover:underline">
          Go Back
        </Link>
      </div>

      {/* Profile Page Content */}
      <div className="flex justify-center items-center mt-[5rem] md:mt-[7rem]">
        <div className="md:w-1/3 w-full p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center text-teal-500">
            Update Profile
          </h2>

          <form onSubmit={submitHandler} className="space-y-4">
            {/* Username Field */}
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-input p-4 rounded-sm w-full bg-transparent text-white border border-gray-300"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-input p-4 rounded-sm w-full bg-transparent text-white border border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="form-input p-4 rounded-sm w-full bg-transparent text-white border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label className="block mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-input p-4 rounded-sm w-full bg-transparent text-white border border-gray-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
              <button
                type="submit"
                className="bg-teal-500 w-full sm:w-auto font-bold text-white py-2 px-6 rounded hover:bg-teal-600 transition duration-300"
              >
                {loadingUpdateProfile ? "Updating..." : "Update"}
              </button>
              {loadingUpdateProfile && <Loader />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
