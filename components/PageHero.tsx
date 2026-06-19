type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export default function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="navy-gradient text-white">
      <div className="site-container py-16 md:py-20">
        <p className="text-[12px] font-black uppercase leading-none text-white/90">{eyebrow}</p>
        <h1 className="mt-4 max-w-[780px] text-[38px] font-black uppercase leading-[1.08] tracking-[-0.02em] md:text-[58px]">
          {title}
        </h1>
        <div className="mt-5 h-[3px] w-[62px] bg-white" />
        <p className="mt-6 max-w-[640px] text-[16px] font-medium leading-8 text-white/88 md:text-[18px]">{text}</p>
      </div>
    </section>
  );
}
