import Image from "next/image";
import React from "react";
import profile from "@/assets/aziz.jpeg";
import { iconPosting } from "./faker/iconButton";

const CreatePost = () => {
  return (
    <div className="card-global ">
      <div className=" gap-4 space-y-3">
        <div className="flex space-x-3 items-center">
          <Image src={profile} className="rounded-full" width={60} />
          <div className="space-y-1">
            <h1 className="font-bold">Aziz Muslim</h1>
            <select
              name=""
              id=""
              className="bg-slate-200 p-1 rounded-md text-sm"
            >
              <option value="public">Public</option>
              <option value="private">private</option>
            </select>
          </div>
        </div>
        <div className="w-full  rounded-full">
          <textarea
            placeholder="Whats on your mind, Aziz?"
            className="border shadow-lg w-full py-2 px-4 h-40 rounded-md resize-none"
          />
        </div>
      </div>
      <hr className="my-4" />

      <div className=" space-y-10 ">
        <div className="lg:flex lg:mt-7  lg:justify-between space-y-3 lg:items-center lg:border lg:rounded-lg lg:px-2 lg:py-4  ">
          <div>
            <h1 className="">Tambah ke Postingan Anda</h1>
          </div>
          <div className="lg:flex lg:space-x-3">
            {iconPosting.map((item, index) => (
              <div className="flex space-x-2 items-center " key={index}>
                {item?.icon}
                <h1 className="lg:hidden">{item.name}</h1>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-sky-500 text-base  w-full text-slate-200  py-3 rounded-md font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
