// not in client
export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // loading state moved, disappeared X
  await new Promise((resolve) => setTimeout(resolve, 10000)); // trick to slow down

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

// streaming -> nextJs는 우리의 페이지를 작은 html부분으로 나눠서 준비된 html부분을 브라우저에게 줄 수 있음
// 브라우저에게 백엔드에서 통신이 아직 마무리 되지 않아 기다려야 한다고 알려줌
// fetch가 완료될 때 까지 브라우저에게 기다려라고 함 -> loading content
// fetch가 끝나고 통신 완료, await가 끝남 -> 브라우저에게 마지막 html의 부분을 줌
// 프레임워크가 loading component를 await된 component로 바꿔주는 것

// Be에서 data를 fetching하며 useState와 같은 hooks 사용 필요 X
// 즉각적 loading state & loading UI content
// 즉, 통신이 마무리 될 때 프레임워크에 의해 실제 결과값으로 자동 교체

// <Loading />
// const html = await HomePage()
// isLoaing ? <Loading />
