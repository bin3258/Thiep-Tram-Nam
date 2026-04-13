type Props = {
  data: any;
};

export default function GiftSection({ data }: Props) {
  const gift = data.gift;

  return (
    <div className="bg-[#f4f4f4] text-center -mt-6 px-6 pt-16 pb-20">

      <h2 className="text-[26px] text-[#7b1e2b] tracking-[0.1em] font-semibold">
        {gift.title}
      </h2>

      <p className="italic text-[#5b4636] text-[18px] mt-3 mb-8 leading-6 max-w-[260px] mx-auto">
        {gift.subtitle}
      </p>

 
      <div className="flex justify-center">
          <img
            src={gift.image}
            className="w-[220px] h-[220px] object-contain"
            alt="gift"
          />
        </div>
      </div>

  );
}