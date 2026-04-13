import { Great_Vibes } from "next/font/google";

const vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  data: any;
};

export default function CoupleSection({ data }: Props) {
  const couple = data.couple;

  return (
    <div className="relative px-6 py-10 text-center overflow-hidden ">

      {/* BACKGROUND CONG */}
      <img
        src="/images/bg-couple.png"
        alt="background"
        className="absolute bottom-0 left-0 w-full min-h-[120%] object-cover z-0"
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* 2 ảnh */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src={couple.bride.image}
            className="w-full h-[260px] object-cover rounded-md"
          />
          <img
            src={couple.groom.image}
            className="w-full h-[260px] object-cover rounded-md"
          />
        </div>

        {/* TÊN */}
        <div className="grid grid-cols-2 gap-4 mt-4 text-[#5f0b21]">
          <p className={`${vibes.className} text-[28px]`}>
            {couple.bride.name}
          </p>
          <p className={`${vibes.className} text-[28px]`}>
            {couple.groom.name}
          </p>
        </div>

        {/* INFO */}
        <div className="grid grid-cols-2 gap-4 mt-3">

          {/* BRIDE */}
          <div>
            <div className="bg-[#5f0b21] text-white px-4 py-2 rounded-full text-sm leading-5 shadow-md">
              <p>{couple.bride.father}</p>
              <p>{couple.bride.mother}</p>
            </div>
            <p className="text-[17px] italic mt-2 text-[#5b4636]">
              {couple.bride.address}
            </p>
          </div>

          {/* GROOM */}
          <div>
            <div className="bg-[#5f0b21] text-white px-4 py-2 rounded-full text-sm leading-5 shadow-md">
              <p>{couple.groom.father}</p>
              <p>{couple.groom.mother}</p>
            </div>
            <p className="text-[17px] italic mt-2 text-[#5b4636]">
              {couple.groom.address}
            </p>
          </div>
        </div>

        {/* STORY */}
        <div className="mt-6 text-[18px] italic leading-7 text-[#5b4636] space-y-2 font-semibold">
          {couple.story.map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </div>

      </div>
    </div>
  );
}