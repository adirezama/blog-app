import { FC } from "react";
import Image from "./Image";
import { BsCardImage } from "react-icons/bs";

interface Props {
  images: { src: string }[];
  onSelect(src: string): void;
  uploading?: boolean;
  selectedImage?: string;
}

const Gallery: FC<Props> = ({
  images,
  selectedImage = "",
  uploading = false,
  onSelect,
}): JSX.Element => {
  return (
    <div className="flex flex-wrap">
      {uploading && (
        <div className="basis-1/4 p-2 animate-pulse rounded aspect-square flex flex-col items-center justify-center bg-color1 text-color2">
          <BsCardImage size={60} />
          <p>Uploading</p>
        </div>
      )}
      {images.map(({ src }, i) => {
        return (
          <div key={i} className="basis-1/4 p-1 ">
            <Image
              src={src}
              alt="gallery"
              selected={selectedImage === src}
              onClick={() => onSelect(src)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
