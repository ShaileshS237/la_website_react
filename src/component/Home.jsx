import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Minus, Plus, X } from "lucide-react";
import logo from "../assets/la_logo.png";
import bgImage from "../assets/bg-2.png";
import "../App.css";
import Marquee from "react-fast-marquee";
import astrick from "../assets/astrick.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import footer from "../assets/footerpng.png";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

const NAV_ITEMS = [
	{ id: "home", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "features", label: "Features" },
	{ id: "contact", label: "Contact" },
];

const elements = [
	{
		text: "Love Akot Market",
		description:
			"Get complete information about the city's marketplaces. Locate grocery stores, clothing shops, electronics outlets, and various other stores along with their timings and offers.",
		image: require("../assets/features/7.png"),
	},
	{
		text: "Love Akot Jivandata",
		description:
			"Important details on blood donation and healthcare services. Find out where blood is needed, which hospitals have blood banks, and access emergency health services.",
		image: require("../assets/features/5.png"),
	},
	{
		text: "Love Akot Times",
		description:
			"Read the latest local and national news here. Stay updated with your city's events, government decisions, and trending social, economic, and political news.",
		image: require("../assets/features/2.png"),
	},
	{
		text: "Love Akot Sahayata",
		description:
			"Emergency contacts for immediate help. Includes information for police, ambulance services, fire brigades, power outages, and other urgent services.",
		image: require("../assets/features/3.png"),
	},
	{
		text: "Love Akot Prices",
		description:
			"Get updated information on agricultural yields and market prices. Check current rates for produce, sale updates, and other key financial details for farmers and traders.",
		image: require("../assets/features/6.png"),
	},
	{
		text: "Love Akot Nagarisamsya",
		description:
			"Information on the city's civic amenities and services. Learn about water supply, waste management, tax payments, road repairs, and other civic updates.",
		image: require("../assets/features/4.png"),
	},
	{
		text: "Love Akot Gupshup",
		description:
			"A dedicated section for community discussions and forums. Connect with local residents on various topics, make new friends, and actively participate in your community.",
		image: require("../assets/features/1.png"),
	},
];

const marqueeElements = [
	{ text: "For the people", image: "./assets/astrick.png" },
	{ text: "By the people", image: "./assets/astrick.png" },
	{ text: "For the people", image: "./assets/astrick.png" },
	{ text: "By the people", image: "./assets/astrick.png" },
	{ text: "For the people", image: "./assets/astrick.png" },
	{ text: "By the people", image: "./assets/astrick.png" },
];

const faqs = [
	{
		question: "What is the Love Akot app?",
		answer:
			"Love Akot is a hyperlocal community-based app that provides various services and information related to your city.",
	},
	{
		question: "Which services does the Love Akot app offer?",
		answer:
			"This app offers local news, business details, events, job updates, and many other features.",
	},
	{
		question: "How do I download the Love Akot app?",
		answer:
			"You can download the app by searching for 'Love Akot' on the Google Play Store.",
	},
	{
		question: "How do I list my business on Love Akot?",
		answer:
			"Simply click on the 'Add Business' option within the app to register your business.",
	},
	{
		question: "Is the Love Akot app free?",
		answer:
			"Yes! The Love Akot app is free, although some premium features might be available in the future.",
	},
	{
		question: "How do I publish local advertisements on Love Akot?",
		answer: "Head to the advertisement section in the app and upload your ad.",
	},
	{
		question: "What kind of information can I find on Love Akot?",
		answer:
			"You can get important news updates, special offers, job alerts, and details on local events.",
	},
	{
		question: "How can I contact support for Love Akot?",
		answer:
			"Visit the 'Contact Us' section in the app to get in touch with our team.",
	},
];

