import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react"
import { useState } from 'react';

const navigationItems = [

    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' }
];

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleItemClick = async (href: string) => {
        // Start closing animation
        setIsClosing(true);

        // Wait for text fade out
        await new Promise(resolve => setTimeout(resolve, 300));

        // Close dropdown
        setIsOpen(false);
        setIsClosing(false);

        // Wait for dropdown to close
        await new Promise(resolve => setTimeout(resolve, 500));

        // Scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Menu/Close Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="z-50 relative"
                aria-label="Toggle menu"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
            </button>

            {/* Dropdown Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100vh' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-x-0 top-0 bg-background z-40 overflow-hidden"
                    >
                        <div className="flex flex-col justify-start items-end h-full space-y-8 pt-20 pr-8">
                            {navigationItems.map((item, index) => (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{
                                        opacity: isClosing ? 0 : 1,
                                        y: isClosing ? -20 : 0
                                    }}
                                    transition={{
                                        delay: isClosing ? 0 : index * 0.1 + 0.3,
                                        duration: 0.3
                                    }}
                                    onClick={() => handleItemClick(item.href)}
                                    className="text-4xl font-display font-medium hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}