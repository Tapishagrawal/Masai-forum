import { IoCodeSlashSharp } from "react-icons/io5";
import { RiGitMergeFill } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { FaRegPlayCircle } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";

export default function Filter() {
    return (
        <div className="bg-[#242d35] w-[18%] h-[300px] rounded-2xl p-5 text-white">
            <h1 className="mb-5">Filter Post</h1>
            <div>
                <div className="flex items-center gap-3">
                    <span className="bg-[#5c4f40] p-2 text-[#f3a347] text-xl rounded-lg"><IoCodeSlashSharp/></span>
                    <div>
                        <p>#development</p>
                        <p className="text-[#98989c] text-sm">Trending</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-[#424f60] p-2 text-[#5595f1] text-xl rounded-lg"><RiGitMergeFill/></span>
                    <div>
                        <p>#design</p>
                        <p className="text-[#98989c] text-sm">Trending</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-[#594d3f] p-2 text-[#fb941a] text-xl rounded-lg"><HiOutlinePencil/></span>
                    <div>
                        <p>#innovation</p>
                        <p className="text-[#98989c] text-sm">Trending</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-[#24524d] p-2 text-[#00d6bf] text-xl rounded-lg"><FaRegPlayCircle/></span>
                    <div>
                        <p>#tutorial</p>
                        <p className="text-[#98989c] text-sm">Trending</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="bg-[#49475a] p-2 text-[#958df9] text-xl rounded-lg"><AiOutlineStock/></span>
                    <div>
                        <p>#business</p>
                        <p className="text-[#98989c] text-sm">Trending</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
