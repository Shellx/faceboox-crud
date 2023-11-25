import Image from "next/image";
import profile from "@/assets/aziz.jpeg";
import { useAuthContext } from "@/components/provider/AuthProvider";

export const Profile = () => {
  const { user } = useAuthContext("");

  return (
    <div className="flex space-x-3 items-center">
      <Image src={profile} className="rounded-full" width={60} alt="profile" />
      <div className="space-y-1">
        <h1 className="font-bold capitalize">{user}</h1>
        <select
          name=""
          id=""
          className="bg-slate-200 p-1 rounded-md text-sm"
          defaultValue={"public"}
        >
          <option value="public">Public</option>
          <option value="private">private</option>
        </select>
      </div>
    </div>
  );
};
