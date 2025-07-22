import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { motion } from "motion/react";
import Dropdown from "./dropdown";

export default function Header() {
    return (
        <motion.header
            className="w-full p-4 lg:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <nav className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <FaGithub className="w-6 h-6" />
                    <FaLinkedin className="w-6 h-6" />
                    <SiDevpost className="w-6 h-6" />
                </div>

                {/* Mobile dropdown - visible on mobile, hidden on desktop */}
                <div className="lg:hidden">
                    <Dropdown />
                </div>

                {/* Desktop navigation - hidden on mobile, visible on desktop */}
                <div className="hidden lg:flex space-x-8 font-display">
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#skills">Skills</a>
                    <a href="#resume">Resume</a>
                </div>
            </nav>
        </motion.header>
    );
}
