import { motion } from "motion/react"
import { ReactNode } from "react"

interface AppSectionProps {
    id: string
    title: string
    description: string
    children: ReactNode
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const titleVariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6
        }
    }
}

const descriptionVariants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6
        }
    }
}

const contentVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}

export default function AppSection({ id, title, description, children }: AppSectionProps) {
    return (
        <motion.div
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div>
                <div className="py-4">
                    <motion.h2
                        className="text-3xl lg:text-5xl font-bold text-foreground mb-4"
                        variants={titleVariants}
                    >
                        <span className="text-primary font-display">{title}</span>
                    </motion.h2>
                    <motion.p
                        className="text-sm max-w-2xl"
                        variants={descriptionVariants}
                    >
                        {description}
                    </motion.p>
                </div>

                <motion.div variants={contentVariants}>
                    {children}
                </motion.div>
            </div>
        </motion.div>
    )
}
