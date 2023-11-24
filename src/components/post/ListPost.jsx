import profile from "@/assets/aziz.jpeg";
import Image from "next/image";
import { iconButton } from "./faker/iconButton";

const ListPost = () => {
  return (
    <div className="card-global space-y-4">
      <div className="flex space-x-3 items-center">
        <Image src={profile} className="rounded-full" width={60} />
        <div className="">
          <h1 className="font-bold">Aziz Muslim</h1>
          <input type="text" value={"Sponsored"} className="text-slate-400" />
        </div>
      </div>

      <div className="border border-slate-100 px-3 py-1 min-h-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea
        cupiditate at, cumque unde aut?
      </div>

      <div className="flex justify-between ">
        {iconButton.map((item, index) => (
          <div className="flex space-x-2" key={index}>
            {item?.icon}
            <h1>{item?.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPost;
