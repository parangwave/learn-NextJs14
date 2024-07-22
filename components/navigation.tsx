"use client"; // but SSR in NextJs
// all comps and pages first render in BE

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  // path name; url a user stay
  const path = usePathname(); // only works in client component -> "use client"
  console.log(path);

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
      </ul>
    </nav>
  );
}
