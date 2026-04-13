type Props = {
  data: any;
};

export default function SingleImageSection({ data }: Props) {
  const img = data.singleImage;

  return (
    <div className="w-full">
      <img
        src={img.image}
        className="w-full h-[720px] object-cover"
        alt="wedding"
      />
    </div>
  );
}