import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
    {
        name: "SUNY University at Buffalo",
        degree: "Bachelor of Science in Computer Science",
        year: "2022-2026",
        grad: "May 2026",
        image: "src/assets/UB_logo.png"
    },
    {
        name: "Stuyvesant High School",
        degree: "High School Diploma",
        year: "2017-2021",
        grad: "June 2021",
        image: "src/assets/Stuy_logo.png"
    }
]

export default function Education() {
    return (
        <div id="education" className="min-h-screen w-full bg-background py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                        My <span className="text-primary font-display">Education</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Academic journey and achievements that shaped my foundation
                    </p>
                </div>

                <div className="space-y-6 lg:space-y-8">
                    {education.map((edu, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl lg:text-3xl font-bold text-primary">
                                            {edu.name.charAt(0)}
                                        </span>
                                    </div>

                                    <div className="flex-1 space-y-2">
                                        <CardTitle className="text-xl lg:text-2xl">
                                            {edu.name}
                                        </CardTitle>
                                        <CardDescription className="text-base lg:text-lg">
                                            {edu.degree}
                                        </CardDescription>
                                    </div>

                                    <div className="text-right space-y-1">
                                        <div className="text-sm lg:text-base font-semibold text-primary">
                                            {edu.year}
                                        </div>
                                        <div className="text-xs lg:text-sm text-muted-foreground">
                                            Graduated: {edu.grad}
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <div className="w-full h-px bg-border"></div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 lg:mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/50 rounded-full">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-sm text-foreground">
                            Currently pursuing my degree
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
