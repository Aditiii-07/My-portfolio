import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/themetoggle";
import { StarBackground } from "@/components/StarBackground";

export const Home = () =>{

    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle */}
        <ThemeToggle />

        {/* {Background effect} */}
        <StarBackground />
        {/* {navbar} */}
          <Navbar />
        {/* {main content} */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
             <Footer/>
        </main>
        {/* {footer} */}




    </div>
    );
}