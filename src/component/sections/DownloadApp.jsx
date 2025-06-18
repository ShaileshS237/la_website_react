import { Download } from "lucide-react";
import footer from "../../assets/footerpng.png";

const DownloadApp = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="relative flex flex-col md:flex-row h-[400px] my-16 bg-[#6f40ff] rounded-3xl overflow-hidden">
                <div className="w-full md:w-3/4 flex pl-10 md:pl-20 items-start justify-center flex-col relative top-5 md:top-0 z-20">
                    <h1 className="text-xl md:text-4xl leading-snug md:mb-5 text-white font-bold">
                        Your city, Your Community <br />
                        Everything in one app! <br /><br /> Download Love Akot today!
                    </h1>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex gap-2 bg-[#02123f] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all duration-300">
                            <Download />Download Now
                        </button>
                    </a>
                </div>
                <div className="relative w-full left-[0%] bottom-[5px] md:bottom-[30%] rotate-1">
                    <img src={footer} alt="footer" className="w-[100%] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;
