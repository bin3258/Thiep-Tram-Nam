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

      <p className="italic text-[#5b4636] text-[16px] mt-3 mb-10 leading-6 max-w-[260px] mx-auto">
        {gift.subtitle}
      </p>

      <div className="flex justify-center gap-6">
        {gift.items.map((item: any, index: number) => (
          <div key={index} className="text-center">
            
            {/* BOX */}
            <div className=" rounded-xl p-4 w-[200px] h-[200px] flex items-center justify-center">
              <img
                src={item.image}
                alt={item.label}
                className="w-[200px] h-[200px] object-contain"
              />
            </div>

            <p className="mt-3 text-[#5b4636] text-[20px] font-medium tracking-wide">
              {item.label}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}