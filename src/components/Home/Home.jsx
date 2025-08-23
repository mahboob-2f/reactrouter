import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className=" flex justify-center items-center flex-col">
            hello ,this is home element
            <nav>
                <Link to="/home/body">body</Link> {" | "}
                <Link to="/home/image">image</Link>
            </nav>
            
            
 
            <Outlet></Outlet>

        </div>
    )
}