import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Navbar = () => {
    const { userData } = useSelector((store:RootState) => store.AuthReducer)
    return (
        <div className="bg-[#242d35] w-[95%] m-auto rounded p-3 py-4 flex items-center justify-around shadow-2xl">
            <div className="flex items-center gap-5">
                <img src="https://placehold.co/40x40" alt="Logo" className="rounded-lg" />
                <h1 className="text-3xl font-bold text-[#ff5700]">Masai Forum</h1>
            </div>
            <div className="flex items-center justify-between bg-[#2a353e] p-2 px-4 w-[40%] rounded-md">
                <input type="text" placeholder="Type here to search..." className="text-xs bg-transparent outline-none" />
                <span className="text-2xl text-[#878ead]"><CiSearch /></span>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] overflow-hidden rounded-lg border-2 border-orange-400 p-[1px]">
                    <img src={userData.avatar} alt="User Profile Picture" className="h-full object-cover object-center rounded-lg" />
                </div>
                <h3 className=" font-semibold text-white">{userData?.username[0].toUpperCase() + userData?.username.slice(1)}</h3>
                <span className="text-white"><FaCaretDown /></span>
            </div>
        </div>
    )
}
