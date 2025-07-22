interface SkillCategory {
    name: string;
    skills: [string, number][];
}

const skills: SkillCategory[] = [
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
        <div id="skills">
            <div>
                <div className="py-4">
                    <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                        <span className="text-primary font-display">Skills</span>
                    </h2>
                    <p className="text-sm max-w-2xl">Technical expertise and proficiency levels across various programming languages, frameworks, and tools.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {skills.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4 max-w-xs">
                            <h3 className="text-3xl font-semibold text-foreground">
                                {category.name}
                            </h3>
                            <div className="space-y-3">
                                {category.skills.map(([skillName, percentage], skillIndex) => (
                                    <div key={skillIndex} className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground font-medium">
                                                {skillName}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {percentage}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
