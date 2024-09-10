import Navbar from "./Navbar"
import wingLeft from '../assets/images/svg/text-wing-left.svg'
import wingRight from '../assets/images/svg/text-wing-right.svg'

const Header = () => {
    return (
        <div className="xsm:bg-header_bg bg-hero_sm_bg bg-full bg-center bg-no-repeat xxl-prop">
            <Navbar />
            <div className="lg:pt-[288px] md:pt-[200px] pt-[187px] lg:pb-[187px] md:pb-[150px] pb-[100px] container">
                <h1 className="font-bold lg:text-5xl sm:text-4xl text-3xl lg:leading-lg text-white text-center"><span className="text-yellow">THE FINEST ASHRAMA <br className="sm:hidden block" /></span> On The Ganga</h1>
                <div className="flex items-center justify-center gap-3">
                    <div><img src={wingLeft} alt="wing on the left side of text" className="max-sm:w-[78px]" /></div>
                    <h1 className="font-semibold lg:text-5xl sm:text-4xl leading-md text-3xl lg:leading-xl sm:leading-lg text-white text-center">PRESENTS</h1>
                    <div><img src={wingRight} alt="wing on the right side of text" className="max-sm:w-[78px]" /></div>
                </div>
                <h1 className="font-bold lg:text-5xl sm:text-4xl text-3xl lg:leading-lg text-white text-center">The Finest <br className="sm:hidden block" /> <span className="text-yellow">YOGA SADHANA</span></h1>
                <p className="font-medium text-base leading-base max-w-[799px] mx-auto text-white text-center mt-4 md:mb-11 mb-9">Welcome to the beginning of the end of your search. Meditation - taking the attention to the Source of attention is the simplest and most direct way to increase consciousness. To do just that, Trimurti Ashram in Rishikesh offers the finest spiritual tool available anywhere on Earth.</p>
                <div className="flex items-center justify-center">
                    <button className="py-[15px] h-[56px] px-9 font-Marko bg-btn_bg bg-full bg-no-repeat bg-center">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header