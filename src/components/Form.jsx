import { Link, Outlet } from "react-router-dom";

export default function Form() {

    function handleSubmit(e){
        e.preventDefault();
        console.log("event prevented");
        
    }

    return (
        <>
            <div className="">
                <div className="text-4xl text-center bg-blue-400 text-white font-bold font-serif">
                    form page
                </div>
                <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center ">
                    <div>
                       <label htmlFor="">enter name: </label>
                        <input type="text" placeholder="enter name " /> 
                    </div>
                    <div>
                        <label htmlFor="">enter age: </label>
                        <input type="number" placeholder="enter age " />
                    </div>   

                    <div>
                        <button>submit</button>
                    </div>                 
                </form>
            </div>

        </>
    )
}