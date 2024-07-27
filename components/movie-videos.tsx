import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("something broke..."); // 권장 X, 전체 app이 먹통이 되어선 안 됨
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
