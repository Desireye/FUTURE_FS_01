import { ArrowBigRightDash, ExternalLink, Github } from "lucide-react"
import { cn } from "../lib/utils"

const projects = [
    {
        id: 1,
        title: "ThriftAll Landing Page",
        desc: "An E-Commerce website landing page using PHP and MySQL",
        image: "/projects/ta.png",
        fullImage: "/projects/ThriftAll.png",
        tags: ["PHP", "CSS", "MySQL", "XAMPP"],
        liveURl: "https://desireye.xo.je/",
        githubURL: "https://github.com/Desireye/php_ecommerce_project"
    },
    {
        id: 2,
        title: "BizBridge Landing Page",
        desc: "An Artisan website landing page using Node.JS",
        image: "/projects/bb.png",
        fullImage: "/projects/BizBridge.png",
        tags: ["Node.JS", "CSS", "MongoDB"],
        liveURl: "#",
        githubURL: "https://github.com/Desireye/BizBridge"
    }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Displayed below are some of my recent projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, key) => (
                    <div key={key} 
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                       <div className="h-60 overflow-hidden">
                            <img src={project.image} alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:hidden"
                            />
                            <img src={project.fullImage} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div> 

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.desc}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                <a href={project.liveURl} target="_blank"
                                className="text-foreground/80 hover:text-primary duration-300"
                                >
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubURL} target="_blank"
                                className="text-foreground/80 hover:text-primary duration-300"
                                >
                                    <Github size={20}/>
                                </a>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/Desireye" target="_blank"
                className={cn("cosmic-button w-fit flex items-center mx-auto gap-2", 
                "hover:gap-4 duration-500")}>
                    Check Out My GitHub <ArrowBigRightDash />
                </a>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection