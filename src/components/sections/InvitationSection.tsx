import { Great_Vibes } from "next/font/google";

const vibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

type Props = {
    data: any;
};

export default function InvitationSection({ data }: Props) {
    const info = data?.invitation;
    const ceremony = data?.ceremony;

    if (!info) return null;

    return (
        <div className="relative px-6 py-10 text-center text-[#5b4636] font-serif bg-white overflow-hidden">

            <img
                src="/images/asset-4.png"
                className="absolute top-0 right-0 w-full h-[770px] w-auto"
            />

            <div className="relative z-10">

                {/* Divider */}
                <div className="flex justify-center mb-4">
                    <img
                        src="/images/divider.png"
                        alt="divider"
                        className="h-5 opacity-80"
                    />
                </div>

                {/* Title */}
                <p className="text-[14px] tracking-[0.2em] uppercase font-sans font-semibold">
                    {info.title}
                </p>

                <p className="text-[14px] italic mt-1 opacity-80 font-semibold">
                    {info.subtitle}
                </p>

                <p className={`${vibes.className} text-[42px] mt-4 text-[#5f0b21]`}>
                    {info.guest}
                </p>

                <p className="mt-8 text-[13px] leading-6 tracking-[0.1em] uppercase opacity-90 font-semibold">
                    Đến dự buổi tiệc chung vui <br />
                    cùng gia đình chúng tôi vào lúc
                </p>

                {/* ===== TIMELINE + CONTENT ===== */}
                <div className="mt-10 relative max-w-[300px] mx-auto text-left pl-12">

                    {/* Timeline image */}
                    <img
                        src="/images/timeline.png"
                        alt="timeline"
                        className="absolute left-0 top-2 h-[160px] object-contain"
                    />

                    {/* TIME */}
                    <div className="mb-10">
                        <span className="bg-[#7b1e2b] text-white px-4 py-1 rounded-full text-[16px] uppercase">
                            {info.time.label}
                        </span>

                        <p className="mt-3  font-semibold text-[16px] leading-snug">
                            {info.time.value}
                        </p>

                        <p className="italic text-[16px] opacity-180">
                            {info.time.lunar}
                        </p>
                    </div>

                    {/* LOCATION */}
                    <div>
                        <span className="bg-[#7b1e2b] text-white px-4 py-1 rounded-full text-[16px] uppercase">
                            {info.location.label}
                        </span>

                        <p className="mt-3  font-semibold text-[15px] uppercase">
                            {info.location.name}
                        </p>

                        <p className="text-[15px] opacity-180 leading-relaxed">
                            {info.location.address}
                        </p>
                    </div>
                </div>

                {/* MAP */}
                <div className="relative mt-20 flex justify-center pl-[25px]">

                    <div className="absolute -top-12 left-10 text-[#5b4636] text-[13px] italic">
                        <p className="text-[20px] mb-1">Địa điểm tổ chức</p>

                        <svg className="w-18 h-14 overflow-visible">
                            <path
                                d="M0,0 Q10,35 50,35"
                                fill="transparent"
                                stroke="#b08a5b"
                                strokeWidth="1.5"
                                strokeDasharray="4 4"
                            />
                            <path d="M48,32 L55,35 L48,38 Z" fill="#1a6348" />
                        </svg>
                    </div>

                    <div className=" bg-white shadow-xl rotate-[-15deg] rounded-sm ">
                        <img
                            src={info.mapImage}
                            alt="map"
                            className="w-[220px] h-[150px] object-cover"
                        />
                    </div>
                </div>

                {/* BUTTONS */}
                {/* BUTTONS FLOAT GÓC */}
                <div className="absolute right-4 top-[780px] flex flex-col gap-3 z-20">
                    <a
                        href={`tel:${info.phone}`}
                        className="bg-[#5f0821] text-white px-6 py-2 rounded-full text-sm shadow-lg uppercase tracking-widest"
                    >
                        Gọi ngay chú rể
                    </a>
                </div>

                {/* CEREMONY */}
                {ceremony && (
                    <div className="mt-32 text-center">

                        {/* Title */}
                        <h3 className="text-[20px] uppercase text-[#7b5e3b] font-medium">
                            {ceremony.title}
                        </h3>

                        {/* Divider line */}
                        <div className="w-20 h-[1px] bg-[#c9a46c] mx-auto opacity-60"></div>

                        {/* Time */}
                        <p className="text-[22px] font-medium tracking-wide">
                            {ceremony.time}
                        </p>

                        {/* Note */}
                        <p className="text-[22px] italic text-[#7b5e3b]/80 font-semibold">
                            {ceremony.location}
                        </p>

                    </div>
                )}

            </div>
        </div>
    );
}