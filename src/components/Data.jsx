import { NavLink, Outlet } from "react-router-dom";
import Mahi from "./Mahi";

export default function Data(){
    return(
        <div>
            data component 
            <nav>
                <NavLink to="/ghost/first" className={({isActive})=> isActive ? "text-2xl text-blue-700 font-bold":"none"}>first</NavLink>
                <NavLink to="/ghost/second" className={({isActive}) => isActive ? "text-xl text-[blue] font-bold font-serif" :"none"}>second</NavLink>
                <NavLink to="/ghost/third"  className={({isActive}) => isActive ? "text-xl text-[blue] font-bold font-serif" :"none"}>third</NavLink>
            </nav>

            <Outlet></Outlet>
            <Mahi></Mahi>
        </div>
    )
}