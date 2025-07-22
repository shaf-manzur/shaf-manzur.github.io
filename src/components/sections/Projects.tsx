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
import AppSection from "@/components/common/appSection"

interface Project {
    name: string;
    stack: string[];
    description: string;
    github: string;
    demo: string;
    video: string;
}

const projects: Project[] = [
    {
        name: "Project 1",
        stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        github: "https://www.google.com",
        demo: "https://www.google.com",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        name: "Project 2",
        stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        description: "Description of project 2",
        github: "https://www.google.com",
        demo: "https://www.google.com",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
]

export default function Projects() {
    return (
        <AppSection
            id="projects"
            title="Projects"
            description="A selection of my best work that reflects my skills and experience in Software Engineering. Each project was completed with great attention to detail and using modern technologies."
        >
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                    <Card key={index}>
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
                                    <Button asChild>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            Demo
                                        </a>
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </Button>
                                </CardFooter>
                            </div>

                            <div className="flex-1 lg:flex-none lg:w-1/2">
                                <CardContent>
                                    <AspectRatio ratio={16 / 9}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${project.video.split('v=')[1]}`}
                                            title={`${project.name} demo video`}
                                            className="w-full h-full"
                                            allowFullScreen
                                        />
                                    </AspectRatio>
                                </CardContent>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </AppSection>
    );
}
