import { Outlet } from "react-router-dom";
import Header from "../components/client/header";

const Client = () =>{
    return(
        <div>
            <Header/>
            <div className="flex">
                <div>
                    Side Bar
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Client