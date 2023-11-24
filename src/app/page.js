import CreatePost from "@/components/post/CreatePost";
import ListPost from "@/components/post/ListPost";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <CreatePost />
      <ListPost />
    </div>
  );
}
