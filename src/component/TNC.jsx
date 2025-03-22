import React from "react";
import logo from "../assets/newla_logo_white.png";

const TermsAndConditions = () => {
	return (
		<div className="App">
			<div
				id="home"
				className="pt-3 pb-5 md:px-96 px-3  bg-[#6f40ff] text-white"
			>
				<img src={logo} className="w-1/2 lg:w-1/5" alt="" />
			</div>
			<div className="md:px-96 py-6  px-4">
				<h1 className="text-3xl font-bold">Terms and Conditions</h1>
				<h1 className="text-lg font-extralight mb-7">
					Last update: 23 March 2025 12:42 P.M{" "}
				</h1>
				<p className="mb-4">
					This document is an electronic record in terms of the Information
					Technology Act, 2000, including any amendments thereof, from time to
					time, the rules thereunder as applicable, and the amended provisions
					pertaining to electronic records in various statutes as amended by the
					Information Technology Act, 2000. This electronic record is generated
					by a computer system and does not require any physical or digital
					signatures.
				</p>

				<h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
				<p className="mb-4">
					These terms and conditions (“Terms”) govern the use of Love Akot
					(“Platform”), offered by Love Akot.
				</p>
				<p className="mb-4">
					For the purposes of these Terms, "Love Akot" includes Love Akot’s
					officers, directors, representatives, and employees. By accessing or
					using our Platform, You agree to be bound by these Terms. If You do
					not agree, please refrain from using Love Akot.
				</p>

				<h2 className="text-2xl font-semibold mt-6">2. Amendments to Terms</h2>
				<p className="mb-4">
					We may amend these Terms at any time by posting an updated version on
					our website and/or Platform. The updated version of these Terms shall
					take effect immediately upon posting. Your continued use of Love Akot
					following the posting of changes shall mean that You accept and agree
					to the revision(s)/modification(s).
				</p>

				<h2 className="text-2xl font-semibold mt-6">3. Use of Platform</h2>
				<p className="mb-4">
					You agree not to misuse the Platform, engage in illegal activities, or
					violate any community guidelines. Violation of these Terms may result
					in account suspension or termination.
				</p>

				<h2 className="text-2xl font-semibold mt-6">4. User Accounts</h2>
				<p className="mb-4">
					To access certain features, You may need to create an account. You are
					responsible for maintaining the confidentiality of Your credentials
					and ensuring all activities under Your account comply with these
					Terms.
				</p>

				<h2 className="text-2xl font-semibold mt-6">5. Privacy Policy</h2>
				<p className="mb-4">
					Your privacy is important to us. By using Love Akot, You consent to
					the collection and processing of information as described in our
					Privacy Policy.
				</p>

				<h2 className="text-2xl font-semibold mt-6">6. Third-Party Links</h2>
				<p className="mb-4">
					Love Akot may contain links to third-party websites or services. We
					are not responsible for the content, privacy policies, or practices of
					any third-party services.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					7. Limitation of Liability
				</h2>
				<p className="mb-4">
					Love Akot is provided on an "as is" basis without warranties of any
					kind. We do not guarantee uninterrupted or error-free operation of the
					Platform.
				</p>

				<h2 className="text-2xl font-semibold mt-6">8. Bus Timings</h2>
				<p className="mb-4">
					The bus timing information provided on Love Akot is for general
					reference only. We do not guarantee the accuracy, completeness, or
					real-time updates of bus schedules.
				</p>

				<h2 className="text-2xl font-semibold mt-6">9. Market Listings Data</h2>
				<p className="mb-4">
					Love Akot provides market listing data to help users find local
					businesses. However, we do not verify or endorse the accuracy,
					authenticity, or availability of any listings.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					10. Emergency Contact Information
				</h2>
				<p className="mb-4">
					Love Akot may provide emergency contact details for essential
					services, but we do not guarantee the accuracy or availability of
					these contacts.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					11. Blood Donation Information
				</h2>
				<p className="mb-4">
					Love Akot facilitates access to blood donation resources but does not
					directly manage or verify the authenticity of donors.
				</p>

				<h2 className="text-2xl font-semibold mt-6">
					12. GHUPS (Government and Healthcare Utility Public Services)
				</h2>
				<p className="mb-4">
					Information regarding government services and healthcare utilities is
					provided for reference. Users should verify details through respective
					government portals.
				</p>

				<h2 className="text-2xl font-semibold mt-6">13. Classified Listings</h2>
				<p className="mb-4">
					Love Akot allows users to post classified ads, but we do not verify
					the authenticity, legality, or accuracy of listings.
				</p>

				<h2 className="text-2xl font-semibold mt-6">14. News and Updates</h2>
				<p className="mb-4">
					Love Akot provides news updates but does not guarantee the accuracy or
					neutrality of news content.
				</p>

				<h2 className="text-2xl font-semibold mt-6">15. Governing Law</h2>
				<p className="mb-4">
					These Terms shall be governed by the laws of India. Any disputes
					arising from these Terms shall be resolved through arbitration in
					Maharashtra, India.
				</p>

				<h2 className="text-2xl font-semibold mt-6">16. Contact Information</h2>
				<p className="mb-4">
					If You have any questions or concerns regarding these Terms, please
					contact us at <strong>iloveakot@gmail.com</strong>.
				</p>
			</div>
		</div>
	);
};

export default TermsAndConditions;
