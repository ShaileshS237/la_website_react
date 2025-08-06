import { motion } from "framer-motion";
import bgImage from "../../assets/bg-2.png";

const HeroSection = () => (
    <motion.section
        className="pt-6 sm:pt-12 text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <span className="text-[#02123f]">Connect, Buy, Sell & Stay Updated <br /> All in One Place for Akot</span>
        </motion.h1>
        <motion.p
            className="text-base sm:text-xl mt-5 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
            A hyperlocal community app made for Akot residents. <br /> From marketplace to rentals, events to alerts — everything you need, in one app.
        </motion.p>
        <motion.div
            className="flex justify-center my-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
            <a
                href="https://www.producthunt.com/products/love-akot?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-love-akot"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=963777&theme=dark&t=1750229665135"
                    alt="Love Akot - One app. One city. Infinite connections. | Product Hunt"
                    style={{ width: "250px", height: "54px" }}
                    width="250"
                    height="54"
                />
            </a>
        </motion.div>
        <motion.div
            className="flex justify-center mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
            <img
                src={bgImage}
                alt="Background illustration"
                className="w-[90%] sm:w-[70%] md:w-[50%] object-contain"
            />
        </motion.div>
    </motion.section>
);

export default HeroSection;
