"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "../provider/AuthProvider";
import InputField from "./components/InputField";
import { Profile } from "./components/Profile";
import { iconPosting } from "./faker/iconButton";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const { user } = useAuthContext("");

  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState("");

  const router = useRouter();

  const handlePost = async () => {
    if (!post) {
      return alert("You can not Post with empty feel");
    }
    try {
      setLoading(true);
      const response = await fetch(
        "https://devscale-mockapi.fly.dev/api/collections/notes/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: auth,
            content: post,
            additionalData: "4212ganteng",
          }),
        }
      );

      setPost("");

      setLoading(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isLogedin = JSON.parse(localStorage.getItem("auth"));

    if (isLogedin) {
      setAuth(isLogedin.name);
    } else {
      return router.push("/");
    }
  }, []);
  return (
    <div className="card-global ">
      <div className=" gap-4 space-y-3">
        <Profile />
        <InputField
          handleChange={(e) => setPost(e.target.value)}
          value={post}
        />
      </div>
      <hr className="my-4" />

      <div className=" space-y-10 ">
        <div className="lg:flex lg:mt-7  lg:justify-between space-y-3 lg:items-center lg:border lg:rounded-lg lg:px-2 lg:py-4  ">
          <div>
            <h1 className="">Tambah ke Postingan Anda</h1>
          </div>
          <div className="lg:flex ">
            {iconPosting.map((item, index) => (
              <div className="flex space-x-2 items-center " key={index}>
                <button className="hover:bg-slate-100 hover:rounded-full lg:w-full h-full  p-2">
                  {item?.icon}
                </button>
                <h1 className="lg:hidden">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <button
          className="bg-sky-500 text-base  w-full text-slate-200  py-3 rounded-md font-bold hover:bg-sky-600 hover:text-slate-100"
          onClick={handlePost}
        >
          {loading ? "loading..." : "Post"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
