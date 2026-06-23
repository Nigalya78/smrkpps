type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="navy-gradient text-white">
      <div className="site-container px-4 py-14 sm:px-0 md:py-16 lg:py-20">
        <p className="text-[11px] font-semibold leading-none text-white/90 md:text-[12px]">{eyebrow}</p>
        <h1 className="mt-4 max-w-[780px] text-[28px] font-bold leading-[1.08] tracking-[-0.02em] sm:text-[32px] md:text-[46px] lg:text-[58px]">
          {title}
        </h1>
        <div className="mt-5 h-[3px] w-[62px] bg-white" />
        <p className="mt-6 max-w-[640px] text-[15px] font-medium leading-7 text-white/88 md:text-[16px] lg:text-[18px] lg:leading-8">{text}</p>
      </div>
    </section>
  );
}
