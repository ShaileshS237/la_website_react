import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, Minus, Plus, X } from "lucide-react";
import logo from "../assets/la_logo.png";
import bgImage from "../assets/bg-2.png";
import "../App.css";
import Marquee from "react-fast-marquee";
import astrick from "../assets/astrick.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import footer from "../assets/footerpng.png";
const NAV_ITEMS = [
	{ id: "home", label: "मुख्यपृष्ठ" },
	{ id: "features", label: "वैशिष्ट्ये" },
	{ id: "about", label: "आमच्याबद्दल" },
	{ id: "contact", label: "संपर्क" },
];

const elements = [
	{ text: "gupshup", image: require("../assets/features/6.png") },
	{ text: "times", image: require("../assets/features/5.png") },
	{ text: "emergency", image: require("../assets/features/1.png") },
	{ text: "nagarpalika", image: require("../assets/features/2.png") },
	{ text: "jivandata", image: require("../assets/features/3.png") },
	{ text: "bajarbhav", image: require("../assets/features/4.png") },
];

const marqueeElements = [
	{ text: "लोकांसाठी", image: "./assets/astrick.png" },
	{ text: "लोकांद्वारे", image: "./assets/astrick.png" },
	{ text: "लोकांसाठी", image: "./assets/astrick.png" },
	{ text: "लोकांद्वारे", image: "./assets/astrick.png" },
	{ text: "लोकांसाठी", image: "./assets/astrick.png" },
	{ text: "लोकांद्वारे", image: "./assets/astrick.png" },
];

const faqs = [
	{
		question: "लव्ह अकोट अ‍ॅप म्हणजे काय?",
		answer:
			"लव्ह अकोट हे एक हायपरलोकल समुदाय-आधारित अ‍ॅप आहे, जे आपल्या शहराशी संबंधित विविध सेवा आणि माहिती पुरवते.",
	},
	{
		question: "लव्ह अकोट अ‍ॅप कोणत्या सेवा देते?",
		answer:
			"हे अ‍ॅप स्थानिक बातम्या, व्यवसाय माहिती, इव्हेंट्स, जॉब अपडेट्स आणि इतर अनेक सुविधा देते.",
	},
	{
		question: "लव्ह अकोट अ‍ॅप डाउनलोड कसे करायचे?",
		answer:
			"तुम्ही Google Play Store वर जाऊन 'लव्ह अकोट' असे शोधून अ‍ॅप डाउनलोड करू शकता.",
	},
	{
		question: "लव्ह अकोट वर व्यवसाय लिस्टिंग कसे करायचे?",
		answer:
			"अ‍ॅपमध्ये 'व्यवसाय जोडा' पर्यायावर क्लिक करून आपला व्यवसाय सहज नोंदणी करू शकता.",
	},
	{
		question: "लव्ह अकोट अ‍ॅप वापरण्यास मोफत आहे का?",
		answer:
			"होय! लव्ह अकोट अ‍ॅप मोफत आहे, काही प्रीमियम सेवा भविष्यात उपलब्ध होऊ शकतात.",
	},
	{
		question: "लव्ह अकोट मध्ये स्थानिक जाहिराती कशा प्रकाशित करायच्या?",
		answer: "अ‍ॅपमध्ये जाहिरात विभागात जाऊन तुमची जाहिरात अपलोड करू शकता.",
	},
	{
		question: "लव्ह अकोट मध्ये कोणत्या प्रकारची माहिती मिळू शकते?",
		answer:
			"तुम्हाला शहरातील महत्त्वाच्या बातम्या, ऑफर्स, जॉब अपडेट्स आणि स्थानिक इव्हेंट्स यांची माहिती मिळेल.",
	},
	{
		question: "लव्ह अकोट ला सपोर्टसाठी कसा संपर्क साधावा?",
		answer:
			"अ‍ॅपमध्ये दिलेल्या 'संपर्क करा' विभागात जाऊन तुम्ही आमच्याशी संपर्क करू शकता.",
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
		setIsMenuOpen(false); // Close menu on navigation
	};

	return (
		<nav className="text-black px-4">
			<div className="container mx-auto bg-white shadow-sm px-4 sm:px-8 py-4 rounded-full flex justify-between items-center">
				<img
					src={logo}
					alt="logo"
					className="w-28 sm:w-40 mb-2 mr-2"
					loading="lazy"
				/>
				<div className="hidden md:flex space-x-6">
					{NAV_ITEMS.map(({ id, label }) => (
						<button
							key={id}
							onClick={() => handleScroll(id)}
							className="focus:outline-none"
						>
							{label}
						</button>
					))}
				</div>
				<a
					href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
					target="_blank"
					rel="noopener noreferrer"
					className="hidden md:flex"
				>
					<button className="flex gap-2 bg-[#02123f] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#6968ad] transition-all duration-300">
						<Download /> <span className="mt-1">आताच डाउनलोड करा</span>
					</button>
				</a>
				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden focus:outline-none"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>
			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white shadow-md rounded-lg mt-2 mx-1 p-4 z-50 relative">
					<ul className="space-y-4">
						{NAV_ITEMS.map(({ id, label }) => (
							<li key={id}>
								<button
									onClick={() => handleScroll(id)}
									className="focus:outline-none w-full text-left"
								>
									{label}
								</button>
							</li>
						))}
					</ul>
					<a
						href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
						target="_blank"
						rel="noopener noreferrer"
						className="block mt-4"
					>
						<button className="flex gap-2 bg-[#02123f] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#6968ad] transition-all duration-300 w-full justify-center">
							<Download /> <span className="mt-1">आताच डाउनलोड करा</span>
						</button>
					</a>
				</div>
			)}
		</nav>
	);
};

