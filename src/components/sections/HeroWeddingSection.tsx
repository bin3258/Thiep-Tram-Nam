type Props = {
  data: any;
};

export default function HeroWeddingSection({ data }: Props) {
  const hero = data.heroSection;

  return (
    <div className="relative text-center overflow-hidden px-6 py-10">

      {/* CONTENT */}
      <div className="relative z-10">

        {/* RINGS ICON */}
        <div className="flex justify-center mb-4">
          <img src="/images/ring.png" className="h-[40px]" />
        </div>

        {/* TITLE */}
        <div className="flex justify-center mb-6">
          <img src="/text/welcome.png" className="h-[90px]" />
        </div>

        {/* IMAGE */}
        <div className="mt-6 flex justify-center ">
          <div className="relative w-[600px] h-[700px] rounded-[240px] overflow-hidden">
            <img src={hero.coupleImage} className="w-full h-full object-cover" />
          </div>
        </div>

        <p className="mt-6 text-[14px] italic text-[#5b4636] font-semibold">
          {hero.description}
        </p>

        <div className="mt-6 flex justify-start">
          <img src={hero.loveImage} className="w-[230px]" />
        </div>

        <p className="mt-3 text-[14px] italic text-[#5b4636] font-semibold">
          {hero.loveText}
        </p>
        

      </div>

      {/* BACKGROUND DƯỚI */}
      <img
        src="/images/bg-hero.png"
        alt="bg"
        className="absolute bottom-0 left-0 w-full h-[350px] -left-[5%] z-0 pointer-events-none"
      />
    </div>

  );
}