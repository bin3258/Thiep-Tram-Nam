type Props = {
  data: any;
};

export default function CalendarSection({ data }: Props) {
  const cal = data.calendarSection;

  return (
    <div className="px-6 py-10">

      <div className="flex items-start justify-between gap-6">

        {/* LEFT - TITLE */}
        <img
          src="/text/fall-in-love.png"
          className="w-[200px] md:w-[240px]"
        />

        {/* RIGHT - HEART + TEXT */}
        <div className="flex flex-col items-end text-left max-w-[220px]">

          {/* HEART */}
          <img
            src="/images/heart-divider.png"
            className="w-[80px] mb-2 opacity-70 self-start"
          />

          {/* TEXT */}
          <p className="text-[17px] italic leading-6 text-[#5b4636] font-semibold">
            {cal.quote}
          </p>

        </div>

      </div>

      {/* CALENDAR */}
      <div className="mt-8">
        <img src={cal.calendarImage} className="w-full object-cover" />
      </div>

    </div>
  );
}