import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


const hero = {
    name: "Shaf Manzur",
    description: "A BSCS student at SUNY University at Buffalo, bridging machine learning with full-stack web development to engineer innovative, user-centric solutions. Equipped with a powerful stack; NextJS, FastAPI, and Firebase, I thrive in hackathon environments that demand both speed and creativity. Join me as I turn ideas into impactful digital experiences!",
    location: "New York, NY"
}

export default function Hero() {
    return (
        <div id="hero" className="lg:py-40">
            <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold text-foreground mb-2">
                        Hello there! I'm <span className="text-primary">{hero.name}</span>
                    </h1>
                    <p className="text-muted-foreground text-sm mb-1">
                        📍 {hero.location}
                    </p>
                    <p className="mb-6 ">
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
                <div className="flex-shrink-0">
                    <Avatar className="size-64">
                        <AvatarImage src="/src/assets/profile.jpg" />
                    </Avatar>
                </div>
            </div>
        </div>
    );
}
