export default function Footer2() {
    return (
        <div className=" bg-white  relative bottom-0">
            <div className="grid  grid-cols-2 px-12">
                <div>
                    <img src="./download.jpg" alt="logo" className="rounded-full" />
                </div>
                <div className="flex justify-between  pr-8 pt-12">
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold font-serif text-lg">Resource</p>
                        <div className="flex flex-col space-y-1 font-semibold font-serif text-[#656464] pl-2">
                            <p className="cursor-pointer hover:text-[#100e0e] transition-all duration-200">Home</p>
                            <p className="cursor-pointer hover:text-[#100e0e] transition-all duration-200">About</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold font-serif text-lg">Follow us</p>
                        <div  className="flex flex-col space-y-1 font-semibold font-serif text-[#656464] pl-2">
                            <p className="cursor-pointer hover:text-[#100e0e] transition-all duration-200">Github</p>
                            <p className="cursor-pointer hover:text-[#100e0e] transition-all duration-200">Discord</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p className="font-semibold font-serif text-lg">Legal</p>
                        <div   className="flex flex-col space-y-1 font-semibold font-serif text-[#656464] pl-2">
                            <p className="cursor-pointer hover:text-[#100e0e] transition-all duration-200">Privacy Policy</p>
                            <p className="cursor-pointer hover:text-[#100e0e] transition-all duration-200">Terms & conditions</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr  className="text-[gray] border-t-2 w-[90%] mx-auto"/>
            <div className="grid grid-cols-3  px-16 py-10">
                <div className="col-start-1 col-end-3 text-md text-[#555252] font-semibold pl-10">Ⓒ2025mahboobalam.All rights reserved.</div>
                <div className=" flex  justify-evenly ">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-discord"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-github"></i>
                    <i class="fa-brands fa-square-instagram"></i>

                </div>
            </div>
            <hr  className="text-[gray] border-t-2 w-[90%] mx-auto pb-4"/>

        </div>
    )
}