// Components
const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScroll = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<nav className="text-black absolute z-50 w-[60%] flex justify-center">
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="container mx-auto bg-white shadow-sm px-2 sm:px-2 py-2 rounded-full flex justify-between items-center"
			>
				{/* Logo Section */}
				<div className="relative pl-5">
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

				{/* Desktop Nav Items */}
				<div className="hidden md:flex space-x-6">
					{NAV_ITEMS.map(({ id, label }) => (
						<motion.button
							key={id}
							onClick={() => handleScroll(id)}
							className="focus:outline-none"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							{label}
						</motion.button>
					))}
				</div>

				{/* Download Button Desktop */}
				<a
					href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
					target="_blank"
					rel="noopener noreferrer"
					className="hidden md:flex"
				>
					<motion.button
						className="flex gap-2 border-[1px] border-black px-6 py-3 rounded-full text-white text-lg font-bold bg-[#02123f] "

					>
						<Download /> <span >Download Now</span>
					</motion.button>
				</a>

				{/* Mobile Toggle Button */}
				<button
					className="md:hidden focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</motion.div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden bg-white rounded-2xl mt-2 mx-1 p-4 z-50 relative"
					>
						<ul className="space-y-4">
							{NAV_ITEMS.map(({ id, label }) => (
								<li key={id}>
									<motion.button
										onClick={() => handleScroll(id)}
										className="focus:outline-none w-full text-left"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.95 }}
									>
										{label}
									</motion.button>
								</li>
							))}
						</ul>
						<a
							href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
							target="_blank"
							rel="noopener noreferrer"
							className="block mt-4"
						>
							<motion.button
								className="flex gap-2 bg-[#02123f] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#6968ad] transition-all duration-300 w-full justify-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Download /> <span className="mt-1">Download Now!</span>
							</motion.button>
						</a>
					</motion.div>
				)}
			</AnimatePresence>

		</nav >

	);
};
const HeroSection = () => (
	<motion.section
		className="pt-6 sm:pt-12 text-center px-4"
		initial={{ opacity: 0, y: -50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.8, ease: "easeOut" }}
	>
		<motion.h1
			className="text-4xl sm:text-5xl md:text-7xl font-bold"
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<span className="text-[#02123f]">Connect, Buy, Sell & Stay Updated</span>
			<br /> All in One Place for Akot
		</motion.h1>
		<motion.p
			className="text-base sm:text-xl mt-5 px-2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
		>
			A hyperlocal community app made for Akot residents. <br /> From marketplace to rentals, events to alerts — everything you need, in one app.
		</motion.p>

		<motion.div
			className="flex justify-center my-6"
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
		>
			<a
				href="https://www.producthunt.com/products/love-akot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-love-akot"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=963777&theme=dark&t=1750229665135"
					alt="Love Akot - One app. One city. Infinite connections. | Product Hunt"
					style={{ width: "250px", height: "54px" }}
					width="250"
					height="54"
				/>
			</a>
		</motion.div>
		<motion.div
			className="flex justify-center mt-5"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
		>
			<img
				src={bgImage}
				alt="Background illustration"
				className="w-[90%] sm:w-[70%] md:w-[50%] object-contain"
			/>
		</motion.div>
	</motion.section>
);

