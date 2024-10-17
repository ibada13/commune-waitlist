'use client';
import NavBar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="h-sreen v-screen p-10 flex flex-col items-center gap-y-2  " >
      <NavBar />
      <Body />
      <Footer />

    </div>
    );
}
