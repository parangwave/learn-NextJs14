// path: /about-us
import Navigation from "../../components/navigation";
// ⭐ 직접적인 page.tsx 파일이 없는 폴더는 실제 페이지가 없다

export default function AboutUs() {
  return (
    <div>
      <Navigation />
      <h1>About us!</h1>
    </div>
  );
}
