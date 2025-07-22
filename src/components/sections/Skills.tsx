import AppSection from "@/components/common/appSection"
import SkillCategory from "@/components/common/SkillCategory"

interface SkillCategoryData {
    name: string;
    skills: [string, number][];
}

const skills: SkillCategoryData[] = [
    {
        name: "Languages",
        skills: [
            ["JavaScript", 100],
            ["Python", 95],
            ["C/C++", 90],
            ["Java", 70],
            ["Dart", 60],
            ["Haskell", 50]
        ]
    },
    {
        name: "Frameworks",
        skills: [
            ["React", 100],
            ["NextJs", 90],
            ["FastAPI", 90],
            ["Flask", 85],
            ["Express.Js", 80]
        ]
    },
    {
        name: "Databases",
        skills: [
            ["Firebase", 100],
            ["Redis", 90],
            ["Milvus", 80],
            ["PostgreSQL", 70],
            ["Pinecone", 20]
        ]
    },
    {
        name: "Libraries",
        skills: [
            ["Material UI", 100],
            ["Tensorflow", 90],
            ["Keras", 80],
            ["Pandas", 70],
            ["NumPy", 70],
            ["Matplotlib", 60]
        ]
    }
];

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
