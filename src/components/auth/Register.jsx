"use client";
import { useEffect, useState } from "react";
import { useAuthContext } from "../provider/AuthProvider";
import { useRouter } from "next/navigation";

const Register = () => {
  const { user, setUser } = useAuthContext();
  const [dissable, setDissable] = useState(true);
  const router = useRouter();

  const handleChange = (e) => {
    setUser(e.target.value);
    setDissable(e.target.value.trim() === "");
  };

  const handleSubmit = () => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        name: user,
        isLogedin: true,
      })
    );

    router.push("/post");
  };

  useEffect(() => {
    const isLogedin = JSON.parse(localStorage.getItem("auth"));

    if (isLogedin) {
      router.push("/post");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className=" space-y-5 shadow-lg ">
        <h1 className="text-white text-base text-center mt-10 ">
          Please Login first!
        </h1>

        <div className="space-y-5 p-32">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>

          <div>
            <button
              className="bg-indigo-500 disabled:bg-gray-300 disabled:opacity-50 text-white px-2 py-1 rounded-md w-full"
              disabled={dissable}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
