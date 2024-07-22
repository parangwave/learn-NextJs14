// path: /about-us
// ⭐ 직접적인 page.tsx 파일이 없는 폴더는 실제 페이지가 없다

import Avatar from "./components/avatar";

export default function AboutUS() {
  return (
    <h1>
      About Us <Avatar />
    </h1>
  );
}
