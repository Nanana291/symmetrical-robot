import Link from 'next/link';

export default function ProductCard() {
  return (
    <Link href="https://imphub.mysellauth.com/" className="block w-full max-w-sm mx-auto group perspective-[1000px]">
      <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#1a1025] to-[#0d0714] border border-[#3b2359] p-8 shadow-[0_10px_40px_rgba(109,40,217,0.15)] transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.03] group-hover:shadow-[0_20px_60px_rgba(109,40,217,0.3)] group-hover:border-[#6d28d9] overflow-hidden transform-style-3d">

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1 bg-gradient-to-r from-transparent via-[#9333ea] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#9333ea] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#6d28d9] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] text-white text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-[#a855f7]/30">
            BEST SELLER
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-3xl font-black text-white mb-2 tracking-tight drop-shadow-md">LIFETIME KEY</h3>
          <p className="text-[#a1a1aa] text-sm mb-8 leading-relaxed px-4">
            High Quality Roblox Script Execution
          </p>

          {/* Price */}
          <div className="mb-8">
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4d4d8] drop-shadow-sm">4 USD</span>
          </div>

          {/* Payment Method */}
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#3f3f46] to-transparent mb-2"></div>

            <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black/40 border border-[#27272a] group-hover:bg-black/60 transition-colors duration-300">
              <span className="text-[#a1a1aa] text-sm font-medium">Pay with</span>
              <svg viewBox="0 0 100 26" className="h-4 w-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.44 2.871C11.583 2.871 10.748 3.535 10.596 4.394L6.963 25.101h4.15l1.658-9.453h2.126c4.01 0 7.15-1.559 7.915-6.205C23.36 6.082 20.306 2.871 15.655 2.871H12.44zm2.844 3.493c1.763 0 2.924.965 2.652 2.766-.35 2.302-1.956 3.033-4.001 3.033h-1.39l.994-5.799h1.745zM38.167 11.233c-1.32-.916-2.502-1.401-3.69-1.401-1.282 0-2.072.585-2.28 1.407-.179.712.593 1.056 1.706 1.487l.955.378c2.474.966 4.547 2.217 3.896 5.867-.655 3.659-4.225 5.516-7.892 5.516-1.745 0-3.633-.42-5.305-1.229l.933-3.136c1.693 1.054 3.235 1.488 4.382 1.488 1.398 0 2.158-.65 2.366-1.48.204-.813-.418-1.218-1.517-1.632l-.956-.367C28.23 17.135 26 15.65 26.658 11.838c.642-3.705 4.331-5.32 7.787-5.32 1.722 0 3.393.363 4.757 1.071l-1.035 3.644zM53.155 6.786H49.02l2.35 6.007L47.01 25.1h4.103l2.802-9.213L57.243 25.1h4.296l-7.228-14.881 1.157-3.433h-4.077l-1.433 4.793-1.638-4.793v-.001h4.835zM73.497 2.871c-.856 0-1.691.664-1.843 1.523l-3.633 20.707h4.15l1.658-9.453h2.126c4.01 0 7.15-1.559 7.915-6.205 1.548-3.356-1.506-6.572-6.157-6.572h-4.216v.001zm2.844 3.493c1.763 0 2.924.965 2.652 2.766-.35 2.302-1.956 3.033-4.001 3.033h-1.39l.994-5.799h1.745v-.001zM91.065 6.518c-3.754 0-6.946 2.502-7.584 6.136-.341 1.933.243 3.473 1.348 4.606.848.87 2.083 1.346 3.513 1.346 2.016 0 3.844-.945 4.548-1.742l-.546 3.084c-.458.261-1.373.543-2.613.543-1.653 0-2.887-.45-3.673-1.353-.666-.762-1.011-1.89-1.011-3.267v-.086c.002-.594.04-1.25.106-1.92h-2.158l.498-2.812h2.24l.654-3.692h3.916l-.64 3.606c1.173-.591 2.536-.934 3.966-.934 3.438 0 5.488 1.94 4.863 5.467-.621 3.504-4.14 5.918-7.854 5.918-1.594 0-2.919-.383-3.83-.997l1.011-5.707c.365 2.302 2.35 3.398 4.295 3.398 1.638 0 3.397-1.037 3.737-2.955.334-1.886-1.04-2.894-2.919-2.894H91.066v.001z" fill="#003087"/>
                <path d="M5.532 2.871H2.49L.25 15.65h3.04l2.242-12.78v.001z" fill="#0079C1"/>
                <path d="M26.47 25.101h3.083l3.64-20.704h-3.084L26.47 25.1zM65.485 25.101h3.084l3.64-20.704h-3.084l-3.64 20.704z" fill="#0079C1"/>
              </svg>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[#52525b] text-xs font-semibold uppercase tracking-wider mt-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#9333ea]">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}