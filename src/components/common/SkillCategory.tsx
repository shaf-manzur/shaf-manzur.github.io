import { motion } from "motion/react"

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
                            <span className="text-md">
                                {skillName}
                            </span>
                            <span className="text-xs ">
                                {percentage}%
                            </span>
                        </div>
                        <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary rounded-full"
                                initial={{ width: "0%" }}
                                whileInView={{ width: `${percentage}%` }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 2,
                                    delay: skillIndex * 0.3,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
