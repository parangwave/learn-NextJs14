// "use client" !== only render in client
"use client"; // SSR, then hydrate in FE
// all comps and pages first render in BE

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  // path name; url a user stay
  const path = usePathname(); // only works in client component -> "use client"
  // console.log(path);

  // hydration = SSR을 통해 만들어진 html이 인터랙티브한 react 컴포넌트로 변환되는 과정
  // /about-us -> <button>0</button> -> user get html -> <button onClick={}></button>
  // -> init(html) into interactive react component w/ event-listener
  const [count, setCount] = useState(0);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🏠" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>{" "}
          {path === "/about-us" ? "📜" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 12)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
