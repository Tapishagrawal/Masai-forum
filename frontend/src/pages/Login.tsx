import { Link, Navigate, useNavigate} from "react-router-dom";
import loginPoster from "../assets/login-poster.png"
import { FcGoogle } from "react-icons/fc";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlePostLogin } from "../redux/AuthReducer/action";
import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
    const [eye, setEye] = useState(false);
    const [inputData, setInputData] = useState({ email: "", password: "" });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useSelector(store=>store.AuthReducer)

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target
        setInputData(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(handlePostLogin(inputData, toast, navigate))
        console.log(inputData)
    }

    return (
        <div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <div className="flex gap-5">
                <div className="w-[70%] h-screen">
                    <img src={loginPoster} alt="Poster" className="h-full w-full object-cover object-center" />
                </div>
                <div className=" w-[30%] p-10">
                    <h1 className="text-center font-semibold mb-10 text-2xl">MASAI FORUM</h1>
                    <h3 className="font-semibold text-xl mb-5">Nice to see you again</h3>
                    <form onSubmit={onSubmit} className="flex flex-col gap-5 border-b pb-10 mb-10">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs ml-3">Login</label>
                            <input onChange={handleChange} type="text" name="email" value={inputData.email} placeholder="Email or phone number" className="bg-[#f2f2ef] rounded px-3 py-3 outline-none" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs ml-3">Password</label>
                            <div className="flex items-center bg-[#f2f2ef] rounded px-3 py-3">
                                <input onChange={handleChange} type={eye ? "text" : "password"} name="password" value={inputData.password} placeholder="Enter password" className="bg-transparent w-full outline-none" />
                                {
                                    eye ?
                                        <span onClick={() => setEye(false)} className="cursor-pointer"><MdRemoveRedEye /></span>
                                        :
                                        <span onClick={() => setEye(true)} className="cursor-pointer"><IoEyeOffSharp /></span>
                                }
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="Sign in" className="bg-[#007aff] text-white w-full py-2 rounded font-medium text-sm" />
                        </div>
                    </form>
                    <div className="flex items-center justify-center gap-2 bg-[#333332] py-2 rounded mb-5">
                        <span className="text-2xl"><FcGoogle /></span>
                        <button className="text-white text-sm">Or sign in with Google</button>
                    </div>
                    <p className="text-center text-sm">Dont have an account? <Link to="/" className="text-[#007aff]">Sign up now</Link></p>
                </div>
            </div>
        </div>
    )
}