const HeroSection = () => (
	<section className="text-white pt-6 sm:pt-12 text-center px-4">
		<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
			<span className="text-[#02123f]">आकोटला </span>
			<br /> अनुभवा नव्या रूपात!
		</h1>
		<p className="text-base sm:text-xl mt-2 px-2">
			आकोट शहराची पहिली हायपरलोकल अ‍ॅप सेवा! <br /> लव्ह अकोट मधून मिळवा ताज्या
			घडामोडी, स्थानिक व्यवसाय, इव्हेंट्स आणि शहरातील महत्त्वाची माहिती <br />{" "}
			अगदी एका क्लिकवर!
		</p>
		<div className="flex justify-center mt-5">
			<img
				src={bgImage}
				alt="Background illustration"
				className="w-[80%] sm:w-[70%] md:w-[50%] object-contain"
			/>
		</div>
	</section>
);

const FeaturesSection = () => (
	<section
		id="features"
		className="my-12 sm:my-20 py-12 sm:py-20 text-center mx-auto bg-[#e2e1fc5d]"
	>
		<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center px-4">
			लव्ह अकोटची खास वैशिष्ट्ये
		</h2>
		<h2 className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center px-4">
			आमच्या अ‍ॅपमधील उपयुक्त आणि अनोखी फिचर्स जाणून घ्या
		</h2>

		<div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 mx-auto container px-4">
			<div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full">
				{elements.slice(0, 4).map(({ image, text }, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center w-[40%] sm:w-[20%]"
					>
						<img
							src={image}
							alt={text}
							className="w-full object-contain filter grayscale hover:filter-none transition-all duration-700"
						/>
					</div>
				))}
			</div>
			<div className="flex justify-center gap-4 sm:gap-6 w-full pb-5 mt-4">
				{elements.slice(4, 6).map(({ image, text }, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center w-[40%] sm:w-[24%]"
					>
						<img
							src={image}
							alt={text}
							className="w-full object-contain filter grayscale hover:filter-none transition-all duration-700"
						/>
					</div>
				))}
			</div>
		</div>
	</section>
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
			लव्ह अकोट बद्दल
		</motion.h2>
		<motion.h2
			className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			आमच्या समुदाय-आधारित अ‍ॅपविषयी जाणून घ्या
		</motion.h2>
		<motion.p
			className="w-full sm:w-[80%] md:w-[50%] text-xl sm:text-2xl md:text-3xl font-semibold mx-auto leading-[160%] sm:leading-[180%] text-gray-700"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			लव्ह अकोट ही एक कम्युनिटी-बेस्ड हायपरलोकल अ‍ॅप आहे जी अकोट शहरासाठी खास
			तयार करण्यात आली आहे. या अ‍ॅपचा मुख्य उद्देश स्थानिक नागरिकांना एका ठिकाणी
			सर्व आवश्यक माहिती व सेवा उपलब्ध करून देणे हा आहे. <br />
			या अ‍ॅपच्या माध्यमातून अकोटमधील नागरिकांना विविध सेवा, व्यवसाय, बातम्या,
			उपयुक्त माहिती, आणि स्थानिक इव्हेंट्स यांची माहिती मिळू शकते. लव्ह अकोट
			अ‍ॅपद्वारे स्थानिक व्यावसायिकांना त्यांच्या उत्पादनांची व सेवांची जाहिरात
			करण्यासाठी एक प्रभावी प्लॅटफॉर्म मिळतो, ज्यामुळे त्यांचा व्यवसाय अधिक
			लोकांपर्यंत पोहोचतो.
		</motion.p>
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
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
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
			<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center">
				सर्वाधिक विचारले जाणारे प्रश्न
			</h2>
			<h2 className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center">
				तुमच्या शंका दूर करण्यासाठी काही सामान्य प्रश्न व उत्तरे
			</h2>
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

const Footer = () => {
	return (
		<div className="container mx-auto mt-10 px-4">
			<div className="py-4 flex flex-col lg:flex-row justify-between items-center">
				<div className="mb-4 lg:mb-0 flex justify-center w-full lg:w-auto">
					<img src={logo} alt="logo" className="w-[40%] lg:w-[20%]" />
				</div>
				<div className="flex gap-4 lg:gap-5 items-center">
					<img
						src={instagram}
						alt="Instagram"
						className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]"
					/>
					<img
						src={youtube}
						alt="YouTube"
						className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]"
					/>
					<img
						src={facebook}
						alt="Facebook"
						className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px]"
					/>
				</div>
			</div>

			<hr className="w-full mx-auto border-gray-200" />
			<div className="text-sm sm:text-base text-gray-600 py-4 flex flex-col lg:flex-row justify-between items-center">
				<div>
					<p>@2025 All Rights Reserved</p>
				</div>
				<div className="flex gap-4 lg:gap-9 mt-4 lg:mt-0">
					<p>Terms and Conditions</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</div>
	);
};

