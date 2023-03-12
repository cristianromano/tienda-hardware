import { useEffect, useState } from "react";

import React from "react";

export const ConsumiendoApis = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = fetch("https://jsonplaceholder.typicode.com/posts");

    getData
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => "catch: " + err);
  }, []);

  console.log(posts);
  return <div>Apis</div>;
};
