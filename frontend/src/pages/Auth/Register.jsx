import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../component/Loader";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { useRegisterMutation } from "../../redux/api/users";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User successfully registered.");
      } catch (err) {
        console.log(err);
        toast.error(err.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen bg-black text-white">
      {/* Left: Form */}
      <div className="w-full lg:w-1/2 px-6 lg:px-20 py-10">
        <h1 className="text-3xl font-bold mb-6">Register</h1>
  
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded text-black"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded text-black"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded text-black"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded text-black"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
  
          <button
            disabled={isLoading}
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded w-full"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
  
          {isLoading && <Loader />}
        </form>
  
        <div className="mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
            className="text-teal-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
  
      {/* Right: Image */}
      <div className="w-full lg:w-1/2 h-96 lg:h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Register"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
  
};
export default Register;
