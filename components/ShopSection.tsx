import React from 'react';
import ProductCard from './ProductCard';

export default function ShopSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Details */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8b5cf6]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
                        <span className="text-xs font-bold text-[#a78bfa] tracking-widest uppercase">Official Store</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight font-['Outfit']">
                        Purchase <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd] drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">Access</span>
                    </h2>

                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Secure your lifetime key and unlock the full potential of high-quality Roblox script execution instantly.
                    </p>
                </div>

                {/* Grid */}
                <div className="flex flex-col items-center justify-center animate-fade-in-up delay-100">
                    <ProductCard />

                    <div className="mt-8 text-center text-sm text-zinc-500 font-medium flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        Secure Checkout & Instant Email Delivery
                    </div>
                </div>
            </div>
        </section>
    );
}