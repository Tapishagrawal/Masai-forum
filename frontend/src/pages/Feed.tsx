import Filter from "../components/Filter";
import { Navbar } from "../components/Navbar";
import Posts from "../components/Posts";

export default function Feed() {
  return (
    <div className="bg-[#1c252c] min-h-screen py-5">
        <Navbar/>
        <div className="w-[95%] m-auto my-3 flex gap-5">
          <Filter/>
          <Posts/>
        </div>
    </div>
  )
}

