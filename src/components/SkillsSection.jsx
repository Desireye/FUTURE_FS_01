const skills = [
    //Frontend
    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "JavaScript", level: 50, category: "Frontend"},
    {name: "Tailwind CSS", level: 85, category: "Frontend"},
    {name: "React", level: 50, category: "Frontend"},

    //Backend
    {name: "PHP", level: 70, category: "Backend"},
    {name: "Node.JS", level: 60, category: "Backend"},
    {name: "Express.JS", level: 55, category: "Backend"},
    {name: "MongoDB", level: 80, category: "Backend"},
    {name: "MySQl", level: 90, category: "Backend"},

    //Tools
    {name: "Git/GitHub", level: 70, category: "Tools"},
    {name: "VS Code", level: 80, category: "Tools"},
]

const SkillsSection = () => {
  return (
    <section id="skills" className="md:py-24 md:px-24 sm:px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, key) => (
                    <div key={key}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <span className="text-primary font-semibold">{skill.category}</span>
                        </div>

                        <div className="w-full bg-secondary-50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate- [grow_1.5s_ease-out"
                                style={{width: skill.level + "%"}}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SkillsSection