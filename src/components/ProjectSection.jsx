import { ArrowRight, ExternalLink } from "lucide-react";

const projects=[
    {
        id:1,
        title:"Donut Animation",
        description:"Designed And Prototyped a cool donut animation in figma",
        image:"/projects/donut.png",
        tags:["Figma"],
       demourl:"https://www.figma.com/design/F25vX7KuTKBRjEhsbcgZV9/Untitled?t=yZ29tJyHFXkxDZEt-1",
        
    },
    {
        id:2,
        title:"DropIn-The Collab website",
        description:"Desgined a sleek mobile UX/UI of a collabration website ",
        image:"/projects/mobile.png",
        tags:["Figma"],
       demourl:"https://www.figma.com/design/GFLljhxu1vQ45l8ubL7sQJ/DropIn?node-id=0-1&t=yZ29tJyHFXkxDZEt-1",
    },
     {
        id:3,
        title:"Nike Shoe",
        description:"Designed a modern and dynamic mobile UX/UI for a Nike shoe shopping experience." ,
        image:"/projects/nike.png",
        tags:["Figma"],
       demourl:"https://www.figma.com/design/CBRiIlhdnCPyPM9Y4qn9uZ/NIKE-SHOE?t=YyJu83xn8A8V5l6s-1",
    },
];

 export const ProjectSection =() => {
    return(
        <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {" "}
        Featured <span className="text-primary">Projects</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects.Each project is designed and carefully
             crafted with attention to detail,performance and user interaction</p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card hover"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag)=>(
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary">
                                    {tag}
                                </span>
                            ))}
                        </div>

                    
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            <a href={project.demourl} 
                            target="_blank" 
                            className="text-foreground/100 hover:text-primary transition-colors duration-300 "> 
                            <ExternalLink size={20} /></a>
                            
                            </div>
                    </div>
                    </div>

                    </div>
                  ))}
                
            </div >
            <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Aditiii-07">
                Check My GitHub <ArrowRight size={16} />
            </a>
                </div></div>
        </section>
    )
};
