import { Link } from "react-router-dom"
import Topic from "./topic"

const Sidebar =() => {
    return(
        <div>
            <div className="px-3 py-1">
                <div className="flex gap-6 bg-white p-1 border rounded">
                    <img src="/icons/info.png" alt="" />
                    <div className="mt-1">
                        <h3 className="text-[20px]">Introduction</h3>
                    </div>
                </div>
            </div>
            
            <Topic disabled={true} number={'1'} label={'Market Structure'}  />
            <Topic disabled={true} number={'2'} label={'Order blocks'} />
            <Topic disabled={true} number={'3'} label={'Inefficient / Imbalance'} />
            <Topic disabled={true} number={'4'} label={'Liquidity'} />
            <Topic disabled={true} number={'5'} label={'Supply & Demand'} />
            <Topic disabled={true} number={'6'} label={'Locating your Zone correctly'} />
            <Topic disabled={true} number={'7'} label={'The price cycle'} />
            <Topic disabled={true} number={'8'} label={'Psychology'} />

            <div className="px-3 py-5">
                <div className="border-t border-gray-500">
                </div>
                <div className="text-center text-gray-700 p-2 pt-10">
                    <p className="">Do you have any question?</p>
                    <p className="pb-5">Join our Discord through the link below</p>
                    <Link to={'https://discord.gg/c3ppTTtD'} className="text-primary font-semibold">https://discord.gg/c3ppTTtD</Link>

                    <div className="flex text-center w-full justify-center pt-5 gap-5">
                        <img src="/icons/discord.png" alt="" />
                        <img src="/icons/instagram.png" alt="" />
                        <img src="/icons/telegram.png" alt="" />
                        <img src="/icons/youtube.png" alt="" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar