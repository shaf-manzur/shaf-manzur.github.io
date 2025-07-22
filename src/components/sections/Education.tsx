import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import AppSection from "@/components/common/appSection"

const education = [
    {
        name: "Stuyvesant High School",
        degree: "High School Diploma",
        year: "2017-2021",
        grad: "June 2021",
        image: "/Stuy_logo.png"
    },
    {
        name: "SUNY University at Buffalo",
        degree: "Bachelor of Science in Computer Science",
        year: "2022-2026",
        grad: "May 2026",
        image: "/UB_logo.png"
    },

]

export default function Education() {
    return (
        <AppSection
            id="education"
            title="Education"
            description="Academic journey and achievements that shaped my foundation in computer science and technology."
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-fit mx-auto justify-items-center">
                {education.map((edu, index) => (
                    <Card key={index} className="">
                        <CardHeader>
                            <CardTitle>{edu.name}</CardTitle>
                            <CardDescription>{edu.degree}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={edu.image}
                                alt={edu.name}
                                className="w-70 h-70"
                            />
                        </CardContent>
                        <CardFooter>
                            <p>{edu.year} • {edu.grad}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </AppSection>
    );
}
