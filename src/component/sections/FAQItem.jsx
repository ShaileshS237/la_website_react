import { Minus, Plus } from "lucide-react";

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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
                <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
            </div>
        </div>
    );
}

export default FAQItem;
