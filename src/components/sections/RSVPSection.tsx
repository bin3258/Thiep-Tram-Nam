type Props = {
  data: any;
};

export default function RSVPSection({ data }: Props) {
  const rsvp = data.rsvp;

  return (
    <div className="bg-[#5f0821] text-white px-6 pt-10 pb-20 text-center relative">

      {/* HEADER */}
      <div className="flex justify-center mb-4">
        <img
          src="/images/heart-divider-white.png"
          alt="divider"
          className="w-[120px] object-contain opacity-90"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-[24px] tracking-[0.15em] font-semibold">
        {rsvp.title}
      </h2>

      <p className="italic text-[20px] mt-1 mb-6 opacity-90">
        {rsvp.subtitle}
      </p>

      {/* OPTIONS (fake radio) */}
      <div className="space-y-4 text-left max-w-[280px] mx-auto mb-6">

        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full border border-[#e6c58a]" />
          <span className="italic">
            {rsvp.options[0]}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full border border-[#e6c58a]" />
          <span className="italic">
            {rsvp.options[1]}
          </span>
        </div>

      </div>

      {/* INPUT giả */}
      <div className="text-left max-w-[280px] mx-auto mb-6">
        <p className="mb-2 italic">
          Số lượng người tham dự
        </p>

        <div className="w-full border border-[#e6c58a] rounded-lg px-4 py-2 italic text-white">
          {rsvp.placeholder}
        </div>
      </div>

      {/* FLOWER */}
      <div className="flex justify-center mt-6">
        <img
          src={rsvp.flower}
          className="w-[250px] opacity-90"
          alt="flower"
        />
      </div>

      {/* BUTTON */}
      <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2">
        <button className="bg-[#f48ca7] text-white px-8 py-2 rounded-full shadow-md text-[20px]">
          {rsvp.button}
        </button>
      </div>
    </div>
  );
}