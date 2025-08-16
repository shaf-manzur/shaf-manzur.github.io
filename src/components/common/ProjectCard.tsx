import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Project } from "@/lib/types"
import { motion } from "motion/react"

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
        >
            <Card>
                <div className="flex flex-col lg:flex-row">
                {/* Left section - Card elements */}
                <div className="flex-1 lg:flex-none lg:w-1/2">
                    <CardHeader>
                        <CardTitle className="text-3xl">{project.name}</CardTitle>
                        <CardDescription>
                            {project.stack.join(' / ')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="py-4">
                        <p>{project.description}</p>
                    </CardContent>
                    <CardFooter className="flex gap-3 pb-4 lg:pb-0">
                        {project.demo && (
                            <Button asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    Demo
                                </a>
                            </Button>
                        )}
                        {project.github && (
                            <Button variant="outline" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </Button>
                        )}
                        {project.devpost && (
                            <Button variant="outline" asChild>
                                <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                                    Devpost
                                </a>
                            </Button>
                        )}
                    </CardFooter>
                </div>

                <div className="flex-1 lg:flex-none lg:w-1/2">
                    <CardContent>
                        <AspectRatio ratio={16 / 9}>
                            <img
                                src={project.image}
                                alt={`${project.name} screenshot`}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </AspectRatio>
                    </CardContent>
                </div>
            </div>
        </Card>
        </motion.div>
    );
}
