import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar flex justify-between items-center p-[3rem] bg-transparent w-[auto]">
                <div className="logoDiv">
                        <h1 className="logo text-[25px] text-[#2a68ff] ">
                                <strong>Career</strong>Opportunity</h1>
                </div>

                <div className="menu flex gap-8">
                        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Jobs</li>
                        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Companies</li>
                        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">About</li>
                        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Contact</li>
                        <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]">Login</li>
                </div>
        </div>
    )
}

export default NavBar
