import ProductCard from './ProductCard';

export default function ShopSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020202]">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6d28d9]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9333ea]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 shadow-[0_0_15px_rgba(139,92,246,0.15)] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#9333ea] animate-pulse" />
            <span className="text-xs font-bold text-[#a78bfa] tracking-widest uppercase">Premium Access</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit']">
            Purchase <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-[#c4b5fd]">Access</span>
          </h2>

          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto leading-relaxed">
            Elevate your experience with our premium lifetime key. Unlock exclusive features and priority support instantly.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center gap-10">
          {/* We use a single ProductCard for now as requested, but structured in a grid for future expansion */}
          <ProductCard />
        </div>
      </div>
    </section>
  );
}