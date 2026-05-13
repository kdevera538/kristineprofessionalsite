import { Header } from "./Header";
import { Footer } from "./Footer";
import { FairyDust } from "./FairyDust";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <FairyDust />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
