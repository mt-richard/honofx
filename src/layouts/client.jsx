import { Outlet } from "react-router-dom";
import Header from "../components/client/header";
import Sidebar from "../components/client/sidebar";

const Client = () =>{
    return(
        <div>
            <Header/>
            <div className="flex py-3">
                <div className="md:w-1/5 pt-7">
                    <Sidebar />
                </div>
                <div className="bg-gray-200 border rounded md:w-4/5 px-5 py-5 ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Client