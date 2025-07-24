import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { motion } from "motion/react"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const hero = {
    name: "Shaf Manzur",
    description: "A CS student at UB, blending machine learning with full-stack web development. With a toolkit spanning NextJS, ExpressJS, and Google Cloud, I refine my skills through intense hackathons.",
    location: "New York, NY"
}

const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    slideUp: { opacity: 0, y: 20 },
    slideUpVisible: { opacity: 1, y: 0 },
    slideLeft: { opacity: 0, x: -20 },
    slideLeftVisible: { opacity: 1, x: 0 }
}

export default function Hero() {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            // Hide indicator when user scrolls down more than 50px
            if (scrollY > 50) {
                setShowScrollIndicator(false)
            } else {
                setShowScrollIndicator(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToNext = () => {
        const nextSection = document.getElementById('projects')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div id="hero" className="lg:py-40 relative min-h-screen lg:min-h-0 flex flex-col justify-center lg:justify-start">
            <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-foreground mb-2">
                        <motion.span
                            initial="slideUp"
                            animate="slideUpVisible"
                            variants={animationVariants}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            Hello there! I'm{" "}
                        </motion.span>
                        <motion.span
                            className="text-primary"
                            initial="hidden"
                            animate="visible"
                            variants={animationVariants}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            {hero.name}
                        </motion.span>
                    </h1>
                    <motion.p
                        className="text-muted-foreground text-sm mb-1"
                        initial="slideLeft"
                        animate="slideLeftVisible"
                        variants={animationVariants}
                        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                    >
                        📍 {hero.location}
                    </motion.p>
                    <motion.p
                        className="mb-6"
                        initial="slideLeft"
                        animate="slideLeftVisible"
                        variants={animationVariants}
                        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                    >
                        {hero.description}
                    </motion.p>
                    <motion.div
                        initial="slideLeft"
                        animate="slideLeftVisible"
                        variants={animationVariants}
                        transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                    >
                        <Button asChild>
                            <a
                                href="mailto:smanzur@buffalo.edu"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact
                            </a>
                        </Button>
                    </motion.div>
                </div>
                <motion.div
                    className="flex-shrink-0"
                    initial="hidden"
                    animate="visible"
                    variants={animationVariants}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                    <Avatar className="size-64">
                        <AvatarImage src="/profile.jpg" />
                    </Avatar>
                </motion.div>
            </div>

            {/* Scroll to Explore Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: showScrollIndicator ? 1 : 0,
                    y: showScrollIndicator ? 0 : 20
                }}
                transition={{ duration: 0.5, delay: 2.5 }}
            >
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={scrollToNext}
                        className="flex items-center gap-2"
                    >
                        <motion.span
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            Scroll to explore
                        </motion.span>
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
}
