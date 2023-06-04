import { NavLink } from "react-router-dom"

const BottomMenu = () =>{

    const links = [
        {name:'user', icon:'/icons/user.png', activeico: '/icons/buser.png', href:'/test'}
    ]
    const link = [
        {name:'user', icon:'/icons/discord.png', href:'https://discord.gg/c3ppTTtD'},
        {name:'user', icon:'/icons/instagram.png', href:'https://discord.gg/c3ppTTtD'},
        {name:'user', icon:'/icons/telegram.png', href:'https://discord.gg/c3ppTTtD'},
        {name:'user', icon:'/icons/youtube.png', href:'https://www.youtube.com/@ForexDini'},
    ]

    return(
        <div className="md:hidden static ">
            <div className="w-full bottom-0 fixed bg-white border-b-2 border-gray-700 shadow shadow-gray-700">
                <div>
                        <ul className="flex text-center w-full justify-between p-3 px-6">
                            <div className="flex text-center w-4/5 justify-between ">
                                {link.map((item, id)=>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        <img src={item.icon} alt="discord" />
                                    </a>
                                )}
                            </div>
                            {links.map((item, id) =>
                               <div >
                                <NavLink to={item.href}>
                                    {({isActive}) => isActive ? (<img src={item.icon} alt={item.name} />) : (<img src={item.activeico} alt={item.name} />)}
                                </NavLink>
                               </div>
                            )}
                        </ul>
                        
                    </div>
            </div>
        </div>
    )
}

export default BottomMenu