import { Button } from "@/components/ui/button"
import AppSection from "@/components/common/appSection"
import ProjectCard from "@/components/common/ProjectCard"
import { useState } from "react"
import { Project } from "@/lib/types"

const projects: Project[] = [
    {
        name: "Project 1",
        stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        description: "Description of project 1",
        github: "https://www.google.com",
        demo: "https://www.google.com",
        image: "placeholder.jpg",
    },
    {
        name: "Project 2",
        stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        description: "Description of project 2",
        github: "https://www.google.com",
        demo: "https://www.google.com",
        image: "placeholder.jpg",
    },
    {
        name: "Project 3",
        stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        description: "Description of project 3",
        demo: "https://www.google.com",
        image: "placeholder.jpg",
    },
    {
        name: "Project 4",
        stack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        description: "Description of project 4",
        github: "https://www.google.com",
        demo: "https://www.google.com",
        image: "placeholder.jpg",
    },
]

export default function Projects() {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

    return (
        <AppSection
            id="projects"
            title="Projects"
            description="A selection of my best work that reflects my skills and experience in Software Engineering. Each project was completed with great attention to detail and using modern technologies."
        >
            <div className="grid grid-cols-1 gap-6">
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                {!showAllProjects && projects.length > 3 && (
                    <div className="flex justify-center">
                        <Button
                            variant="outline"
                            onClick={() => setShowAllProjects(true)}
                        >
                            See More Projects
                        </Button>
                    </div>
                )}
            </div>
        </AppSection>
    );
}
