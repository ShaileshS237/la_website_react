import React from "react";
import logo from "../assets/la_logo.png";
import header from "../assets/header.png";
import astrick from "../assets/astrick.png";
import bus from "../assets/bus.png";
import crop from "../assets/crop.png";
import bd1 from "../assets/newbd1.png";
import bd2 from "../assets/newbd2.png";
import bd3 from "../assets/newbd3.png";

import downloadapp from "../assets/downloadapp.png";
import gplay from "../assets/GooglePlay.png";
import youtube from "../assets/youtube.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import "../App.css";
import Marquee from "react-fast-marquee";
const elements = [
	{ text: "लोकांसाठी", image: "./assets/astrick.png" },
	{ text: "लोकांद्वारे", image: "./assets/astrick.png" },
	{ text: "लोकांसाठी", image: "./assets/astrick.png" },
	{ text: "लोकांद्वारे", image: "./assets/astrick.png" },
	{ text: "लोकांसाठी", image: "./assets/astrick.png" },
	{ text: "लोकांद्वारे", image: "./assets/astrick.png" },
];

const features = [
	{
		title: "कोड रेड",
		subtitle:
			"आपातकालीन प्रतिसाद सेवेसाठी अॅप, जे त्वरित मदत आणि सुरक्षा माहिती प्रदान करते.",
		image: "https://www.flaticon.com/free-icon/emergency_1205035",
	},
	{
		title: "लव्ह अकोट मार्केट",
		subtitle:
			"स्थानीय बाजाराची अद्यतने, जेथे तुम्हाला ताज्या उत्पादनांची आणि ऑफरची माहिती मिळते.",
		image: "https://www.flaticon.com/free-icon/market_1205038",
	},
	{
		title: "लव्ह अकोट न्यूज",
		subtitle:
			"नवीनतम स्थानिक आणि राष्ट्रीय बातम्या, ज्यामुळे तुम्हाला आपल्या परिसरातील घडामोडींचे ज्ञान मिळते.",
		image: "https://www.flaticon.com/free-icon/news_1205039",
	},
	{
		title: "खरेदी व विक्री",
		subtitle:
			"लोकल व्यापार आणि सेवेची माहिती, जिथे तुम्ही विविध वस्तूंची खरेदी आणि विक्री करू शकता.",
		image: "https://www.flaticon.com/free-icon/buy_1205040",
	},
	{
		title: "लव्ह अकोट गपशप",
		subtitle:
			"सामाजिक चर्चा आणि कनेक्ट, जिथे तुम्ही स्थानिक लोकांशी संवाद साधू शकता आणि माहिती शेअर करू शकता.",
		image: "https://www.flaticon.com/free-icon/chat_1205041",
	},
	{
		title: "लव्ह अकोट नागरी समस्या",
		subtitle:
			"शहराच्या समस्यांवर चर्चा, जिथे तुम्ही आपल्या परिसरातील नागरी समस्यांबद्दल तक्रारी नोंदवू शकता आणि उपाय सुचवू शकता.",
		image: "https://www.flaticon.com/free-icon/problem_1205042",
	},
];
const Home = () => {
	return (
		<div className="App">
			<div className="bg-cover bg-right-shift h-[820px] overflow-hidden">
				<div className="px-4 lg:px-[15rem] mx-auto">
					<div className=" py-4 flex justify-center w-[70%] lg:w-[100%] lg:block">
						<img src={logo} class="w-[25%]" alt="logo" />

						{/* <div className="flex gap-2 items-center">
							<button className="bg-[#00133F] font-light text-white py-2 lg:py-4 px-4 lg:px-8 rounded-full transition duration-300 ease-in-out text-lg lg:text-2xl">
								Download App
							</button>
							<img
								src={hamburger}
								className="w-[30px] lg:w-[40px] invert h-[30px] lg:h-[40px] ml-4 lg:ml-[17px]"
								alt="menu"
							/>
						</div> */}
					</div>

					<div className="lg:mt-10 grid lg:grid-cols-3">
						<div className="col-span-2 mt-10 lg:mt-24">
							<h1 className="text-6xl font-bold leading-tight">
								आकोटच्या डिजिटल विश्वात <br /> सहभागी व्हा !
							</h1>

							<h1 className="text-4xl mt-6 lg:mt-10">लवकरच येत आहे....</h1>
						</div>
						<div className="mt-6 lg:mt-0">
							<img src={header} alt="header" className="w-full" />
						</div>
					</div>
				</div>
			</div>
			<div>
				<hr className="w-full mx-auto border-gray-400" />
				<Marquee className="marquee">
					{elements.map((element, index) => (
						<div key={index} className="flex gap-[10rem] mx-4">
							<img src={astrick} alt="Asterisk" className="h-[20px] w-[20px]" />
							<h1 className="text-2xl mr-[10rem]">{element.text}</h1>
						</div>
					))}
				</Marquee>
				<hr className="w-full mx-auto border-gray-400" />
			</div>

			<div className="px-4 lg:px-[15rem] grid lg:grid-cols-3 gap-5 lg:gap-10 my-10">
				{features.map((feature, index) => (
					<div
						key={index}
						className="outline outline-1 p-4 lg:p-8 outline-[#D6D6D6] rounded-xl"
					>
						<div className="h-[60px] lg:h-[100px] w-[60px] lg:w-[100px] bg-[#737373] rounded-md mb-4 lg:mb-8">
							<img src={feature.image} alt="" />
						</div>
						<h1 className="text-xl lg:text-2xl font-bold">{feature.title}</h1>
						<p className="text-sm lg:text-base">{feature.subtitle}</p>
					</div>
				))}
			</div>

			<div className="px-4 lg:px-[15rem]">
				<div className="bg-[#eaffe5] rounded-3xl grid lg:grid-cols-2 gap-3 lg:h-[550px] overflow-hidden  lg:px-10">
					<div className=" flex flex-col justify-center pl-10">
						<div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00133F] to-[#0534A3] text-3xl lg:text-5xl font-bold leading-tight py-4">
							कृषी उत्पन्न बाजार समिती, <br /> अकोट - बाजार भाव
						</div>
						<p className="text-black text-lg lg:text-xl font-light">
							कृषी उत्पन्न बाजार समिती, अकोट - बाजार भाव हे एक स्थानिक बाजार आहे
							जिथे शेतकरी त्यांचे उत्पादन विक्रीसाठी आणतात. हे एक ठिकाण आहे जिथे
							विविध कृषी उत्पादनांचे दर (बाजार भाव) ठरवले जातात. यामध्ये धान्य,
							फळे, भाजीपाला, आणि इतर शेतीचे उत्पन्न यांचा समावेश होतो.
						</p>
					</div>
					<div className="lg:col-span-1 lg:h-[500px] mt-4 lg:mt-0 flex justify-center items-center">
						<img
							src={crop}
							alt="crop"
							className="w-[50%] lg:w-[70%] relative lg:rotate-[-11deg] lg:top-[200px] lg:right-[-9rem]"
						/>
					</div>
				</div>

				<div className="grid lg:grid-cols-3 gap-5 mt-5">
					<div className="col-span-1 lg:col-span-2 flex flex-col items-center h-auto lg:h-[530px] overflow-hidden bg-[#E7EFFF] rounded-2xl p-4">
						<div className="text-transparent mt-5 bg-clip-text bg-gradient-to-r from-[#00133F] to-[#0534A3] text-2xl lg:text-4xl font-bold leading-tight pt-4 text-center">
							MSRTC (ST Bus) वेळापत्रक
						</div>
						<p className="text-black text-center text-lg lg:text-xl pb-5 font-light">
							आम्ही तुमच्या प्रवासाच्या सोयीसाठी विविध मार्गांवर नियमित <br />
							वेळापत्रकाची सेवा उपलब्ध करतो.
						</p>
						<img className="w-[60%] lg:w-[40%]" src={bus} alt="bus" />
					</div>
					<div className="col-span-1 flex flex-col items-center h-auto lg:h-[530px] overflow-hidden bg-[#FFE7E7] rounded-2xl p-4">
						<div className="text-transparent mt-5 bg-clip-text bg-gradient-to-r from-[#00133F] to-[#0534A3] text-2xl lg:text-4xl font-bold leading-tight pt-4 text-center">
							रक्त दान
						</div>
						<p className="text-black text-center text-sm lg:text-md pb-5 font-light">
							रक्तदानाच्या माध्यमातून जीव वाचवण्याच्या या पवित्र कार्यात सहभागी
							व्हा <br />
							आणि आपल्या समाजाला साथ द्या.
						</p>
						<div className="grid grid-cols-1 gap-5">
							<img src={bd1} alt="" className="rounded-lg h-[100px]" />
							{/* <img src={bd2} alt="" /> */}
							{/* <img src={bd3} alt="" /> */}
							<img src={bd3} alt="" className="rounded-lg h-[100px]" />
							<img src={bd2} alt="" className="rounded-lg h-[100px]" />
						</div>
						{/* <img
							className="w-[80%] lg:w-[60%]"
							src={blooddonation}
							alt="blood donation"
						/> */}
					</div>
				</div>
			</div>

			<div className="relative px-4 lg:px-[15rem] mt-10  ">
				<img src={downloadapp} alt="Download App" className="w-full" />
				<div className="absolute top-0 left-0 w-full h-full px-4 lg:px-[15rem] flex flex-col mt-2 lg:mt-32 ml-4 lg:ml-16">
					<p className="text-white text-1xl lg:text-5xl font-bold py-4 rounded">
						डिजिटल प्रवासाची सुरुवात करा <br /> लव अकोट च्या माध्यमातून
					</p>
					<img src={gplay} className="w-[30%] lg:w-[15%]" alt="Download App" />
				</div>
			</div>
			<div className="px-4 lg:px-[15rem] mt-10">
				<div className="py-4 flex flex-col lg:flex-row justify-between items-center">
					<div className="mb-4 lg:mb-0 flex lg:grid justify-center">
						<img src={logo} alt="logo" className="w-[50%] lg:w-[30%]" />
					</div>
					<div className="flex gap-4 lg:gap-10 items-center">
						<img
							src={instagram}
							alt="Instagram"
							className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
						/>
						<img
							src={youtube}
							alt="YouTube"
							className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px]"
						/>
						<img
							src={facebook}
							alt="Facebook"
							className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
						/>
					</div>
				</div>

				<hr className="w-full mx-auto border-gray-200" />
				<div className="py-4 flex flex-col lg:flex-row justify-between items-center">
					<div>
						<p>@2023 All Rights Reserved</p>
					</div>
					<div className="flex gap-4 lg:gap-9 mt-4 lg:mt-0">
						<p>Terms and Conditions</p>
						<p>Privacy Policy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
