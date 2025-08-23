import { NavLink, Outlet } from "react-router-dom";

export default function Body(){
    return(
        <div>
            this is body of home page
            <NavLink to="/home/body/inner" className={({isActive})=> isActive ?"text-lg text-[blue] font-bold ":"none"}> inner body</NavLink>
            <Outlet></Outlet>
        </div>
    )
}