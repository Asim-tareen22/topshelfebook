export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background decoration */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-linear-to-b from-gray-50 to-white"
            />

            <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left content */}
                    <div>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700">
                            🚀 New — Build faster than ever
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Build modern web apps{" "}
                            <span className="text-gray-900 underline decoration-gray-300 decoration-4 underline-offset-4">
                                with confidence
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg text-gray-600">
                            A production-ready starter designed by senior engineers. Clean
                            architecture, accessible components, and performance-first
                            decisions.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a
                                href="/signup"
                                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
                            >
                                Get started
                            </a>

                            <a
                                href="/docs"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
                            >
                                View docs
                            </a>
                        </div>

                        {/* Social proof */}
                        <div className="mt-10 flex items-center gap-6">
                            <div className="flex -space-x-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="h-8 w-8 rounded-full border border-white bg-gray-200"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">
                                Trusted by <span className="font-medium text-gray-900">5,000+</span>{" "}
                                developers
                            </p>
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className="relative">
                        <div className="aspect-4/3 overflow-hidden rounded-2xl border border-gray-200 bg-linear-to-br from-gray-100 to-gray-50 shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                App Preview
                            </div>
                        </div>

                        {/* Floating accent */}
                        <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gray-900/90 blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
