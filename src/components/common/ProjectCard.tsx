import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Project } from "@/lib/types"

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card>
            <div className="flex flex-col lg:flex-row">
                {/* Left section - Card elements */}
                <div className="flex-1 lg:flex-none lg:w-1/2">
                    <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
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
                        <img
                            src={project.image}
                            alt={`${project.name} screenshot`}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}
