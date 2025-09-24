import { ArrowDownRight } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
       <div className="container max-w-4xl ml-0 z-10">
            <div className="space-y-6">
                <h1 className="text-left text-4xl md:text-8xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hello. </span> <br />
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">I am </span>
                    <span className="text- opacity-0 animate-fade-in-delay-2">Soneye </span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-3">Modesireoluwa</span>
                </h1>

                <div className="text-muted-foreground text-lg md:text-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    <span className="flex justify-end font-mono">
                        <ArrowDownRight className="h-9 w-15" />
                       A Fullstack Developer
                    </span>
                </div>

                <div className="flex justify-start">
                    <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-4">
                        View My Work
                    </a>
                </div>
            </div>
       </div>
    </section>
  )
}

export default HeroSection