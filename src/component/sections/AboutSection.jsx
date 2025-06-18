import { motion } from "framer-motion";

const AboutSection = () => (
    <section id="about" className="mt-12 sm:mt-20 text-center px-4">
        <motion.h2
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            About Love Akot
        </motion.h2>
        <motion.h2
            className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            Learn more about our community-based app
        </motion.h2>
        <motion.p
            className="w-full sm:w-[80%] md:w-[50%] text-lg md:text-3xl font-extrabold mx-auto leading-[160%] md:leading-[180%] text-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            Love Akot is a hyperlocal community-based app designed exclusively for the city of Akot. The primary goal of the app is to provide all essential information and services in one place. With Love Akot, residents can access services, business details, news, helpful information, and updates on local events. It also gives local businesses an effective platform to promote their products and services, extending their reach.
        </motion.p>
    </section>
);

export default AboutSection;
