import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import Feed from "../pages/Feed"

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/feed" element={<Feed/>}/>
            </Routes>
        </div>
    )
}
