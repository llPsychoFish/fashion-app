import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen bg-background px-6 py-10 flex flex-col justify-center">

      <h2 className="text-2xl font-bold text-textPrimary mb-6">
        Login
      </h2>

      <input
        type="text"
        placeholder="Email or Phone"
        className="w-full border rounded-lg p-4 mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg p-4 mb-6"
      />

      <button className="w-full bg-teal text-white py-4 rounded-xl font-semibold">
        Login
      </button>

      <p className="text-center mt-6 text-textSecondary">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary font-semibold">
          Sign Up
        </Link>
      </p>

    </div>
  );
}