import { NavLink, Outlet  } from "react-router-dom"


export default function Ghost() {
    return (
        <>
            <div>
                this is ghost component
            </div>
        
            <NavLink className={({isActive})=>
                isActive ? "text-md font-bold text-[blue] ":"none"
            } to="/ghost"> data component </NavLink>
        
            
             
            <div>
                end of ghost component
            </div>
        </>


    )
}