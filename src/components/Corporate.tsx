const plans = [
  { label: "スポット", en: "On Demand", price: "¥15,000〜", unit: "/ 回",
    desc: "単発のご依頼に最適。事前見積もり後、即日〜翌日対応。",
    features: ["見積もり無料", "最短当日対応", "完了レポート提出", "1年間の施工保証"], highlight: false },
  { label: "プレミアム", en: "Premium Retainer", price: "¥98,000〜", unit: "/ 月",
    desc: "富裕層個人・経営者に人気の専属コンシェルジュプラン。",
    features: ["月10時間の優先対応枠", "専属担当者アサイン", "緊急コール（24時間）", "NDA・身元保証", "四半期レポート"], highlight: true },
  { label: "コーポレート", en: "Corporate", price: "要相談", unit: "",
    desc: "オフィス・社宅・施設管理をまとめてアウトソース。",
    features: ["複数拠点対応", "専任チーム編成", "月次定例ミーティング", "専用ポータル提供", "経費精算対応"], highlight: false },
];

export default function Corporate() {
  return (
    <section id="corporate" className="py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="section-label mb-4">Corporate & Premium Plans</p>
          <h2 className="text-display text-4xl md:text-5xl text-cream max-w-2xl">
            企業の施設管理を、<br /><em className="text-gold not-italic">ひとつの窓口</em>に。
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-cream/5">
          {plans.map((plan) => (
            <div key={plan.label} className={`relative p-10 flex flex-col ${plan.highlight ? "bg-gold/10 border border-gold/30" : "bg-obsidian"}`}>
              {plan.highlight && (
                <span className="absolute top-0 right-0 bg-gold text-obsidian text-[9px] font-sans tracking-widest uppercase px-3 py-1">人気</span>
              )}
              <div className="mb-8">
                <p className="font-sans text-[9px] tracking-widest text-gold uppercase mb-2">{plan.en}</p>
                <h3 className="font-serif text-2xl text-cream font-light mb-6">{plan.label}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="font-serif text-4xl text-cream font-light">{plan.price}</span>
                  {plan.unit && <span className="font-sans text-xs text-cream/40 mb-1">{plan.unit}</span>}
                </div>
                <span className="gold-divider mb-4 block" />
                <p className="font-sans text-xs text-cream/50 leading-relaxed tracking-wide">{plan.desc}</p>
              </div>
              <ul className="flex-1 flex flex-col gap-3 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-xs font-sans text-cream/60">
                    <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={plan.highlight ? "btn-primary text-center" : "btn-ghost text-center"}>
                {plan.price === "要相談" ? "お問い合わせ" : "申し込む"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