const AboutSection = () => (
	<section id="about" className="mt-12 sm:mt-20 text-center px-4">
		<motion.h2
			className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			About Love Akot
		</motion.h2>
		<motion.h2
			className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			Learn more about our community-based app
		</motion.h2>
		<motion.p
			className="w-full sm:w-[80%] md:w-[50%] text-lg md:text-3xl font-semibold mx-auto leading-[160%] md:leading-[180%] text-gray-700"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			Love Akot is a hyperlocal community-based app designed exclusively for the city of Akot. The primary goal of the app is to provide all essential information and services in one place. With Love Akot, residents can access services, business details, news, helpful information, and updates on local events. It also gives local businesses an effective platform to promote their products and services, extending their reach.
		</motion.p>
	</section>
);
const FeaturesSection = () => (
	<section
		id="features"
		className="my-12 sm:my-20 py-12 sm:py-20 mx-auto bg-[#e2e1fc5d]"
	>
		<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center px-4">
			Exclusive Features of Love Akot
		</h2>
		<h2 className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center px-4">
			Discover the useful and unique features of our app
		</h2>
		<div className="flex justify-center items-center mt-6 sm:mt-8 mx-auto container ">
			<div className="flex flex-col md:flex-row w-auto place-items-center">
				{elements.slice(0, 4).map(({ image, text }, index) => (
					<div
						key={index}
						className={`flex flex-col items-center text-center  ${!image ? "hidden" : ""
							}`}
					>
						{image && (
							<img
								src={image}
								alt={text}
								className=" w-3/4 md:w-[450px] object-contain filter md:grayscale md:hover:filter-none transition-all duration-700"
							/>
						)}
					</div>
				))}
			</div>
		</div>
		<div className="flex justify-center items-center mt-3 sm:mt-8 mx-auto container ">
			<div className="flex flex-col md:flex-row md:gap-6 w-auto place-items-center">
				{elements.slice(4, 7).map(({ image, text }, index) => (
					<div
						key={index}
						className={`flex flex-col items-center text-center ${!image ? "hidden" : ""
							}`}
					>
						{image && (
							<img
								src={image}
								alt={text}
								className="w-3/4 md:w-[390px] object-contain filter md:grayscale md:hover:filter-none transition-all duration-700"
							/>
						)}
					</div>
				))}
			</div>
		</div>
		<div className="container mx-auto grid md:grid-cols-4 mb-4 gap-4 mt-16 px-4 md:px-0">
			{elements.slice(0, 4).map((element, index) => (
				<div
					key={index}
					className="flex flex-col rounded-2xl bg-white border border-gray-300 p-12 hover:bg-[#6f40ff] text-black hover:text-white transition-all duration-500"
				>
					<h1 className="text-2xl font-semibold mb-3">{element.text}</h1>
					<p className="text-base font-light  ">{element.description}</p>
				</div>
			))}
		</div>
		<div className="container mx-auto grid md:grid-cols-3 gap-4 px-4 md:px-0">
			{elements.slice(4, 8).map((element, index) => (
				<div
					key={index}
					className="flex flex-col rounded-2xl bg-white border border-gray-300 p-12 hover:bg-[#6f40ff] text-black hover:text-white transition-all duration-500"
				>
					<h1 className="text-2xl font-semibold mb-3">{element.text}</h1>
					<p className="text-base font-light ">{element.description}</p>
				</div>
			))}
		</div>
	</section>
);

function FAQItem({ faq, isOpen, onClick }) {
	return (
		<div
			className="cursor-pointer p-3 sm:p-4 border rounded-xl transition-all duration-300"
			onClick={onClick}
		>
			<div className="flex justify-between items-center">
				<h3 className="text-base sm:text-lg font-semibold pr-2">
					{faq.question}
				</h3>
				{isOpen ? <Minus size={20} /> : <Plus size={20} />}
			</div>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
					}`}
			>
				<p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
			</div>
		</div>
	);
}

function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const handleClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="container mx-auto p-4" id="contact">
			<div>
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center">
					Frequently Asked Questions
				</h2>
				<h2 className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center">
					Common questions and answers to clear your doubts
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
				{faqs.map((faq, index) => (
					<FAQItem
						key={index}
						faq={faq}
						isOpen={openIndex === index}
						onClick={() => handleClick(index)}
					/>
				))}
			</div>
		</div>
	);
}

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

const Footer = () => {
	return (
		<div className="container mx-auto mt-10 px-4">
			<div className="py-4 flex flex-col lg:flex-row justify-between items-center">
				<div className="mb-4 lg:mb-0 flex justify-center md:justify-start">
					<img src={logo} alt="लोगो" className="w-[40%] lg:w-[20%]" />
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
					{/* <img
						src={youtube}
						alt="यूट्यूब"
						className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]"
					/> */}
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
						<p>अटी आणि शर्ती</p>
					</Link>
					<Link to={"/privacy-policy"}>
						<p>गोपनीयता धोरण</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

// Main Component
const Home = () => {
	return (
		<div className="App">
			<div
				id="home"
				className=" h-[500px] md:h-screen py-5 relative bg-gradient-to-b to-[#bbc2ff] from-transparent overflow-hidden"
			>
				<div className="fixed z-[100000] flex justify-center w-full">
					<NavBar />
				</div>
				<div className="mt-20 md:mt-16">
					<HeroSection />
				</div>
			</div>

			<div>
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
			<div className="relative overflow-hidden flex justify-center" style={{ height: "14.5rem" }}>
				<h1
					className="text-[12.5rem] font-extrabold bg-gradient-to-t from-transparent  to-gray-300 bg-clip-text text-transparent"
				>
					Love ❤️ Akot
				</h1>
			</div>

		</div>
	);
};

export default Home;
