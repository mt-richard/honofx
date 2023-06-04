import React from "react";
import BottomMenu from "./bottommenu";

const Header = ({onClick}) =>{
    return(
        <div>
            <div className="flex justify-between px-4 border-b">
                <button onClick={onClick} className="md:hidden">
                    <div className="py-3 md:hidden">
                        <img src="/icons/menu.png" alt="" />
                    </div>
                </button>
                
                <div className="py-3">
                    <h3 className="md:text-3xl text-2xl text-center font-extrabold uppercase">honofx academy</h3>
                    <span className="text-primary font-semibold mx-16 md:leading-8">where trading is simple</span>
                </div>
                <div className="flex gap-6 md:py-4 py-4">
                    <div className="md:block hidden cursor-pointer hover:bg-gray-300 hover:rounded-full h-[40px] ">
                        <img src="/icons/user.png" alt="icons" />
                    </div>
                    <div className="cursor-pointer hover:bg-gray-300 hover:rounded-full w-[40px] h-[40px] ">
                        <img src="/icons/logout.png" alt="icons" className="w-[30px] md:mt-1 ml-2" />
                    </div>
                </div>
            </div>

            <BottomMenu />
        </div>
    )
}

export default Header