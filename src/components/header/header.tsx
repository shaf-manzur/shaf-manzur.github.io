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
                    <a href="https://github.com/freshfriedfish/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/shafmanzur/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                    </a>
                    <a href="https://devpost.com/freshfriedfish" target="_blank" rel="noopener noreferrer" aria-label="Devpost">
                        <SiDevpost className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                    </a>
                </div>

                {/* Mobile dropdown - visible on mobile, hidden on desktop */}
                <div className="lg:hidden">
                    <Dropdown />
                </div>

                {/* Desktop navigation - hidden on mobile, visible on desktop */}
                <div className="hidden lg:flex space-x-8 font-display text-lg">
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#education" className="hover:text-primary transition-colors">Education</a>
                    <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                    <a href="#resume" className="hover:text-primary transition-colors">Resume</a>
                </div>
            </nav>
        </motion.header>
    );
}
