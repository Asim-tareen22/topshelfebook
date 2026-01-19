'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Ghost, BookOpen, Sparkles } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white px-4">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-900/10 rounded-full blur-[100px] animate-blob pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-800/10 rounded-full blur-[100px] animate-blob-2 pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] animate-grid opacity-20 pointer-events-none" />

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-10 animate-float"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 80}%`,
                            animationDelay: `${i * 0.8}s`,
                            animationDuration: `${6 + Math.random() * 4}s`,
                        }}
                    >
                        <BookOpen className="w-12 h-12 text-red-500" />
                    </div>
                ))}
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8 animate-fade-in-up">
                {/* Large 404 Text */}
                <div className="relative inline-block">
                    <h1 className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-red-900/20 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Ghost className="w-24 h-24 text-red-600/40 animate-bounce-slow" />
                    </div>
                    {/* Sparkles */}
                    <Sparkles className="absolute -top-4 -right-4 w-12 h-12 text-yellow-500 animate-twinkle" />
                    <Sparkles className="absolute -bottom-4 -left-4 w-8 h-8 text-orange-500 animate-twinkle delay-500" />
                </div>

                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black text-white">
                        This Chapter is{' '}
                        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Missing
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md mx-auto leading-relaxed">
                        The page you are looking for has been moved or deleted. Even the best stories have lost pages.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className="group relative px-8 py-4 bg-gradient-to-r from-red-900 to-red-950 text-white font-black text-lg rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-all active:scale-95 w-full sm:w-auto text-center animate-glow"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shine" />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            <Home className="w-5 h-5" />
                            Back to Home
                        </span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white font-black text-lg rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-3"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>

                {/* Subtle Footer Quote */}
                <p className="text-gray-600 text-sm font-semibold tracking-widest uppercase animate-fade-in delay-1000">
                    — Not all who wander are lost —
                </p>
            </div>

            {/* Decorative Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
        </div>
    );
}
