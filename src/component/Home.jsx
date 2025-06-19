import Marquee from "react-fast-marquee";
import astrick from "../assets/astrick.png";

// Importing separated components
import NavBar from "./ui/NavBar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import FeaturesSection from "./sections/FeaturesSection";
import FAQ from "./sections/FAQ";
import DownloadApp from "./sections/DownloadApp";
import Footer from "./sections/Footer";

const marqueeElements = [
	{ text: "For The People", image: "./assets/astrick.png" },
	{ text: "By The People", image: "./assets/astrick.png" },
	{ text: "For The People", image: "./assets/astrick.png" },
	{ text: "By The People", image: "./assets/astrick.png" },
	{ text: "For The People", image: "./assets/astrick.png" },
	{ text: "By The People", image: "./assets/astrick.png" },
];

// Main Component
const Home = () => {
	return (
		<div className="App">
			<div
				id="home"
				className="h-[700px] md:h-screen py-5 relative bg-gradient-to-b to-[#a0aaff] from-transparent overflow-hidden"
			>
				<div className="fixed z-[100000] flex justify-center w-full">
					<NavBar />
				</div>
				<div className="mt-20 md:mt-16">
					<HeroSection />
				</div>
			</div>

			<div className="flex flex-col gap-5">
				<hr className="w-full mx-auto border-gray-400" />
				<Marquee className="marquee">
					{marqueeElements.map((element, index) => (
						<div key={index} className="flex gap-4 sm:gap-[10rem] mx-2 sm:mx-4">
							<img
								src={astrick}
								alt="Asterisk"
								className="h-[15px] w-[15px] sm:h-[20px] sm:w-[20px]"
							/>
							<h1 className="text-lg sm:text-2xl mr-4 sm:mr-[10rem]">
								{element.text}
							</h1>
						</div>
					))}
				</Marquee>
				<hr className="w-full mx-auto border-gray-400" />
			</div>
			<AboutSection />
			<FeaturesSection />
			<FAQ />
			<DownloadApp />
			<Footer />
			<div className="relative overflow-hidden flex justify-center md:h-[14.5rem]">
				<h1
					className="text-[3rem] md:text-[12.5rem] font-extrabold bg-gradient-to-t from-transparent to-gray-300 bg-clip-text text-transparent footer-text"
				>
					Love ❤️ Akot
				</h1>
			</div>
		</div>
	);
};

export default Home;
