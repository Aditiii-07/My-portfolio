import { Instagram, Linkedin, Mail, MapPin, MessagesSquare, Phone, PlaneIcon, Send, Twitter } from "lucide-react"
import {cn} from "@/lib/utils";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const ContactSection =()=>{
    const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_eqm7syr', 'template_3b9z9k8', form.current, 'SZ8jM1SIsEcD9hZNa')
          .then(
            (result) => {
              console.log(result.text);
              alert('Message sent successfully!');
            },
            (error) => {
              console.log(error.text);
              alert('Something went wrong. Please try again.');
            }
          );
    
        e.target.reset(); // Optional: clears the form
        };
   
    return<section id="contact"className=" px-4 relative-bg-secondary/30 py-24">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate feel free to reach out.
                I'm always open to discussing new opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        {" "}
                        Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />{" "}</div>
                              <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:aditiiisingh007@gmail.com" 
                            target="_blank"
                            className=" relative z-10 text-muted-foreground hover:text-primary transition-colors">
                              aditiiisingh007@gmail.com
                            </a>
                        </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <Send className="h-6 w-6 text-primary" />{" "}</div>
                              <div>
                            <h4 className="font-medium">Telegram</h4>
                            <a href="https://t.me/aditi_singh007" 
                            target="_blank"
                            className=" relative z-10 text-muted-foreground hover:text-primary transition-colors indent-8">
                                  https://t.me/aditi_singh007
                            </a>
                        </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />{" "}</div>
                              <div>
                            <h4 className="font-medium">Adress</h4>
                            <a 
                            className=" relative z-10 text-muted-foreground hover:text-primary transition-colors">
                              Prayagraj,Uttar Pradesh,India
                            </a>
                        </div>
                        </div> 
                    </div>
                    <div className="pt-8">
                        <h4>Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href=" https://www.instagram.com/nut_shells07/"
                            className=" relative z-10 text-muted-foreground hover:text-primary transition-colors"
                            target="_blank">
                            <Instagram /></a>
                            <a href="https://x.com/aditii_s007?t=pdRGsRNqAovoKGAgWFrXkQ&s=09"
                            className=" relative z-10 text-muted-foreground hover:text-primary transition-colors"
                            target="_blank">
                            <Twitter /></a>
                            <a href="https://www.linkedin.com/in/aditi-singh-1381a3312"
                            className=" relative z-10 text-muted-foreground hover:text-primary transition-colors"
                            target="_blank">
                            < Linkedin/></a>

                        </div>
                    </div>
                    
            </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs z-10" >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form  ref={form} onSubmit={sendEmail} className="space-y-6 " > 
                            <div > 
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                    </label>
                                <input type="text"
                                id="name"
                                name="user_name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Aditi Singh..."
                                />
                            </div>

                             <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                    </label>
                                <input type="email"
                                id="email"
                                name="user_email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="JohnDoe@gmail.com"
                                />
                            </div>

                             <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                    </label>
                                <textarea type="text"
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello I'd like to talk about..."
                                />
                            </div>
                            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}>Send Message</button>
                        </form>

                    </div>


                </div>

        </div>

    </section>
}