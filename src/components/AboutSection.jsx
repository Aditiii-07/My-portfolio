import { BotIcon,HammerIcon } from "lucide-react"
import { User } from "lucide-react"
import { Code} from "lucide-react"


export const AboutSection=()=>{
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>

            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Designer & <br></br>Machine Learning Enthusiast</h3>
                    <p className="text-muted-foreground">
                       As a beginner UI/UX designer, I enjoy using Figma to create clean, intuitive,
                        and user-friendly interfaces. I’m constantly learning design principles, wireframing techniques, and prototyping workflows to 
                       enhance user experience and bring creative digital ideas to life.

                    </p>
                    <p className="text-muted-foreground">
                        I'm a machine learning enthusiast exploring the world of algorithms, data, and
                         intelligent systems. I’m particularly interested in how ML can solve real-world problems,
                          and I’m learning through
                         hands-on projects in Python, focusing on data preprocessing, model building, and evaluation.
                    </p>

                    < div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                        {" "}
                        Get In Touch
                        </a>
                          <a 
                          target="_blank"
                          href="https://drive.google.com/file/d/1Wu052jaDO0XnZ4Wu4eZhre1ZMZoeLNki/view?usp=drivesdk" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        {" "}
                        Resume
                        </a>
                         
                    </div>      
                    </div>
                    <div className="grid grid-cols-1 gap 6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded full bg-primary/10">
                        <Code className="h-6 w-6 text-primary" />

                        </div>
                        <div className="text-left">
                        <h4 className="font-semibold text-lg">Web Developer</h4>
                        <p className="text-muted-foreground">Creative frontend web developer focused on building seamless, user-friendly digital experiences with a passion for clean design</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded full bg-primary/10">
                        <User className="h-6 w-6 text-primary" />

                        </div>
                         <div className="text-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p className="text-muted-foreground">Beginner UI/UX designer exploring Figma , blending creativity  to build  smart interfaces.</p>
                        </div>
                    </div>
                </div> <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded full bg-primary/10">
                        < HammerIcon className="h-6 w-6 text-primary" />

                        </div>
                         <div className="text-left">
                        <h4 className="font-semibold text-lg">3D Mechanical Designs</h4>
                        <p className="text-muted-foreground"> mechanical designer crafting 
                             functional models and assemblies for engineering and innovation</p>
                        </div>
                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded full bg-primary/10">
                        <BotIcon className="h-6 w-6 text-primary" />

                        </div>
                         <div className="text-left">
                        <h4 className="font-semibold text-lg">Data Science</h4>
                        <p className="text-muted-foreground">Aspiring data scientist exploring data analysis, visualization, and ML to solve problems</p>
                        </div>
                    </div>

                </div>
                </div>
                </div>
               
            
        </div>
    </section>

    
}