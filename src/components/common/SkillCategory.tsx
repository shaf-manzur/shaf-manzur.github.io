interface SkillCategoryData {
    name: string;
    skills: [string, number][];
}

interface SkillCategoryProps {
    category: SkillCategoryData;
}

export default function SkillCategory({ category }: SkillCategoryProps) {
    return (
        <div className="space-y-4">
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
    );
}
