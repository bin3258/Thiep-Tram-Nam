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
      <div className="mt-8 relative w-full">

        {/* 🔴 NỀN ĐỎ */}
        <img
          src={cal.calendarImage}
          className="w-full object-cover"
        />

        {/* 🔥 CONTENT ĐÈ LÊN */}
        <div className="absolute inset-0 flex flex-col items-center justify-start px-6 py-8 text-white">


          {/* 📅 HEADER */}
          <div className="grid grid-cols-7 text-center text-[16px] font-semibold mt-20 mb-4 w-full max-w-[320px]">
            {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map(d => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* 📅 DAYS */}
          <div className="grid grid-cols-7 text-center text-[16px] gap-y-3 w-full max-w-[320px]">

            {[
              "1", "2", "3", "4", "5", "6",
              "7", "8", "9", "10", "11", "12", "13",
              "14", "15", "16", "17", "18", "19", "20",
              "21", "22", "23", "24", "25", "26", "27",
              "28", "29", "30", "", "", "", ""
            ].map((day, i) => (
              <div key={i} className="relative flex justify-center items-center">

                {day === "29" && (
                  <img src="/images/heart.png" className="absolute w-8 mt-1" />
                )}

                <span className={day === "29" ? "relative z-10 text-black font-bold" : ""}>
                  {day}
                </span>

              </div>
            ))}

          </div>

          {/* 💛 LOVE */}
          <img
            src="/text/loves.png"
            className="w-[500px] mt-2"
          />

          {/* 📍 TEXT */}
          <div className="text-center ml-40 mt-2 text-[24px] leading-6">
            <p>Thứ Bảy, 29/11/2025</p>
            <p>Âm lịch 10/10 | 10:00 AM</p>
          </div>

        </div>

      </div>

    </div>
  );
}