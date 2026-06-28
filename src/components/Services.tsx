const services = [
  { number: "01", title: "邸宅メンテナンス", en: "Residence Care",
    desc: "水回り・電気・内装・庭園まで、ご自邸のあらゆる維持管理を一括でお引き受けします。定期巡回から緊急対応まで。",
    tags: ["水回り修繕", "電気工事", "内装仕上げ", "庭園管理"] },
  { number: "02", title: "ライフスタイル代行", en: "Lifestyle Agency",
    desc: "お引越し手配、家電セットアップ、不用品処分から、海外からの帰国準備まで。生活にまつわる煩雑な手続きを完結代行。",
    tags: ["引越し手配", "家電設置", "不用品処分", "帰国準備"] },
  { number: "03", title: "セキュリティ整備", en: "Security Setup",
    desc: "高性能カメラシステムの設置から、スマートロック導入、防犯診断まで。安心のご自宅環境を構築します。",
    tags: ["防犯カメラ", "スマートロック", "侵入センサー", "セキュリティ診断"] },
  { number: "04", title: "アート・コレクション管理", en: "Art & Collections",
    desc: "絵画・骨董・ワインセラーなどのコレクション保管環境の整備。専門スタッフによる取扱いで大切な資産を守ります。",
    tags: ["展示設置", "保管環境整備", "梱包輸送", "在庫管理"] },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="section-label mb-4">Services</p>
            <h2 className="text-display text-4xl md:text-5xl text-cream">
              富裕層のご自宅に、<br /><em className="text-gold not-italic">格に見合った</em>職人を。
            </h2>
          </div>
          <p className="font-sans text-xs text-cream/40 max-w-xs leading-relaxed tracking-wide">
            すべてのサービスは、厳選された専門職人のみが担当。NDA締結・身元保証済みのスタッフが対応します。
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-cream/5">
          {services.map((service) => (
            <div key={service.number} className="bg-charcoal p-10 group hover:bg-charcoal-light transition-colors duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-gold/50">{service.number}</span>
                <span className="font-sans text-[9px] tracking-widest text-cream/20 uppercase group-hover:text-gold/40 transition-colors">{service.en}</span>
              </div>
              <h3 className="font-serif text-2xl text-cream mb-4 font-light group-hover:text-gold-light transition-colors">{service.title}</h3>
              <span className="gold-divider mb-6" />
              <p className="font-sans text-xs text-cream/50 leading-relaxed mb-8 tracking-wide">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-sans tracking-wider text-cream/30 border border-cream/10 px-2 py-1 uppercase">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
