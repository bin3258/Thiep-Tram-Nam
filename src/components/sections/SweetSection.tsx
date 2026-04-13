type Props = {
  data: any;
};

export default function SweetSection({ data }: Props) {
  const sweet = data.sweetSection;

  return (
    <div className="relative px-6 py-10 text-center overflow-hidden">

      {/* BACKGROUND DƯỚI */}
      <img
        src="/images/bg-sweet.png"
        className="absolute bottom-0 left-0 w-[110%] h-[30%] -left-[5%] z-0 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* DESCRIPTION */}
        <p className="text-[15px] italic leading-6 text-[#5b4636] mb-8 font-semibold">
          {sweet.description}
        </p>

        {/* IMAGE GROUP */}
        <div className="relative flex justify-center items-center">

          <img
            src={sweet.images.left}
            className="absolute left-[-40px] w-[100px] h-[400px] object-cover opacity-80"
          />

          <img
            src={sweet.images.right}
            className="absolute right-[-40px] w-[100px] h-[400px] object-cover opacity-80"
          />

          <img
            src={sweet.images.center}
            className="w-[300px] h-[400px] mb-[100px] object-cover border border-[#d1ab7d]"
          />
        </div>

        {/* TITLE IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src="/text/sweet-wedding.png"
            className="w-[260px] md:w-[320px] object-contain"
          />
        </div>

        {/* CONTENT */}
        <p className="text-[15px] italic leading-6 text-[#5b4636] max-w-[260px] mx-auto font-semibold">
          {sweet.content}
        </p>

        {/* FLOWER */}
        <div className="mt-8 flex justify-center">
          <img src={sweet.flower} className="w-[180px]" />
        </div>

      </div>
    </div>
  );
}