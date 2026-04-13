type Props = {
  data: any;
};

export default function HeroSection({ data }: Props) {
  return (
    <div className="text-center space-y-6 py-8">
      <div className="px-6">
        <img
          src={data.images.hero}
          alt="Hero"
          className="w-full object-cover"
        />
      </div>
      <div className="flex justify-center items-start gap-6 flex-nowrap">

        {/* GROOM */}
        <div className="flex flex-col items-center gap-2">
          <div className="bg-[#5f0b21] text-white px-8 py-1 rounded-full text-[20px] tracking-[0.2em] font-light">
            GROOM
          </div>
        </div>

        {/* BRIDE */}
        <div className="flex flex-col items-center gap-2">
          <div className="bg-[#5f0b21] text-white px-8 py-1 rounded-full text-[20px] tracking-[0.2em] font-light">
            BRIDE
          </div>
        </div>

      </div>

       <div className="flex justify-center items-start gap-10 -mt-4">

        {/* GROOM */}
        <div className="flex flex-col items-center">
          <p className="text-[#5f0b21] text-[20px] tracking-[0.15em] font-semibold">
            {data.groom}
          </p>
        </div>

        {/* BRIDE */}
        <div className="flex flex-col items-center">
          <p className="text-[#5f0b21] text-[20px] tracking-[0.15em] font-semibold">
            {data.bride}
          </p>
        </div>
      </div>
    </div>
  );
}