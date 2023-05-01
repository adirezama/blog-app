import { FC } from "react";
import NextImage from "next/image";
import CheckMark from "../../common/CheckMark";

interface Props {
  src: string;
  alt: string;
  selected?: boolean;
  onClick?(): void;
}

const Image: FC<Props> = ({ src, alt, selected, onClick }): JSX.Element => {
  return (
    <div onClick={onClick} className="relative rounded overflow-hidden cursor-pointer">
      <NextImage
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="bg-color1 hover:scale-110 transition object-cover object-center aspect-square"
      />
      <div className="absolute top-2 left-1">
        <CheckMark visible={selected || false} />
      </div>
    </div>
  );
};

export default Image;
