import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const skills = {
    languages: [
        ["JavaScript", "100%"],
        ["Python", "95%"],
        ["C/C++", "90%"],
        ["Java", "70%"],
        ["Dart", "60%"],
        ["Haskell", "50%"]
    ],
    frameworks: [
        ["React", "100%"],
        ["NextJs", "90%"],
        ["FastAPI", "90%"],
        ["Flask", "85%"],
        ["Express.Js", "80%"]
    ],
    databases: [
        ["Firebase", "100%"],
        ["Redis", "90%"],
        ["Milvus", "80%"],
        ["PostgreSQL", "70%"],
        ["Pinecone", "20%"]
    ],
    libraries: [
        ["Material UI", "100%"],
        ["Tensorflow", "90%"],
        ["Keras", "80%"],
        ["Pandas", "70%"],
        ["NumPy", "70%"],
        ["Matplotlib", "60%"]
    ]
};

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

                <div className="">
                    {/* Skills content */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                            <CardAction>Card Action</CardAction>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
