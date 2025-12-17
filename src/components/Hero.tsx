"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/assets/images/college/pec_chowk.png')" }}
                ></div>
                <div className="absolute inset-0 bg-black/5 bg-gradient-to-b from-background/90 via-background/80 to-background/90"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-70 z-0"></div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-24 text-center lg:py-5">

                <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <span className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-medium border border-primary/30 rounded-full bg-primary/10 text-primary-foreground backdrop-blur-sm">
                        <span className="w-2 h-2 me-2 rounded-full bg-accent animate-pulse"></span>
                        IEEE INDISCON 2025
                    </span>

                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-8xl">
                        Shaping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">Future</span> of <br />
                        <span className="relative inline-block">
                            Industrial Intelligence
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7925 3.37527 80.6276 0.125216 117.439 2.50021C163.455 5.46896 182.046 6.99997 197.681 6.99997" stroke="currentColor" strokeWidth="3"></path></svg>
                        </span>
                    </h1>

                    <p className="mb-24 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48 max-w-4xl mx-auto">
                        Join leading experts, researchers, and innovators at the premier IEEE conference on Industrial Information Systems. Explore the convergence of AI, IoT, and sustainable technologies.
                    </p>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6 mb-12">
                        <div className="flex items-center justify-center text-gray-300 gap-2 bg-secondary/30 px-6 py-3 rounded-xl border border-white/5 backdrop-blur-sm">
                            <Calendar className="w-5 h-5 text-accent" />
                            <span>August 20-22, 2025</span>
                        </div>
                        <div className="flex items-center justify-center text-gray-300 gap-2 bg-secondary/30 px-6 py-3 rounded-xl border border-white/5 backdrop-blur-sm">
                            <MapPin className="w-5 h-5 text-pink-500" />
                            <span>Chandigarh, India</span>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <Link href="#register" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-full bg-gradient-to-r from-primary to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-primary/30 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:scale-105">
                            Register Now
                            <ArrowRight className="w-5 h-5 ms-2" />
                        </Link>
                        <Link href="#schedule" className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-full border border-white/20 hover:bg-white/10 focus:ring-4 focus:ring-gray-700 transition-all hover:scale-105 backdrop-blur-sm">
                            View Schedule
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
