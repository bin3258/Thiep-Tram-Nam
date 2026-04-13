type Props = {
  data: any;
};

export default function GallerySection({ data }: Props) {
  const gallery = data.gallerySection;

  return (
    <div className="w-full ">

      {gallery.images.map((img: string, index: number) => (
        <div key={index} className="w-full">
          <img
            src={img}
            className="w-full h-[520px] object-cover mt-[20px]"
            alt={`gallery-${index}`}
          />
        </div>
      ))}

    </div>
  );
}