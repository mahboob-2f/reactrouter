import {Link, Outlet} from 'react-router-dom';

export default function Header(){
    return (
        <div>
            hello ,this is Header element <br />
            <div className="text-[blue]">
                <Link to="/header/form">click to show form</Link>
            </div>
             
            <Outlet></Outlet>
             
        </div>
    )
}