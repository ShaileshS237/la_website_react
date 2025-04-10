import React from "react";
import logo from "../assets/newla_logo_white.png";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
	return (
		<div className="App">
			<div
				id="home"
				className="pt-3 pb-5 md:px-96 px-3  bg-[#6f40ff] text-white"
			>
				<Link to={"/"}>
					<img src={logo} className="w-1/2 md:w-1/5" alt="" />
				</Link>
			</div>
			<div className="md:px-96 py-6  px-4">
				<h1 className="text-3xl font-bold">Privacy Policy</h1>
				<h1 className="text-lg font-extralight mb-7">
					Last update: 23 March 2025 12:42 P.M
				</h1>

				<div className="md:space-y-6 text-gray-700">
					<section>
						<h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
						<p className="mb-4">
							Your privacy is important to us. This Privacy Policy explains how
							we collect, use, and protect your information when using Love
							Akot.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mt-6">
							2. Information We Collect
						</h2>
						<ul className="list-disc pl-6 mb-4">
							<li>
								Personal information (e.g., name, email) when you register
							</li>
							<li>Usage data and preferences to improve user experience</li>
							<li>
								Location data (if permission is granted) for local services
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mt-6">
							3. How We Use Your Information
						</h2>
						<ul className="list-disc pl-6 mb-4">
							<li>To provide and personalize services</li>
							<li>To enhance security and prevent fraudulent activities</li>
							<li>To improve the app's functionality and user experience</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mt-6">
							4. Sharing Your Information
						</h2>
						<ul className="list-disc pl-6 mb-4">
							<li>We do not sell or rent your data to third parties</li>
							<li>
								We may share data with service providers to enhance app
								functionality
							</li>
							<li>Legal compliance may require us to disclose information</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mt-6">5. Data Security</h2>
						<p className="mb-4">
							We implement security measures to protect your data, but no method
							is 100% secure. Users are advised to use strong passwords and be
							cautious online.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mt-6">
							6. Changes to This Policy
						</h2>
						<p className="mb-4">
							We may update this Privacy Policy periodically. Continued use of
							Love Akot after changes implies acceptance.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
