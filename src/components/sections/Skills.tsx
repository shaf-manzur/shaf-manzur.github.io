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
        <div id="skills" className="min-h-screen w-full flex items-center justify-center bg-gray-200 p-16">
            <h1 className="text-6xl font-bold text-gray-800">Skills</h1>
        </div>
    );
}
