import feature1 from "../../assets/features/1.png";
import feature2 from "../../assets/features/2.png";
import feature3 from "../../assets/features/3.png";
import feature4 from "../../assets/features/4.png";
import feature5 from "../../assets/features/5.png";
import feature6 from "../../assets/features/6.png";
import feature7 from "../../assets/features/7.png";

const elements = [
    {
        text: "Love Akot Market",
        description:
            "Get complete information about the city's marketplaces. Locate grocery stores, clothing shops, electronics outlets, and various other stores along with their timings and offers.",
        image: feature7,
    },
    {
        text: "Love Akot Jivandata",
        description:
            "Important details on blood donation and healthcare services. Find out where blood is needed, which hospitals have blood banks, and access emergency health services.",
        image: feature5,
    },
    {
        text: "Love Akot Times",
        description:
            "Read the latest local and national news here. Stay updated with your city's events, government decisions, and trending social, economic, and political news.",
        image: feature2,
    },
    {
        text: "Love Akot Sahayata",
        description:
            "Emergency contacts for immediate help. Includes information for police, ambulance services, fire brigades, power outages, and other urgent services.",
        image: feature3,
    },
    {
        text: "Love Akot Prices",
        description:
            "Get updated information on agricultural yields and market prices. Check current rates for produce, sale updates, and other key financial details for farmers and traders.",
        image: feature6,
    },
    {
        text: "Love Akot Nagarisamsya",
        description:
            "Information on the city's civic amenities and services. Learn about water supply, waste management, tax payments, road repairs, and other civic updates.",
        image: feature4,
    },
    {
        text: "Love Akot Gupshup",
        description:
            "A dedicated section for community discussions and forums. Connect with local residents on various topics, make new friends, and actively participate in your community.",
        image: feature1,
    },
];

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
                        className={`flex flex-col items-center text-center  ${!image ? "hidden" : ""}`}
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
                        className={`flex flex-col items-center text-center ${!image ? "hidden" : ""}`}
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

export default FeaturesSection;
