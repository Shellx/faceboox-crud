"use client";

import profile from "@/assets/aziz.jpeg";
import Image from "next/image";
import { useState } from "react";
import InputField from "./components/InputField";
import { FileEdit, ThumbsUp, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const ListPost = ({ user, content, id }) => {
  const [isEdit, setEdit] = useState(false);
  const [post, setPost] = useState(content);

  const router = useRouter();

  const handleDelete = async () => {
    try {
      await fetch(
        `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
        {
          method: "DELETE",
        }
      );
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: post, user: user }),
        }
      );
      setEdit(false);
      router.refresh();
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-global space-y-4" key={{ id }}>
      <div className="flex space-x-3 items-center">
        <Image
          src={profile}
          className="rounded-full"
          width={60}
          alt="profile"
        />
        <div className="">
          <h1 className="font-bold">{user}</h1>
          <input
            type="text"
            value={"Sponsored"}
            className="text-slate-400"
            disabled
          />
        </div>
      </div>

      <div className="border border-slate-100 px-3 py-1 min-h-[100px]">
        {isEdit ? (
          <InputField
            value={post}
            handleChange={(e) => setPost(e.target.value)}
          />
        ) : (
          <div>{content}</div>
        )}
      </div>

      <div className="flex justify-between items-center px-3">
        <button className="flex space-x-2 hover:bg-slate-100 p-2 rounded-lg">
          <ThumbsUp />
          <span>Like</span>
        </button>

        {!isEdit ? (
          <button
            className="flex space-x-2 hover:bg-slate-100 p-2 rounded-lg"
            onClick={() => setEdit(true)}
          >
            <FileEdit />
            <span>Edit</span>
          </button>
        ) : (
          <button
            className="flex space-x-2 hover:bg-slate-100 p-2 rounded-lg"
            onClick={handleUpdate}
          >
            <FileEdit />
            <span>Update</span>
          </button>
        )}

        <button
          className="flex space-x-2 hover:bg-slate-100 p-2 rounded-lg"
          onClick={handleDelete}
        >
          <Trash2 />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ListPost;
