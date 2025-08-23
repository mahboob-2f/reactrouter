import {NavLink} from 'react-router-dom'

export default function Header1(){
    return(
        <div className='flex  items-center justify-between px-4 w-fu  py-2 bg-[#736e6e56] fixed'>
            <div>
                <img src="./download.jpg" alt="logo"  width="50" className='rounded-full'/>
            </div>
            <div>
                <nav  className='   flex  space-x-20  text-lg font-semibold font-serif '>
                    <NavLink to="/" className={({isActive})=> isActive ? "text-[17px] text-[blue] font-semibold font-serif ":"none"}>home</NavLink>
                    <NavLink to="/about" className={({isActive})=> isActive ? "text-[17px] text-[blue] font-semibold font-serif ":"none"}>about</NavLink>
                    <NavLink to="/setting" className={({isActive})=> isActive ? "text-[17px] text-[blue] font-semibold font-serif ":"none"}>setting</NavLink>
                    <NavLink to="/profile" className={({isActive})=> isActive ? "text-[17px] text-[blue] font-semibold font-serif ":"none"}>profile</NavLink>
                </nav>
            </div>
            <div>
                <img src="./profile.png" alt="profile logo" width="30" className='rounded-full'/>
            </div>
        </div>
    )
}