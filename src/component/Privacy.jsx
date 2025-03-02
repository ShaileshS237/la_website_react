import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
			<h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
				Privacy Policy
			</h1>
			<p className="text-gray-600 text-center mb-6">
				Effective Date: October 5, 2023 | Last Updated: October 5, 2023
			</p>

			<div className="space-y-6 text-gray-700">
				<section>
					<h2 className="text-xl font-semibold text-gray-800">
						1. Introduction
					</h2>
					<p>
						Your privacy is important to us. This Privacy Policy explains how we
						collect, use, and protect your information when using Love Akot.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-gray-800">
						2. Information We Collect
					</h2>
					<ul className="list-disc pl-6">
						<li>Personal information (e.g., name, email) when you register</li>
						<li>Usage data and preferences to improve user experience</li>
						<li>Location data (if permission is granted) for local services</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-gray-800">
						3. How We Use Your Information
					</h2>
					<ul className="list-disc pl-6">
						<li>To provide and personalize services</li>
						<li>To enhance security and prevent fraudulent activities</li>
						<li>To improve the app's functionality and user experience</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-gray-800">
						4. Sharing Your Information
					</h2>
					<ul className="list-disc pl-6">
						<li>We do not sell or rent your data to third parties</li>
						<li>
							We may share data with service providers to enhance app
							functionality
						</li>
						<li>Legal compliance may require us to disclose information</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-gray-800">
						5. Data Security
					</h2>
					<p>
						We implement security measures to protect your data, but no method
						is 100% secure. Users are advised to use strong passwords and be
						cautious online.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold text-gray-800">
						6. Changes to This Policy
					</h2>
					<p>
						We may update this Privacy Policy periodically. Continued use of
						Love Akot after changes implies acceptance.
					</p>
				</section>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
