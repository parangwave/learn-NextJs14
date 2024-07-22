// auto install ts
// must exist (nextjs find this file first)

// server component (unless use client)

import Navigation from "../components/Navigation";

export default function Page() {
  return (
    <div>
      <Navigation />
      <h1>Hello NextJS!</h1>
    </div>
  );
}
