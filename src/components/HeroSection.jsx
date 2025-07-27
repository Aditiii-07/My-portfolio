import { ArrowDown } from "lucide-react";


export const HeroSection =() =>{
    return(
        <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"> 
        <div className="space-y-6 ">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span  className=" text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Aditi</span>
            <span className=" text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Singh</span></h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Creative UI/UX designer and frontend developer focused on building intuitive, responsive interfaces while continuously learning and improving user-centered digital experiences.</p>
        <div className="pt-4 opacity-0 animate animate-fade-in-delay-4">
             <a href="#projects" className="cosmic cosmic-button">View My Work</a>
        </div>
        </div >
        <div className="absolute bottom-8 left-1?2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">  Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
       
        </section>
    );
};