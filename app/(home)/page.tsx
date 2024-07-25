// not in client
export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // loading state moved, disappeared X
  await new Promise((resolve) => setTimeout(resolve, 5000)); // trick to slow down

  // 첫번째 요청으로 메모리에서 받은 fetch된 데이터만 받음
  // fetch된 URL을 캐싱해줌 b/c NextJS === fwk
  return fetch(URL).then((response) => response.json());
  // const resp = await fetch(URL);
  // const json = await resp.json();
  // return json;
}

// 어떤 일이 발생하길 기다리려고 await를 사용할 때, 부모 함수에 async가 무조건 있어야함
export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
