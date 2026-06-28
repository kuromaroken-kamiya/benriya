export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-obsidian">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(to right, #C9A96E11 1px, transparent 1px), linear-gradient(to bottom, #C9A96E11 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <svg viewBox="0 0 800 800" className="w-full h-full" fill="none">
            <circle cx="400" cy="400" r="300" stroke="#C9A96E" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="200" stroke="#C9A96E" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="100" stroke="#C9A96E" strokeWidth="0.5" />
            <line x1="100" y1="400" x2="700" y2="400" stroke="#C9A96E" strokeWidth="0.5" />
            <line x1="400" y1="100" x2="400" y2="700" stroke="#C9A96E" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-6 lg:left-12 top-32 bottom-24 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          <p className="section-label mb-8">Tokyo · Premium Concierge Service</p>
          <h1 className="text-display text-6xl md:text-7xl lg:text-8xl text-cream mb-6 leading-[1.05]">
            生活の質を、<br /><em className="text-gold not-italic">上質な手に</em><br />委ねる。
          </h1>
          <span className="gold-divider mb-8 block" />
          <p className="font-sans font-light text-cream/60 text-sm md:text-base leading-relaxed max-w-xl mb-12 tracking-wide">
            富裕層のご家庭から上場企業まで。面倒な日常のすべてを、信頼できる専門家チームが代行します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">無料コンサルティング</a>
            <a href="#services" className="btn-ghost">サービス一覧</a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-cream/10 grid grid-cols-3 gap-8 max-w-lg">
          {[
            { num: "98%", label: "顧客満足度" },
            { num: "500+", label: "対応実績" },
            { num: "24h", label: "対応時間" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-gold font-light">{stat.num}</p>
              <p className="font-sans text-[10px] tracking-widest text-cream/40 uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2">
        <span className="font-sans text-[9px] tracking-widest text-cream/30 uppercase rotate-90 origin-center mb-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}
