// "use client" !== only render in client
"use client"; // SSR, then hydrate in FE
// all comps and pages first render in BE

import Link from "next/link";
import { usePathname } from "next/navigation";

// css module을 js인 것 처럼 import 해야 함
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  // path name; url a user stay
  const path = usePathname(); // only works in client component -> "use client"
  // console.log(path);

  // hydration = SSR을 통해 만들어진 html이 인터랙티브한 react 컴포넌트로 변환되는 과정
  // /about-us -> <button>0</button> -> user get html -> <button onClick={}></button>
  // -> init(html) into interactive react component w/ event-listener

  return (
    // class="navigation_nav___{random}" -> class 충돌 X
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🏠" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>{" "}
          {path === "/about-us" ? "📜" : ""}
        </li>
      </ul>
    </nav>
  );
}
