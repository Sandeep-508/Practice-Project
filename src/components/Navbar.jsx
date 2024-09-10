import { act, useState } from 'react'
import CenterGod from '../assets/images/png/navbar-center-god-image.png'
import { NAVBAR_DATA } from '../utils/helper'
const Navbar = () => {
    const [active, setActive] = useState(false)
    if (active) {
        let body = document.body;
        body.style.overflow = "hidden";
    } else {
        let body = document.body;
        body.style.overflow = "auto";
    }
    return (
        <div>
            <div className="max-w-[1180px] container lg:pt-[43px] pt-5 relative z-50">
                <div className="xsm:bg-navbar_bg bg-navbar_sm_bg bg-full relative bg-no-repeat bg-center py-[14px] lg:px-10 md:px-8 px-3 flex items-center justify-between">
                    <div className={`flex items-center gap-9 transition max-lg:flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-white max-lg:flex max-lg:items-center max-lg:justify-center ${active ? "max-lg:left-0" : "max-lg:-left-[100%]"}`}>
                        <a href="#" className="text-base text-charcol hover:opacity-70 transition font-medium" onClick={() => setActive(false)}>Home</a>
                        <a href="#" className="text-base text-charcol hover:opacity-70 transition font-medium" onClick={() => setActive(false)}>Yoga Program</a>
                        <a href="#" className="text-base text-charcol hover:opacity-70 transition font-medium" onClick={() => setActive(false)}>Contact Us</a>
                    </div>
                    <div className='size-6 bg-red rounded-full flex items-center justify-center relative z-10 lg:hidden' onClick={() => setActive(!active)}>
                        <div className="w-3 h-[10px] flex flex-col items-start justify-between">
                            <span className='w-3 h-[1.5px] bg-white rounded-sm'></span>
                            <span className='w-2 h-[1.5px] bg-white rounded-sm'></span>
                            <span className='w-3 h-[1.5px] bg-white rounded-sm'></span>
                        </div>
                    </div>
                    <div className="absolute lg:w-[100px] lg:h-[126px] w-[60px] h-auto lg:-top-[43px] -top-5 left-1/2 -translate-x-1/2">
                        <img src={CenterGod} alt="god image with some text" className='w-full h-full' />
                    </div>
                    <div className='flex items-center gap-2'>
                        {NAVBAR_DATA.map((obj, index) =>
                            <a href={obj.url} key={index} target='_blank' className='lg:px-2 lg:size-8 size-6 py-1 px-1.5 lg:py-[9px] bg-red rounded-full'>
                                <img src={obj.images} alt="social media links" className='w-full h-full' />
                            </a>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar