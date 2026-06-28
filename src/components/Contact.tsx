"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ type: "individual", name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const inputClass = "w-full bg-transparent border-b border-cream/20 py-3 font-sans text-sm text-cream placeholder-cream/20 focus:outline-none focus:border-gold transition-colors tracking-wide";

  return (
    <section id="contact" className="py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <p className="section-label mb-4">Contact</p>
          <h2 className="text-display text-4xl md:text-5xl text-cream mb-8">
            まず、<br /><em className="text-gold not-italic">ご相談から</em>。
          </h2>
          <span className="gold-divider mb-8 block" />
          <p className="font-sans text-xs text-cream/50 leading-relaxed tracking-wide mb-12 max-w-sm">
            初回コンサルティングは無料です。現状のお悩みをお聞かせいただければ、最適なプランをご提案いたします。
          </p>
          <div className="space-y-6">
            {[
              { label: "電話", value: "03-XXXX-XXXX", sub: "平日 9:00〜19:00" },
              { label: "メール", value: "info@benriya.jp", sub: "24時間受付" },
              { label: "所在地", value: "東京都港区", sub: "出張対応：関東全域" },
            ].map((item) => (
              <div key={item.label} className="flex gap-6">
                <span className="font-sans text-[9px] tracking-widest text-gold uppercase w-12 pt-0.5">{item.label}</span>
                <div>
                  <p className="font-sans text-sm text-cream/70 tracking-wide">{item.value}</p>
                  <p className="font-sans text-[10px] text-cream/30 mt-0.5 tracking-wide">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {submitted ? (
            <div className="border border-gold/30 p-12 text-center">
              <p className="font-serif text-2xl text-gold mb-4">ありがとうございます</p>
              <p className="font-sans text-xs text-cream/50 leading-relaxed tracking-wide">お問い合わせを受け付けました。<br />担当者より2営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex gap-0 border border-cream/10">
                {[{ value: "individual", label: "個人のお客様" }, { value: "corporate", label: "法人のお客様" }].map((t) => (
                  <button key={t.value} type="button" onClick={() => setForm({ ...form, type: t.value })}
                    className={`flex-1 py-3 font-sans text-xs tracking-wider transition-colors duration-200 uppercase ${
                      form.type === t.value ? "bg-gold text-obsidian" : "text-cream/40 hover:text-cream/70"
                    }`}>{t.label}</button>
                ))}
              </div>
              <input type="text" placeholder="お名前" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              {form.type === "corporate" && (
                <input type="text" placeholder="会社名" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
              )}
              <input type="email" placeholder="メールアドレス" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              <input type="tel" placeholder="電話番号" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
              <textarea placeholder="ご要望・ご状況をお聞かせください" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
              <button type="submit" className="btn-primary w-full text-center">送信する</button>
              <p className="font-sans text-[9px] text-cream/20 tracking-wide">ご入力いただいた情報は、当社プライバシーポリシーに基づき厳重に管理いたします。</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
