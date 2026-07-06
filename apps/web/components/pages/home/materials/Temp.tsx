"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@bbl/ui/lib/utils";
import { useState } from "react";

const projects = [
    {
        name: "Flavour Fusion",
        description: "A seamless food delivery experience designed for modern culinary explorers.",
        deliverables: "Product Design, Engineering",
        bgImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop",
        mockupImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        namePosition: "bottom-16 right-24",
        descPosition: "top-32 right-24 text-right max-w-[320px]",
        delivPosition: "top-1/2 left-[400px] -translate-y-1/2",
        mockupPosition: "bottom-12 left-[450px] w-[400px] h-[300px]"
    },
    {
        name: "NovaPay",
        description: "Reimagining personal finance with intuitive wealth tracking and borderless transfers.",
        deliverables: "Brand Identity, Product Design",
        bgImage: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2000&auto=format&fit=crop",
        mockupImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop",
        namePosition: "bottom-24 right-32",
        descPosition: "top-1/3 right-32 text-right max-w-[300px]",
        delivPosition: "bottom-32 left-[400px]",
        mockupPosition: "top-24 left-[450px] w-[350px] h-[450px]"
    },
    {
        name: "Greenleaf",
        description: "A sustainable e-commerce platform connecting eco-conscious consumers with ethical brands.",
        deliverables: "Product Strategy, E-commerce",
        bgImage: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop",
        mockupImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        namePosition: "top-1/2 left-[400px] -translate-y-1/2",
        descPosition: "top-24 left-[400px] max-w-[350px]",
        delivPosition: "bottom-24 right-1/4",
        mockupPosition: "top-1/2 right-24 -translate-y-1/2 w-[500px] h-[320px]"
    },
    {
        name: "Artistry",
        description: "Empowering creators with a powerful portfolio engine and vibrant community features.",
        deliverables: "Product Design, Engineering, Brand",
        bgImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop",
        mockupImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
        namePosition: "top-1/3 right-1/4 text-right",
        descPosition: "bottom-32 right-1/4 max-w-[300px] text-right",
        delivPosition: "top-32 left-[400px]",
        mockupPosition: "top-1/2 left-[400px] -translate-y-1/4 w-[420px] h-[280px]"
    }
];

const Portfolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Section className="bg-gray-950 min-h-dvh flex flex-col relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 text-white transition-colors duration-700">

            {/* Background Images Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {projects.map((project, index) => (
                    <img
                        key={`bg-${index}`}
                        src={project.bgImage}
                        alt=""
                        className={cn(
                            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                            hoveredIndex === index ? "opacity-40" : "opacity-0"
                        )}
                    />
                ))}
            </div>

            {/* Hover Elements Layer (Desktop Only) */}
            <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
                <Container className="h-full relative">
                    {projects.map((project, index) => {
                        const isActive = hoveredIndex === index;
                        return (
                            <div key={`elements-${index}`} className="absolute inset-0 w-full h-full">
                                {/* Mockup Image */}
                                <div
                                    className={cn(
                                        "absolute rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                        project.mockupPosition,
                                        isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                                    )}
                                >
                                    <img src={project.mockupImage} alt={project.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Large Project Name */}
                                <h3
                                    className={cn(
                                        "absolute font-serif text-[6rem] leading-none tracking-tight transition-all duration-700 delay-75 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                        project.namePosition,
                                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    {project.name}
                                </h3>

                                {/* Description */}
                                <p
                                    className={cn(
                                        "absolute text-lg font-medium max-w-[320px] transition-all duration-700 delay-100 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                        project.descPosition,
                                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    {project.description}
                                </p>

                                {/* Deliverables */}
                                <p
                                    className={cn(
                                        "absolute text-sm tracking-wide uppercase text-gray-300 transition-all duration-700 delay-150 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
                                        project.delivPosition,
                                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    {project.deliverables}
                                </p>
                            </div>
                        );
                    })}
                </Container>
            </div>

            <Container className="relative w-full z-20 flex-1 flex flex-col h-full pointer-events-none">

                {/* Header - Desktop */}
                <div className="hidden lg:flex justify-between items-start mb-auto pointer-events-auto">
                    <div className="w-[300px]"></div> {/* Spacer for left column */}
                    <div
                        className={cn(
                            "text-center transition-opacity duration-500",
                            hoveredIndex !== null ? "opacity-0" : "opacity-100"
                        )}
                    >
                        <h2 className="text-4xl font-semibold tracking-tight mb-4">Selected Work</h2>
                        <p className="text-gray-400 max-w-md mx-auto">A glimpse into our recent partnerships and the digital experiences we've crafted together.</p>
                    </div>
                </div>

                {/* Header - Mobile */}
                <div className="lg:hidden mb-12 pointer-events-auto">
                    <h2 className="text-4xl font-semibold tracking-tight mb-4">Selected Work</h2>
                    <p className="text-gray-400">A glimpse into our recent partnerships and the digital experiences we've crafted together.</p>
                </div>

                {/* Content Layout */}
                <div className="flex-1 flex flex-col lg:flex-row pointer-events-none">

                    {/* Left Column: Interactive List & Button (Desktop) */}
                    <div className="hidden lg:flex flex-col w-[300px] pointer-events-auto mt-auto">
                        <div className="flex flex-col gap-2 mb-8">
                            {projects.map((project, index) => (
                                <div
                                    key={`link-${index}`}
                                    className="w-fit"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <button
                                        className={cn(
                                            "px-5 py-2.5 rounded-full border transition-all duration-300 text-left cursor-pointer",
                                            hoveredIndex === index
                                                ? "border-white bg-white/10 backdrop-blur-md text-white shadow-lg"
                                                : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        <span className="text-lg font-medium">{project.name}</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* View All Work Button directly below the links */}
                        <button className="w-fit text-sm font-medium tracking-wide border border-white/20 hover:bg-white hover:text-black transition-colors rounded-full px-6 py-3">
                            View All Work
                        </button>
                    </div>

                    {/* Mobile Stacked Layout */}
                    <div className="lg:hidden flex flex-col gap-8 w-full pointer-events-auto">
                        {projects.map((project, index) => (
                            <div key={`mobile-${index}`} className="flex flex-col gap-4 rounded-3xl bg-gray-900 border border-white/10 overflow-hidden">
                                <div className="relative w-full aspect-video">
                                    <img src={project.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                                    <div className="absolute inset-6">
                                        <img src={project.mockupImage} alt={project.name} className="w-full h-full object-cover rounded-xl shadow-2xl" />
                                    </div>
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">{project.deliverables}</p>
                                    <h3 className="text-3xl font-serif mb-3">{project.name}</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>
                                </div>
                            </div>
                        ))}
                        <button className="text-sm font-medium tracking-wide border border-white/20 hover:bg-white hover:text-black transition-colors rounded-full px-6 py-3 w-full mt-4">
                            View All Work
                        </button>
                    </div>

                </div>

            </Container>
        </Section>
    );
};

export default Portfolio;
