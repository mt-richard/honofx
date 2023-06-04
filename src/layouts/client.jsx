import { Outlet } from "react-router-dom";
import Header from "../components/client/header";
import Sidebar from "../components/client/sidebar";
import { useState } from "react";

const Client = () =>{
    const [open, setOpen] = useState(true)
    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <div>
            <Header onClick={handleOpen}/>
            <div className="md:flex py-3 px-2">
                <div className="md:w-1/5 w-full md:pt-7">
                     <Sidebar open={open} />
                </div>
                <div className="bg-gray-200 border rounded md:w-4/5 px-5 py-5 ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Client