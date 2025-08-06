import { useState } from "react";
import FAQItem from "./FAQItem";

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

export default FAQ;

// This file has been moved to the sections folder.
// Please use the updated path: `sections/FAQ.jsx`.