const DownloadApp = () => {
	return (
		<div className="flex flex-col md:flex-row h-auto md:h-[400px] my-10 sm:my-16 bg-[#6f40ff] rounded-3xl overflow-hidden relative container mx-auto px-4">
			<div className="w-full md:w-3/4 flex px-6 md:pl-20 py-8 md:py-0 items-start justify-center flex-col">
				<h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug mb-5 text-white font-bold">
					तुमचं शहर, तुमची कम्युनिटी <br />
					सगळं एकाच अ‍ॅपमध्ये! <br /> लव्ह अकोट आजच डाउनलोड करा!
				</h1>
				<a
					href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
					target="_blank"
					rel="noopener noreferrer"
					className="mb-4 md:mb-0"
				>
					<button className="flex gap-2 bg-[#02123f] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all duration-300">
						<Download /> <span className="mt-1">डाउनलोड करा</span>
					</button>
				</a>
			</div>
			<div className="w-full md:w-auto relative md:left-[0%] md:bottom-[20%] flex justify-center">
				<img
					src={footer}
					alt="footer"
					className="w-[80%] md:w-[100%] object-contain md:object-cover"
				/>
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
				className="h-[540px] md:h-screen py-5 relative bg-gradient-to-b from-[#6f40ff] to-transparent overflow-hidden"
			>
				<NavBar />
				<HeroSection />
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
		</div>
	);
};

export default Home;
