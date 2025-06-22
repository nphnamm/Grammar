import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAlert, useUser } from "../hooks/Hooks";

function Navbar() {
  const { id } = useParams();
  const { dispatchAlert } = useAlert();
  const { user, dispatchUser } = useUser();

  const handleLogout = () => {
    dispatchUser({ type: "LOG_OUT" });
    dispatchAlert({
      type: "SHOW",
      payload: "Log out",
      variant: "Danger",
    });
    window.location.href = "/";
  };

  return (
    <div className="backdrop-blur-md fixed inset-0 h-16 w-full bg-white bg-opacity-50 justify-between flex items-center px-4 sm:px-10 py-5">
      <Link to="/" className="text-lg sm:text-xl font-semibold">
        Fronto
      </Link>
      <div className="flex gap-2">
        <Link
          to="/users"
          className="grid place-content-center bg-blue-700 text-white font-medium text-sm sm:text-lg px-3 sm:px-5 h-8 sm:h-10 w-20 sm:w-28 rounded-3xl"
        >
          Admin
        </Link>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-700 text-white font-medium text-sm sm:text-lg px-3 sm:px-5 h-8 sm:h-10 w-20 sm:w-28 rounded-3xl"
            type="submit"
          >
            Log out
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
