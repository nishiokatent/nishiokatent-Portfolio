import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      {/* CTA section */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <ScrollReveal>
            <p className="text-white/50 text-sm tracking-[0.2em] mb-3">
              CONTACT
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-6">
              お問い合わせ
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
              テントのこと、なんでもご相談ください。
              <br />
              お見積りは無料です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:075-313-8498"
                className="flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-3 rounded text-sm hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                075-313-8498
              </a>
              <a
                href="mailto:info@nishiokatent.net"
                className="flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-3 rounded text-sm hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                info@nishiokatent.net
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Company info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo & company name */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="西岡テント"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm">西岡テント</p>
                <p className="text-white/50 text-xs">かっぱや西岡</p>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed">
              固定テント、オーニングテント、巻上テント、
              <br />
              間仕切りカーテン、カバー類の製作・施工
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-white/40 text-xs tracking-wider mb-3">所在地</p>
            <p className="text-white/80 text-sm leading-relaxed">
              〒600-8844
              <br />
              京都府京都市下京区朱雀裏畑町19
            </p>
            <p className="text-white/60 text-xs mt-3">代表 西岡 誠生</p>
          </div>

          {/* Business hours */}
          <div>
            <p className="text-white/40 text-xs tracking-wider mb-3">
              営業時間
            </p>
            <p className="text-white/80 text-sm">9:00 - 18:00</p>
            <p className="text-white/50 text-xs mt-2">
              休業日：日・祝日、第1・第3・第5土曜日
            </p>
            <a
              href="https://nishiokatent.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-white/60 text-xs border-b border-white/20 hover:text-white/90 hover:border-white/50 transition-colors"
            >
              公式サイトはこちら →
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-white/30 text-xs">
            &copy; 西岡テント All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
