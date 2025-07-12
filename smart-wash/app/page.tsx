import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center  bg-sky-200 h-screen p-10">
        <div className="bg-white w-48 h-36"></div>
      </div>
      <Footer />
    </div>
  );
}
