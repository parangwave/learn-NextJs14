"use client";

// auto install ts
// must exist (nextjs find this file first)

import { useEffect, useState } from "react";

// server component (unless use client)

// route groups: (folder name)
// invisible for fwk, not affect url

// // not in client
// export const metadata = {
//   title: "Home",
// };

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const resp = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await resp.json();
    setMovies(json);
  };

  useEffect(() => {
    getMovies();
    setIsLoading(false);
  }, []);

  return <div>{isLoading ? "loading..." : JSON.stringify(movies)}</div>;
}
