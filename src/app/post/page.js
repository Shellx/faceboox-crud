import CreatePost from "@/components/post/CreatePost";
import ListPost from "@/components/post/ListPost";
import React from "react";

const fetchPost = async () => {
  try {
    const response = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(additionalData='4212ganteng')",
      {
        cache: "no-store",
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Page = async () => {
  const { items } = await fetchPost();
  return (
    <>
      <CreatePost />

      {items.map(({ content, id, user }) => (
        <ListPost
          items={items}
          content={content}
          id={id}
          key={id}
          user={user}
        />
      ))}
    </>
  );
};

export default Page;
