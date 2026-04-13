import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});


const playfair = Playfair_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-serif",
});

type Props = {
  data: any;
};

export default function LoverSection({ data }: Props) {
  const lover = data?.lover;

  if (!lover) return null;

  return (
    <div className={`relative py-12 bg-white overflow-hidden ${greatVibes.variable} ${playfair.variable}`}>

      <div className="px-10 mb-12 text-[#5b4636]">

        <div className="flex justify-center md:justify-start mb-4">
          <img
            src="/text/my-lover.png"
            alt="My Lover"
            className="h-[60px] object-contain"
          />
        </div>

        <div className={`${playfair.className} space-y-4 text-[16px] leading-8 italic font-light opacity-90 text-center md:text-left`}>
          {lover.content.map((item: string, index: number) => (
            <p key={index} className="drop-shadow-sm">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-0">

        <div className="w-[30%] h-[420px] overflow-hidden rounded-r-[30px]">
          <img
            src="/images/red.png"
            alt="Decoration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[60%] h-[420px] shadow-[-10px_10px_25px_rgba(0,0,0,0.1)] z-10 pr-0">
          <img
            src={lover.image}
            alt="Wedding"
            className="w-full h-full object-cover rounded-l-[5px]"
          />
        </div>

      </div>
    </div>
  );
}