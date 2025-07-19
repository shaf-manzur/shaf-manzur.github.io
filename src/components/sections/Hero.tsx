import { Button } from "@/components/ui/button"

const hero = {
    name: "Shaf Manzur",
    description: "I am a software engineer with a passion for building web applications.",
    role: "Software Engineer",
    location: "New York, NY"
}

export default function Hero() {
    return (
        <div id="hero" className="min-h-screen w-full flex items-center justify-center bg-background p-4 lg:p-16">
            <div className="max-w-4xl mx-auto text-center">
                <div className="space-y-6 lg:space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-7xl font-bold text-foreground tracking-tight">
                            Hi, I'm{" "}
                            <span className="text-primary font-display">
                                {hero.name}
                            </span>
                        </h1>
                        <p className="text-lg lg:text-2xl text-muted-foreground font-medium">
                            {hero.role}
                        </p>
                        <p className="text-sm lg:text-lg text-muted-foreground">
                            📍 {hero.location}
                        </p>
                    </div>

                    <p className="text-base lg:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
                        {hero.description}
                    </p>

                    <Button asChild>
                        <a
                            href="mailto:smanzur@buffalo.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact Me
                        </a>
                    </Button>

                </div>
            </div>
        </div>
    );
}
