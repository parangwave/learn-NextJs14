// dynamic routes = [folder name]

import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const resp = await fetch(`${API_URL}/${id}`);
  return resp.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  // searchParams 검색 페이지 구축할 때 유용
  params: { id }, // var in url
}: {
  params: { id: string };
}) {
  console.log("===========");
  console.log("start fetching");

  // Promise.all: 동시에 movie, videos를 await = 병렬 처리(Parallel Requests, 순차적X)
  // 5 sec + API time
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  console.log("end fetching");

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}
