import React from 'react';
import Link from 'next/link';

export default function ProductCard() {
    return (
        <Link href="https://imphub.mysellauth.com/" className="group block relative w-full max-w-sm mx-auto">
            <div className="relative rounded-2xl bg-[#0b0b12] border border-[#8b5cf6]/20 overflow-hidden transition-all duration-300 transform group-hover:scale-[1.03] group-hover:border-[#8b5cf6]/50 shadow-2xl shadow-black/50 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]">

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8b5cf6]/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#8b5cf6]/40 transition-colors duration-500" />

                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-lg shadow-red-500/20 flex items-center gap-1">
                        BEST SELLER 🔥
                    </div>
                </div>

                {/* Image Placeholder (Mimicking the reference box) */}
                <div className="relative w-full h-64 bg-[#1a1c18] flex items-center justify-center p-6 border-b border-[#8b5cf6]/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0b12]/90" />

                    {/* Mock 3D Box Design */}
                    <div className="relative w-40 h-56 perspective-1000">
                         <div className="absolute inset-0 bg-gradient-to-br from-[#4d6b2c] to-[#2d4019] rounded shadow-2xl transform rotate-y-12 rotate-x-6 scale-95 origin-left preserve-3d">
                             <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-b from-[#3a5221] to-[#1c2810] transform -translate-x-full rotate-y-[-90deg] origin-right flex items-center justify-center">
                                 <span className="text-white/80 font-bold text-[8px] transform -rotate-90 tracking-widest whitespace-nowrap">SELIWARE EXECUTOR</span>
                             </div>

                             <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-white">
                                 <div className="text-[10px] font-black tracking-widest mb-2 opacity-80">R<span className="opacity-100 text-white">O</span>BLOX</div>
                                 <div className="text-7xl font-black mb-2 opacity-90 drop-shadow-md">S</div>
                                 <div className="text-[12px] font-bold tracking-wider">SELIWARE</div>
                                 <div className="text-[7px] font-semibold tracking-widest opacity-70 mb-4">EXECUTOR</div>

                                 <div className="mt-auto flex gap-2 text-[6px] opacity-70">
                                     <span>intel</span>
                                     <span>AMD</span>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                    {/* Brand Logos mock */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(4)].map((_, i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="red" className="opacity-80">
                                <path d="M12 2L2 22h20L12 2z"/>
                            </svg>
                        ))}
                    </div>

                    <h3 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight uppercase">
                        LIFETIME KEY
                    </h3>

                    <p className="text-zinc-400 text-sm mb-6 uppercase tracking-wider font-semibold">
                        High Quality Roblox Script Execution, Simplified
                    </p>

                    <div className="flex items-end justify-between mt-auto">
                        <div className="text-xl font-bold text-zinc-300">
                            $4.00 <span className="text-xs text-zinc-500 font-normal">USD</span>
                        </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                         <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Payment:</span>
                         <span className="text-sm font-bold text-white flex items-center gap-1.5">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#003087]" fill="currentColor">
                                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 6.007 0h7.46c2.535 0 4.295.453 5.246 1.41 1.036 1.041 1.155 2.596.941 4.335-.409 3.222-2.191 5.488-5.133 6.058-1.12.219-2.277.275-3.494.275H9.63c-.432 0-.799.303-.89.724L7.076 21.337z"/>
                                <path d="M6.236 21.337h4.09l1.458-9.15h1.22c2.196 0 3.86-.39 4.706-1.545.694-.948.877-2.316.643-4.043-.245-1.802-1.002-3.155-2.261-3.953-1.258-.797-3.085-1.121-5.322-1.121H6.007c-.42 0-.785.295-.875.707L1.87 23.018h4.053l.313-1.681z" fill="#0079C1"/>
                                <path d="M18.846 6.052c-.694-.948-1.92-1.437-3.666-1.437h-4.36c-.42 0-.785.295-.875.707l-2.61 16.015h4.09l1.01-6.332c.09-.567.581-1.004 1.155-1.004h1.22c2.196 0 3.86-.39 4.706-1.545.694-.948.877-2.316.643-4.043l-.313-2.36z" fill="#00457C"/>
                            </svg>
                            PayPal
                         </span>
                         <span className="ml-auto text-[10px] text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-1 rounded-full border border-[#00ff9d]/20 font-bold tracking-widest">INSTANT</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}