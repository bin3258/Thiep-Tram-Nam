import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
});

export default function WeddingSection() {
  return (
    <div className=" text-center font-serif relative overflow-hidden bg-[#fdfcfb]">

      <div className="flex justify-center items-center mb-4">
        <img
          src="/images/divider.png"
          alt="divider"
          className="h-5 object-contain opacity-80"
        />
      </div>
      <div className=" flex justify-center">
        <img
          src="/text/wedding.png"
          alt="wedding"
          className="h-[100px] object-contain"
        />
      </div>

      <div className="relative flex justify-center items-center">
        <div className="absolute left-0 mt-[40px] top-[40px] w-[90px] h-[380px] bg-[#5f0b21] rounded-br-[180px]" />

        <div className="absolute right-0 mt-[40px] top-[40px] w-[90px] h-[380px] bg-[#5f0b21] rounded-bl-[180px]" />

        <div className="relative z-10 shadow-2xl">
          <img
            src="/images/wedding.png"
            alt="wedding"
            className="w-[280px] h-[400px] object-cover border-[0.5px] border-[#7b1e2b]/20"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <img
          src="/text/title.png"
          alt="fall in love wedding"
          className="w-[250px] object-contain"
        />
      </div>
    </div>
  );
}