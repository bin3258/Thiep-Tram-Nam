type Props = {
  data: any;
};

export default function HeroSection({ data }: Props) {
  return (
    <div className="text-center space-y-6 py-8">
      
      {/* HERO IMAGE + TEXT OVERLAY */}
      <div className="px-6 relative">
        <img
          src={data.images.hero}
          alt="Hero"
          className="w-full object-cover"
        />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-80 px-4">
          
          <h1 className="text-[#5f0b21] text-4xl md:text-6xl font-semibold tracking-[0.1em]">
            WE GOT
          </h1>

          <h1 className="text-[#5f0b21] text-4xl md:text-6xl font-semibold tracking-[0.1em]">
            MARRIED
          </h1>

          <p className="text-[#5f0b21] mt-4 italic font-bold">
            {data.heroText || "It's been a long time, see you at the wedding!"}
          </p>

          <p className="text-[#5f0b21] mt-2 font-bold">
            {data.ceremony?.time}
          </p>

        </div>
      </div>

      {/* GROOM / BRIDE */}
      <div className="flex justify-center items-start gap-6 flex-nowrap">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-[#5f0b21] text-white px-8 py-1 rounded-full text-[20px] tracking-[0.2em] font-light">
            GROOM
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-[#5f0b21] text-white px-8 py-1 rounded-full text-[20px] tracking-[0.2em] font-light">
            BRIDE
          </div>
        </div>
      </div>

      <div className="flex justify-center items-start gap-10 -mt-4">
        <div className="flex flex-col items-center">
          <p className="text-[#5f0b21] text-[20px] tracking-[0.15em] font-semibold">
            {data.groom}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-[#5f0b21] text-[20px] tracking-[0.15em] font-semibold">
            {data.bride}
          </p>
        </div>
      </div>

    </div>
  );
}