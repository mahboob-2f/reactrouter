import Header1 from "./Header1"
import Footer2 from "./Footer2"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <div className="w-full   relative top-0 ">
            <Header1/>
            <main className="bg-white">
                <Outlet></Outlet>
            </main>
            <Footer2 /> 
        </div>
    )
}