import React from 'react';
import Navbar from "./Navbar";
import wingLeft from '../assets/images/svg/text-wing-left.svg';
import wingRight from '../assets/images/svg/text-wing-right.svg';
import images from '../assets/images/png/orange-color-with-flowers.png'
import justTemple from '../assets/images/png/just-temple-img.png'
import justTempleSm from '../assets/images/png/just-temple-sm-img.png'
import leftPillar from '../assets/images/png/left-side-pillar.png'
import rightPillar from '../assets/images/png/right-side-pillar.png'
import leftPillarSm from '../assets/images/png/sm-left-pillar.png'
import rightPillarSm from '../assets/images/png/sm-right-pillar.png'

const Header = () => {
    return (
        <div className="relative bg-red xxl-prop overflow-hidden">
            <div className='absolute top-0 left-0 w-full z-20 lg:h-[397px] md:h-[290px] h-[200px]'>
                <img src={images} alt="" className='w-full h-full object-cover 2xl:object-fill' />
            </div>
            <div className='absolute bottom-0 left-0 h-full z-10 lg:w-[75px] md:w-[40px] w-[20px]'>
                <img src={leftPillar} alt="" className='w-full h-full object-cover max-md:hidden' />
                <img src={leftPillarSm} alt="" className='w-full h-full object-cover md:hidden' />
            </div>
            <div className='absolute bottom-0 right-0 h-full z-10 lg:w-[75px] md:w-[40px] w-[20px]'>
                <img src={rightPillar} alt="" className='w-full h-full object-cover max-md:hidden' />
                <img src={rightPillarSm} alt="" className='w-full h-full object-cover md:hidden' />
            </div>
            <div className="relative">
                <Navbar />
                <div className='absolute left-1/2 -translate-x-1/2 lg:top-[100px] md:top-[99px] top-16 2xl:top-[150px] max-md:hidden w-full h-full xl:min-w-[1440px] sm:min-w-[1440px] xsm:min-w-[1536px]'>
                    <img src={justTemple} alt="just temple image" className='w-full h-full md:object-contain object-cover' />
                </div>
                <div className='absolute left-1/2 -translate-x-1/2 w-full h-full md:hidden min-w-[671px]'>
                    <img src={justTempleSm} alt="just temple image" className='w-full h-full object-fill' />
                </div>
                <div className="lg:pt-[288px] md:pt-[200px] pt-[187px] lg:pb-[187px] md:pb-[150px] pb-[100px] container px-4 relative z-40">
                    <h1 className="font-bold lg:text-5xl sm:text-4xl text-3xl lg:leading-lg text-white text-center">
                        <span className="text-yellow">THE FINEST ASHRAMA <br className="sm:hidden block" /></span> On The Ganga
                    </h1>
                    <div className="flex items-center justify-center gap-3">
                        <div><img src={wingLeft} alt="wing on the left side of text" className="max-sm:w-[78px]" /></div>
                        <h1 className="font-semibold lg:text-5xl sm:text-4xl leading-md text-3xl lg:leading-xl sm:leading-lg text-white text-center">PRESENTS</h1>
                        <div><img src={wingRight} alt="wing on the right side of text" className="max-sm:w-[78px]" /></div>
                    </div>
                    <h1 className="font-bold lg:text-5xl sm:text-4xl text-3xl lg:leading-lg text-white text-center">
                        The Finest <br className="sm:hidden block" /> <span className="text-yellow">YOGA SADHANA</span>
                    </h1>
                    <p className="font-medium text-base leading-base max-w-[799px] mx-auto text-white text-center mt-4 md:mb-11 mb-9">
                        Welcome to the beginning of the end of your search. Meditation - taking the attention to the Source of attention is the simplest and most direct way to increase consciousness. To do just that, Trimurti Ashram in Rishikesh offers the finest spiritual tool available anywhere on Earth.
                    </p>
                    <div className="flex items-center justify-center">
                        <button className="py-[15px] h-[56px] px-9 font-Marko bg-btn_bg bg-full bg-no-repeat bg-center hover:text-white transition">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;