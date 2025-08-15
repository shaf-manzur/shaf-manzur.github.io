import AppSection from "@/components/common/appSection"
import ProjectCard from "@/components/common/ProjectCard"
import { Project } from "@/lib/types"

const projects: Project[] = [

    {
        name: "claude-tokenizer",
        stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Vercel"],
        description: "The official unofficial Claude 4 tokenizer. Uses Anthropic's tokenizer API for the latest models.",
        demo: "https://claude-tokenizer.vercel.app/",
        github: "https://github.com/freshfriedfish/claude-tokenizer",
        image: "ct.jpg",
    },
    {
        name: "osu!Gallery",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI", "Drizzle ORM", "Neon (PostgreSQL)", "NextAuth.js", "Vercel"],
        description: "Osu!Gallery (stylized as osu!) is a Next.js 15 web app focused on osu! slider art. Users sign in via osu! and can upload, browse, and interact with artwork pages in addition with the ability to tag, comment, and favorite. All activity is saved in Neon Postgres. Full-text search lets players quickly find their desired artwork.",
        demo: "https://osugallery.com/",
        image: "osugallerylander.jpg",
    },
    {
        name: "gpt-studio",
        stack: ["Vite", "React.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        description: "A local-only CLI tool that visualizes a Claude AI data export (users.json, projects.json, conversations.json) via a sleek dark-themed React UI served from a tiny embedded HTTP server. Everything is pre-built and shipped as static assets, use npx gpt-studio to use.",
        image: "studio.jpg",
        demo: "https://airismlabs.github.io/demo/",
    },
    {
        name: "SVGen",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI", "Vercel AI SDK", "Fal AI API", "Python", "Potrace"],
        description: "SVGen is an AI powered creative engine that turns any text prompt into clean, resolution-independent SVG artwork. Because it outputs structured vector code instead of pixels, every graphic can be scaled, recolored, and animated without loss, slashing design iteration time for developers and designers. Our model understands brand guidelines and generates reusable icon systems, logos, and illustrations that slot straight into modern design toolchains.",
        demo: "https://nvidiav0.vercel.app/",
        github: "https://github.com/freshfriedfish/nvidiav0",
        image: "svgen.jpg",
    },
    {
        name: "Radial-Designer",
        stack: ["Pixi.js", "Tweakpane", "JavaScript", "HTML", "CSS"],
        description: "Radial-Designer is a tool to help artists create geometric patterns. The tool allows users to import an SVG path and export an SVG path that is radially symemtrical. The SVG path is radially symmetrical, meaning it is copied and repeated around the origin.",
        demo: "https://freshfriedfish.github.io/radial-designer/",
        github: "https://github.com/freshfriedfish/radial-designer",
        image: "rad-deg-example1.jpg",
    },
    {
        name: "CommunitySOS",
        stack: ["Next.js", "Tailwind CSS", "React", "Supabase"],
        description: "CommunitySOS is a web-based platform designed to rapidly mobilize local volunteers for urgent, non-traditional emergencies—like salvaging furniture after a campus flood. Inspired by a real-life incident, the platform empowers communities to post and join nearby help requests in time-sensitive situations. Built with React, TailwindCSS, Next.js, and Supabase, CommunitySOS emphasizes ease of use and real-time coordination.",
        demo: "https://hack-psu-2024-community-sos.vercel.app/",
        github: "https://github.com/freshfriedfish/communitysos",
        devpost: "https://devpost.com/software/communitysos",
        image: "communitysos.jpg",
    },
    {
        name: "FlashLang",
        stack: ["React", "Tailwind CSS", "Google Cloud Platform", "NLP APIs"],
        description: "FlashLang is an intelligent language learning app that creates personalized vocabulary flashcards from user-provided text, speech, or images. Designed to streamline the often  process of building flashcards, it automatically extracts key words, translates them, and generates learning aids. FlashLang addresses the gap in traditional learning tools.",
        devpost: "https://devpost.com/software/flashlang",
        github: "https://github.com/NayeemK14628/FlashLang/tree/main/FlashLang",
        image: "flashlang.jpg",

    },
];

export default function Projects() {
    return (
        <AppSection
            id="projects"
            title="Projects"
            description="A selection of my best work that reflects my skills and experience in Software Engineering. Each project was completed with great attention to detail and using modern technologies."
        >
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </AppSection>
    );
}
