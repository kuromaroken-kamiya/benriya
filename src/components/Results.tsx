const cases = [
  { category: "邸宅管理", title: "都内高級マンション 全室リノベーション後のスナッグリスト対応",
    detail: "築35年のハイグレードマンション全室改装後、引き渡し前の不具合20箇所以上を72時間以内に完全解消。", tag: "個人" },
  { category: "コーポレート", title: "上場企業 全国社宅12棟の年間メンテナンス委託",
    detail: "定期巡回・緊急対応・報告書提出を月次で実施。年間コストを前年比23%削減しながら入居者満足度を向上。", tag: "法人" },
  { category: "セキュリティ", title: "経営者ご自宅へのスマートホームセキュリティ導入",
    detail: "AI顔認証カメラ・スマートロック・センサーシステムを一括施工。わずか2日間で完全稼働を実現。", tag: "個人" },
];

export default function Results() {
  return (
    <section id="results" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="section-label mb-4">Case Studies</p>
          <h2 className="text-display text-4xl md:text-5xl text-cream">
            実績が、<br /><em className="text-gold not-italic">信頼の証明</em>です。
          </h2>
        </div>
        <div className="space-y-px">
          {cases.map((c, i) => (
            <div key={i} className="bg-charcoal-light p-10 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-start group hover:bg-[#1A1A1A] transition-colors duration-300">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-sans text-[9px] tracking-widest text-gold uppercase">{c.category}</span>
                  <span className="w-px h-3 bg-cream/10" />
                  <span className="font-sans text-[9px] tracking-widest text-cream/30 uppercase">{c.tag}</span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-cream font-light mb-4 group-hover:text-gold-light transition-colors leading-snug">{c.title}</h3>
                <p className="font-sans text-xs text-cream/40 leading-relaxed tracking-wide max-w-2xl">{c.detail}</p>
              </div>
              <div className="font-mono text-6xl text-cream/5 font-light self-center">{String(i + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
