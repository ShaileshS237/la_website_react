import { Link } from "react-router-dom";
import logo from "../../assets/la_logo.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="py-4 flex flex-col lg:flex-row justify-between items-center">
                <div className="mb-4 lg:mb-0 relative flex justify-center md:justify-start">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-28 sm:w-40 mb-2 mr-2"
                        loading="lazy"
                    />
                    <span className="absolute -top-1 -right-7 text-black text-xs px-1.5 py-0.5 rounded-md font-light ">
                        Beta
                    </span>
                </div>
                <div className="flex gap-4 lg:gap-5 items-center">
                    <a
                        href="https://www.instagram.com/love.akot/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={instagram}
                            alt="इंस्टाग्राम"
                            className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/loveAkot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={facebook}
                            alt="फेसबुक"
                            className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]"
                        />
                    </a>
                </div>
            </div>
            <hr className="w-full mx-auto border-gray-200" />
            <div className="text-sm sm:text-base text-gray-600 py-4 flex flex-col lg:flex-row justify-between items-center">
                <div>
                    <p>Love Akot @2025. </p>
                </div>
                <div className="flex gap-4 lg:gap-9 mt-4 lg:mt-0">
                    <Link to={"/terms-and-conditions"}>
                        <p>Terms and Conditions</p>
                    </Link>
                    <Link to={"/privacy-policy"}>
                        <p>Privacy Policy</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
