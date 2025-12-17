"use client";

import Navbar from "@/components/Navbar";
import { TRACKS } from "@/data/tracks";
import { Download, ExternalLink, ChevronDown, ChevronUp, Layers, Cpu, Radio, Network, Shield, Lightbulb, GraduationCap, Users } from "lucide-react";
import { useState } from "react";

// Helper to get icon for track (optional, adding visual flair)
const getTrackIcon = (index: number) => {
    const icons = [
        Lightbulb, // Power
        Cpu, // Power Electronics
        Radio, // Instrumentation
        Network, // AI
        Network, // Comm
        Cpu, // Next Gen Comp
        Shield, // Security
        Radio, // RF
        Cpu, // Semiconductor
        Cpu, // VLSI
        Layers, // Nano
        GraduationCap, // Education
        Users // Women
    ];
    return icons[index % icons.length];
};

const TracksPage = () => {
    const [openTrackIndex, setOpenTrackIndex] = useState<number | null>(null);

    const toggleTrack = (index: number) => {
        setOpenTrackIndex(openTrackIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Call for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Papers</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We invite researchers, engineers, and practitioners to present their latest findings and innovations.
                    </p>
                </div>
            </section>

            {/* Info & Actions */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="bg-secondary/20 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            The Conference aims to provide an active platform for research scientists, engineers, and practitioners throughout the world
                            to present their latest research findings, ideas, and applications in the fields of interest which fall under the scope of INDISCON 2025.
                            <br /><br />
                            Papers (upto 6 pages in .pdf) presented in the Conference, duly accepted after peer review, will be eligible for submission
                            for further consideration of publishing in the <span className="text-white font-semibold">IEEE Xplore</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/CFP INDISCON 2024 Extended Deadline.pdf"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all shadow-lg shadow-primary/25 hover:scale-105"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download CFP
                            </a>
                            <a
                                href="https://cmt3.research.microsoft.com/INDISCON2024/"
                                target="_blank"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/20 hover:bg-white/10 rounded-full transition-all hover:scale-105"
                            >
                                Submit Paper
                                <ExternalLink className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Tracks */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl font-bold text-white">Technical Tracks</h2>
                    <div className="h-px bg-white/10 flex-grow mt-2"></div>
                </div>

                <div className="space-y-4">
                    {TRACKS.map((trackItem, index) => {
                        const isOpen = openTrackIndex === index;
                        const Icon = getTrackIcon(index);

                        // Extract track number and title if possible, or just use full string
                        // trackItem.track usually looks like "Track 1: Power and Energy Systems"
                        return (
                            <div
                                key={index}
                                className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                                        ? 'bg-secondary/30 border-primary/50 shadow-lg shadow-primary/10'
                                        : 'bg-secondary/10 border-white/5 hover:border-white/10 hover:bg-secondary/20'
                                    }`}
                            >
                                <button
                                    onClick={() => toggleTrack(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400 group-hover:text-white'}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className={`text-lg md:text-xl font-semibold transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                            {trackItem.track}
                                        </h3>
                                    </div>
                                    <div className={`p-1 rounded-full border transition-all ${isOpen ? 'bg-primary text-white border-primary rotate-180' : 'border-white/10 text-gray-500 group-hover:border-white/30'
                                        }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="min-h-0">
                                        <div className="p-6 pt-0 border-t border-white/5">
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-4">
                                                {trackItem.topics.map((topic, tIndex) => (
                                                    <li key={tIndex} className="flex items-start text-gray-400 text-sm leading-relaxed">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0"></span>
                                                        {topic}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
                <p>&copy; 2025 IEEE INDISCON. All rights reserved.</p>
            </footer>
        </main>
    );
};

export default TracksPage;
