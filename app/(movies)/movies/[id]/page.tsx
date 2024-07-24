// dynamic routes = [folder name]

export default function MovieDetail({
  // searchParams 검색 페이지 구축할 때 유용
  params: { id }, // var in url
}: {
  params: { id: string };
}) {
  return <h1>Movie {id}</h1>;
}
