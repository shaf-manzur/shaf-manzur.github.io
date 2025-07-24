import AppSection from "@/components/common/appSection"
import SkillCategory from "@/components/common/SkillCategory"

interface SkillCategoryData {
    name: string;
    skills: [string, number][];
}

const skills: SkillCategoryData[] = [
    {
        "name": "Languages",
        "skills": [
            ["TypeScript", 100],
            ["JavaScript", 90],
            ["C", 80],
            ["Python", 50],
            ["OCaml", 30],
        ]
    },
    {
        "name": "Backend & Infra",
        "skills": [
            ["Vercel", 90],
            ["PostgreSQL", 80],
            ["Drizzle ORM", 80],
            ["Auth", 70],
            ["Supabase", 60],
            ["Google Cloud Platform", 50]
        ]
    },
    {
        "name": "Frameworks",
        "skills": [

            ["React", 100],
            ["Next.js", 90],
            ["Vite", 80],
            ["Express.js", 70],
            ["FastAPI", 60],
        ]
    },

    {
        "name": "AI/ML & Libraries",
        "skills": [
            ["Vercel AI SDK", 100],
            ["OpenAI", 90],
            ["Tailwind CSS", 80],
            ["Shadcn UI", 80],
            ["NumPy", 60],
            ["Matplotlib", 60],
        ]
    }
]

export default function Skills() {
    return (
        <AppSection
            id="skills"
            title="Skills"
            description="Technical expertise and proficiency levels across various programming languages, frameworks, and tools."
        >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {skills.map((category, categoryIndex) => (
                    <SkillCategory
                        key={categoryIndex}
                        category={category}
                    />
                ))}
            </div>
        </AppSection>
    );
}
