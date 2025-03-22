import React, { useState } from "react";
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

const NAV_ITEMS = [
	{ id: "home", label: "मुख्यपृष्ठ" },
	{ id: "about", label: "आमच्याबद्दल" },
	{ id: "features", label: "वैशिष्ट्ये" },
	{ id: "contact", label: "संपर्क" },
];

const elements = [
	{
		text: "लव्ह आकोट मार्केट",
		description:
			"शहरातील बाजारपेठांची संपूर्ण माहिती मिळवा. किराणा, कपडे, इलेक्ट्रॉनिक्स आणि विविध दुकाने यांचे लोकेशन, वेळा आणि ऑफर्स येथे उपलब्ध आहेत.",
		image: require("../assets/features/7.png"),
	},
	{
		text: "लव्ह आकोट जीवनदाता",
		description:
			"रक्तदान आणि आरोग्य सेवांबाबत महत्त्वाची माहिती. कोणत्या ठिकाणी रक्ताची गरज आहे, कोणत्या रुग्णालयात ब्लड बँक आहे, आणि आपत्कालीन आरोग्य सुविधा.",

		image: require("../assets/features/5.png"),
	},
	{
		text: "लव्ह आकोट टाइम्स",
		description:
			"नवीनतम स्थानिक आणि राष्ट्रीय बातम्या येथे वाचा. तुमच्या शहरातील घडामोडी, सरकारी निर्णय, तसेच ताज्या सामाजिक, आर्थिक आणि राजकीय बातम्या मिळवा.",

		image: require("../assets/features/2.png"),
	},
	{
		text: "लव्ह आकोट सहायता",
		description:
			"तत्काळ मदतीसाठी आपत्कालीन संपर्क क्रमांक. पोलीस, रुग्णवाहिका, अग्निशमन दल, वीज पुरवठा समस्या, वीज खंडीत झाल्यास तक्रार आणि इतर तातडीच्या सेवांची माहिती.",

		image: require("../assets/features/3.png"),
	},
	{
		text: "लव्ह आकोट बाजारभाव",
		description:
			"कृषी उत्पन्न आणि बाजारभाव अद्ययावत माहिती. शेतकरी व व्यापारी यांच्यासाठी सध्याचे शेतीमालाचे दर, बाजारात माल विक्रीचे अपडेट्स आणि इतर महत्त्वाची माहिती.",

		image: require("../assets/features/6.png"),
	},
	{
		text: "लव्ह आकोट नागरीसमस्या",
		description:
			"शहराच्या नागरी सुविधा आणि सेवांची माहिती. पाणीपुरवठा, कचरा व्यवस्थापन, कर भरपाई, रस्ते दुरुस्ती आणि इतर नागरी सुविधांशी संबंधित अपडेट्स.",
		image: require("../assets/features/4.png"),
	},
	{
		text: "लव्ह आकोट गपशप",
		description:
			"स्थानिक समुदाय आणि चर्चासत्रांसाठी एक विशेष विभाग. आपल्या परिसरातील विविध विषयांवर चर्चा करा, नवीन मित्र जोडा आणि समाजात सक्रिय सहभाग घ्या.",

		image: require("../assets/features/1.png"),
	},
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
		question: "लव्ह आकोट अ‍ॅप म्हणजे काय?",
		answer:
			"लव्ह आकोट हे एक हायपरलोकल समुदाय-आधारित अ‍ॅप आहे, जे आपल्या शहराशी संबंधित विविध सेवा आणि माहिती पुरवते.",
	},
	{
		question: "लव्ह आकोट अ‍ॅप कोणत्या सेवा देते?",
		answer:
			"हे अ‍ॅप स्थानिक बातम्या, व्यवसाय माहिती, इव्हेंट्स, जॉब अपडेट्स आणि इतर अनेक सुविधा देते.",
	},
	{
		question: "लव्ह आकोट अ‍ॅप डाउनलोड कसे करायचे?",
		answer:
			"तुम्ही Google Play Store वर जाऊन 'लव्ह आकोट' असे शोधून अ‍ॅप डाउनलोड करू शकता.",
	},
	{
		question: "लव्ह आकोट वर व्यवसाय लिस्टिंग कसे करायचे?",
		answer:
			"अ‍ॅपमध्ये 'व्यवसाय जोडा' पर्यायावर क्लिक करून आपला व्यवसाय सहज नोंदणी करू शकता.",
	},
	{
		question: "लव्ह आकोट अ‍ॅप वापरण्यास मोफत आहे का?",
		answer:
			"होय! लव्ह आकोट अ‍ॅप मोफत आहे, काही प्रीमियम सेवा भविष्यात उपलब्ध होऊ शकतात.",
	},
	{
		question: "लव्ह आकोट मध्ये स्थानिक जाहिराती कशा प्रकाशित करायच्या?",
		answer: "अ‍ॅपमध्ये जाहिरात विभागात जाऊन तुमची जाहिरात अपलोड करू शकता.",
	},
	{
		question: "लव्ह आकोट मध्ये कोणत्या प्रकारची माहिती मिळू शकते?",
		answer:
			"तुम्हाला शहरातील महत्त्वाच्या बातम्या, ऑफर्स, जॉब अपडेट्स आणि स्थानिक इव्हेंट्स यांची माहिती मिळेल.",
	},
	{
		question: "लव्ह आकोट ला सपोर्टसाठी कसा संपर्क साधावा?",
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
		setIsMenuOpen(false);
	};

	return (
		<nav className="text-black px-4 absolute z-50 w-full">
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
					<button className="flex gap-2 bg-[white] text-black border-[1px] border-black px-6 py-3 rounded-full hover:text-white text-lg font-bold hover:bg-[#02123f] transition-all duration-300">
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

			{/* Mobile Menu with Smooth Animation */}
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
					</motion.div>
				)}
			</AnimatePresence>
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
			आकोट शहराची पहिली हायपरलोकल अ‍ॅप सेवा! <br /> लव्ह आकोट मधून मिळवा ताज्या
			घडामोडी, स्थानिक व्यवसाय, इव्हेंट्स आणि शहरातील महत्त्वाची माहिती <br />{" "}
			अगदी एका क्लिकवर!
		</p>
		<div className="flex justify-center mt-5">
			<img
				src={bgImage}
				alt="Background illustration"
				className="w-[90%] sm:w-[70%] md:w-[50%] object-contain"
			/>
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
			लव्ह आकोट बद्दल
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
			className="w-full sm:w-[80%] md:w-[50%] text-lg md:text-3xl font-semibold mx-auto leading-[160%] md:leading-[180%] text-gray-700"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			viewport={{ once: true }}
		>
			लव्ह आकोट ही एक समुदाय-आधारित हायपरलोकल अ‍ॅप आहे जी आकोट शहरासाठी खास तयार
			करण्यात आली आहे. या अ‍ॅपचा मुख्य उद्देश स्थानिक नागरिकांना एका ठिकाणी सर्व
			आवश्यक माहिती व सेवा उपलब्ध करून देणे हा आहे. <br />
			या अ‍ॅपच्या माध्यमातून आकोटमधील नागरिकांना विविध सेवा, व्यवसाय, बातम्या,
			उपयुक्त माहिती, आणि स्थानिक इव्हेंट्स यांची माहिती मिळू शकते. लव्ह आकोट
			अ‍ॅपद्वारे स्थानिक व्यावसायिकांना त्यांच्या उत्पादनांची व सेवांची जाहिरात
			करण्यासाठी एक प्रभावी प्लॅटफॉर्म मिळतो, ज्यामुळे त्यांचा व्यवसाय अधिक
			लोकांपर्यंत पोहोचतो.
		</motion.p>
	</section>
);

