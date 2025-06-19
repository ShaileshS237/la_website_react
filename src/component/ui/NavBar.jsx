import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import logo from "../../assets/la_logo.png";
import { useState } from "react";

const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "contact", label: "Contact" },
];

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
        <nav className="text-black absolute z-50 w-full flex justify-center">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="container mx-auto bg-white shadow-sm px-4 sm:px-6 py-2 rounded-full flex justify-between items-center"
            >
                {/* Logo Section */}
                <div className="relative pl-2">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-24 sm:w-32 mb-2 mr-2"
                        loading="lazy"
                    />
                    <span className="absolute -top-1 -right-7 text-black text-xs px-1.5 py-0.5 rounded-md font-light">
                        Beta
                    </span>
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex space-x-6">
                    {NAV_ITEMS.map(({ id, label }) => (
                        <motion.button
                            key={id}
                            onClick={() => handleScroll(id)}
                            className="focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {label}
                        </motion.button>
                    ))}
                </div>

                {/* Download Button Desktop */}
                <a
                    href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:flex"
                >
                    <motion.button
                        className="flex gap-2 border-[1px] border-black px-6 py-3 rounded-full text-white text-lg font-bold bg-[#02123f]"
                    >
                        <Download /> <span>Download Now</span>
                    </motion.button>
                </a>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsMenuOpen(false)}
                        ></motion.div>

                        {/* Menu */}
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-6"
                        >
                            <ul className="space-y-6">
                                {NAV_ITEMS.map(({ id, label }) => (
                                    <li key={id}>
                                        <motion.button
                                            onClick={() => handleScroll(id)}
                                            className="focus:outline-none w-full text-left text-lg font-medium"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {label}
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.loveakot.android&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-8"
                            >
                                <motion.button
                                    className="flex gap-2 bg-[#02123f] text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-[#6968ad] transition-all duration-300 w-full justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Download /> <span>Download Now!</span>
                                </motion.button>
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
