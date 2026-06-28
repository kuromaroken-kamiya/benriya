export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-cream/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-serif text-xl text-cream tracking-widest mb-1">BENRIYA</p>
            <p className="font-sans text-[9px] tracking-[0.35em] text-gold uppercase">Premium Concierge Service</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {["サービス", "法人向け", "実績", "プライバシーポリシー", "特定商取引法"].map((link) => (
              <a key={link} href="#" className="font-sans text-[10px] tracking-wider text-cream/30 hover:text-gold transition-colors uppercase">{link}</a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-sans text-[10px] text-cream/20 tracking-wide">© 2024 BENRIYA Premium Concierge. All rights reserved.</p>
          <p className="font-sans text-[10px] text-cream/20 tracking-wide">東京都港区 / 03-XXXX-XXXX</p>
        </div>
      </div>
    </footer>
  );
}
