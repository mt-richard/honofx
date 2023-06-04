import React from "react";

const Header = () =>{
    return(
        <div>
            <div className="md:flex justify-between px-4 border-b">
                <div className="">
                    <h3 className="text-4xl font-extrabold capitalize">honofx academy</h3>
                    <span className="text-primary font-semibold mx-16 leading-8">where trading is simple</span>
                </div>
                <div className="flex gap-6 py-4">
                    <div className="cursor-pointer hover:bg-gray-300 hover:rounded-full h-[40px] ">
                        <img src="/icons/user.png" alt="icons" />
                    </div>
                    <div className="cursor-pointer hover:bg-gray-300 hover:rounded-full w-[40px] h-[40px] ">
                        <img src="/icons/logout.png" alt="icons" className="w-[30px] mt-1 ml-2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header