const FeaturesSection = () => (
	<section
		id="features"
		className="my-12 sm:my-20 py-12 sm:py-20 mx-auto bg-[#e2e1fc5d]"
	>
		<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center px-4">
			लव्ह आकोटची खास वैशिष्ट्ये
		</h2>
		<h2 className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center px-4">
			आमच्या अ‍ॅपमधील उपयुक्त आणि अनोखी फिचर्स जाणून घ्या
		</h2>
		<div className="flex justify-center items-center mt-6 sm:mt-8 mx-auto container ">
			<div className="flex flex-col md:flex-row w-auto place-items-center">
				{elements.slice(0, 4).map(({ image, text }, index) => (
					<div
						key={index}
						className={`flex flex-col items-center text-center  ${
							!image ? "hidden" : ""
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
						className={`flex flex-col items-center text-center ${
							!image ? "hidden" : ""
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
		<div className="container mx-auto grid md:grid-cols-3 gap-4">
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
			<div>
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center">
					सर्वाधिक विचारले जाणारे प्रश्न
				</h2>
				<h2 className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center">
					तुमच्या शंका दूर करण्यासाठी काही सामान्य प्रश्न व उत्तरे
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
		<div className=" container mx-auto px-4">
			<div className="relative flex  flex-col md:flex-row h-[400px] my-16 bg-[#6f40ff] rounded-3xl overflow-hidden">
				<div className="w-full md:w-3/4 flex pl-10 md:pl-20  items-start justify-center flex-col relative top-5 md:top-0 z-20">
					<h1 className="text-xl md:text-4xl leading-snug md:mb-5 text-white font-bold">
						तुमचं शहर, तुमची कम्युनिटी <br />
						सगळं एकाच अ‍ॅपमध्ये! <br /> लव्ह आकोट आजच डाउनलोड करा!
					</h1>
					<a
						href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="flex gap-2 bg-[#02123f] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all duration-300">
							<Download /> <span className="mt-1">डाउनलोड करा</span>
						</button>
					</a>
				</div>
				<div className="relative w-full left-[0%] bottom-[5px]  md:bottom-[30%] rotate-1">
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
				className=" h-[500px] md:h-screen py-5 relative bg-gradient-to-b from-[#6f40ff] to-transparent overflow-hidden"
			>
				<NavBar />
				<div className="mt-20 md:mt-24">
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
		</div>
	);
};

export default Home;
