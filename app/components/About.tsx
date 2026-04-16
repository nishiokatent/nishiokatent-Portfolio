import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const credentials = [
  "一級帆布製品製造技能士",
  "技能グランプリ 厚生労働大臣賞",
  "京都府優秀技能者賞・現代の名工",
  "防炎表示認定事業所",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <ScrollReveal className="text-center mb-14 sm:mb-20">
          <p className="text-accent text-sm tracking-[0.2em] mb-3">ABOUT US</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-wide">
            西岡テントについて
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </ScrollReveal>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Photos */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src="/images/hp/team.jpg"
                  alt="西岡テントの家族"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/hp/sewing.jpg"
                  alt="ミシンでの縫製作業"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/hp/workshop.jpg"
                  alt="工房の全景"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={200}>
              <h3 className="text-xl sm:text-2xl font-bold text-primary leading-relaxed">
                4代にわたり、
                <br />
                京都でテントをつくり続けて。
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-muted leading-[1.9] text-sm sm:text-base">
                昭和26年の創業以来、70年以上にわたって京都の街でテントをつくってきました。
                店舗の顔となるオーニング、工場の間仕切り、住宅のシェード――
                ひとつとして同じ現場はありません。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-muted leading-[1.9] text-sm sm:text-base">
                お客様の要望をお聞きし、周辺の街並みや建物とのバランスも考えながら
                設計から縫製、取り付けまでを一貫して手がけています。
                3代目である現社長はパソコンを使った新しい技術も積極的に取り入れつつ、
                手仕事の良さも大切にしながら日々ものづくりに取り組んでいます。
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="mt-2">
                <p className="text-xs text-muted tracking-wider mb-3">
                  資格・受賞歴
                </p>
                <div className="flex flex-wrap gap-2">
                  {credentials.map((item) => (
                    <span
                      key={item}
                      className="text-xs sm:text-sm px-3 py-1.5 bg-gray-50 text-muted rounded-full border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
