import { Code } from "lucide-react"
import { cn } from "../lib/utils"

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-bold text-3xl md:text-4xl mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1n md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <p className="text-muted-foreground">
                    With over 4 years of experience in web development, I specialize
                    in creating responsive and accessible websites and web applications using modern frameworks and languages.
                </p>

                <p className="text-muted">
                    I am passionate about web development and am in a constant state of practice in 
                    learning and using new technologies.
                </p>
            </div>
            <div className="flex flex-col gap-4 pt-4 max-w-3xs justify-center">
                <a href="#contact" className="cosmic-button">Get In Touch!</a>

                 <a href="" 
                 className={cn("px-6 py-2 rounded-full border border-primary text-primary", 
                "hover:bg-primary/15 transition-colors duration-300")}>
                    Download My CV!
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection