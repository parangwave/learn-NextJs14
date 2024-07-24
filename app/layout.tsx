import { Metadata } from "next";
import Navigation from "../components/navigation";

// page head
// needs to export, must "Metadata"
// merge w/ children matadatas
// must be in page or layout
// must be in server component, not client
// cna't export from component
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* always render layout first! */}
        <Navigation />
        {/* pages = children props */}
        {children}
      </body>
    </html>
  );
}
