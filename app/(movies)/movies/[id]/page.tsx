// dynamic routes = [folder name]
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type IParams = {
  params: { id: string };
};

// 처음 fetch했을 떄에는 fetch가 한 번 실행
// 영화 정보를 얻기 위해 두번째로 fetch할 때에는 캐시된 응답
// metadata obj 및 generateMetadata() -> server component
// in 동일한 경로, metadata obj & generateMetadata() 모두 export 할 수 X
export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({
  // searchParams 검색 페이지 구축할 때 유용
  params: { id }, // var in url
}: IParams) {
  // {
  //   params: { id: string };
  // }
  console.log("===========");
  console.log("start fetching");

  // Promise.all: 동시에 movie, videos를 await = 병렬 처리(Parallel Requests, 순차적X)
  // 5 sec + API time
  // 문제는 둘 다 끝나야 함 -> streaming을 사용해서 fetch 함수를 분리하는 법
  // 많은 데이터 소스에서 fetch해야 할 때
  // 가장 편한 방법 = page 파일에서 데이터 fetch

  return (
    <div>
      {/* page는 즉각적으로 loading */}
      {/* Suspense = 데이터가 fetch하기 위해 자신 안 component를 await */}
      {/* fetching 중엔 fallback 보여줌 */}
      {/* fallback = component가 await되는 동안 표시할 메세지를 render할 수 있게 해줌 */}
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
