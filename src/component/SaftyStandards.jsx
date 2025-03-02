import React from "react";

const SafetyStandards = () => {
	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
				<h1 className="text-3xl font-bold text-gray-800 mb-4">
					Safety Standards Against CSAE
				</h1>
				<p className="text-gray-600 mb-6">
					Love Akot is committed to maintaining a safe and secure environment
					for all users. We take strict measures to prevent child sexual abuse
					and exploitation (CSAE) on our platform.
				</p>

				<h2 className="text-2xl font-semibold text-gray-700 mt-4">
					Our Commitment
				</h2>
				<ul className="list-disc pl-6 text-gray-600 mb-6">
					<li>Strict policies against CSAE content and behavior.</li>
					<li>Automated detection and human moderation.</li>
					<li>Collaboration with law enforcement agencies.</li>
				</ul>

				<h2 className="text-2xl font-semibold text-gray-700 mt-4">
					Reporting & Enforcement
				</h2>
				<ul className="list-disc pl-6 text-gray-600 mb-6">
					<li>Users can report violations directly within the app.</li>
					<li>Swift action taken against policy breaches.</li>
					<li>Legal compliance with global child protection laws.</li>
				</ul>

				<h2 className="text-2xl font-semibold text-gray-700 mt-4">
					Need to Report?
				</h2>
				<p className="text-gray-600 mb-4">
					If you encounter any concerning content, please report it immediately
					at
					<a
						href="mailto:support@loveakot.in"
						className="text-blue-600 font-semibold"
					>
						{" "}
						support@loveakot.in
					</a>
					.
				</p>
			</div>
		</div>
	);
};

export default SafetyStandards;
