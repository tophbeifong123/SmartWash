import logo from "../logo-smartwash.png";
export default function Navbar() {
  return (
    <div className="navbar text-neutral-content bg-blue-900 border-b-4 border-white sticky top-0 z-50 ">
      <img
        src={logo.src}
        alt="Smart Wash Logo"
        className="w-16 h-16 rounded-full mr-2 border-4 border-blue-200"
      />
      <span className="text-2xl font-bold">Smart Wash</span>
    </div>
  );
}
