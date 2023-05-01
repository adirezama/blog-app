import { FC, useState, ChangeEventHandler, useCallback } from "react";
import ModalContainer, { ModalProps } from "../../common/ModalContainer";
import Gallery from "./Gallery";
import Image from "next/image";
import ActionButton from "../../common/ActionButton";
import { AiOutlineCloudUpload } from "react-icons/ai";

export interface ImageSelectionResult {
  src: string;
  altText: string;
}

interface Props extends ModalProps {
  uploading?: boolean;
  images: { src: string }[];
  onFileSelect(image: File): void;
  onSelect(result: ImageSelectionResult): void;
}

const GalleryModal: FC<Props> = ({
  visible,
  uploading,
  images,
  onFileSelect,
  onSelect,
  onClose,
}): JSX.Element => {
  const [selectedImg, setSelectedImg] = useState("");
  const [altText, setAltText] = useState("");
  const handleClose = useCallback(() => onClose && onClose(), [onClose]);
  const handleImgChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { files } = target;
    if (!files) return;
    const file = files[0];
    if (!file.type.startsWith("image")) return handleClose();
    onFileSelect(file);
  };
  const handleSelection = () => {
    if (!selectedImg) return handleClose();
    onSelect({ src: selectedImg, altText });
    handleClose();
  };
  return (
    <ModalContainer visible={visible} onClose={onClose}>
      <div className=" max-w-4xl p-2 bg-color2 rounded">
        <div className="flex">
          <div className="basis-3/4 max-h-[480px] overflow-y-auto custom-scroll-bar">
            <Gallery
              images={images}
              onSelect={(src) => setSelectedImg(src)}
              selectedImage={selectedImg}
              uploading={uploading}
            />
          </div>

          <div className="basis-1/4 p-2">
            <div className="space-y-4">
              <div>
                <input onChange={handleImgChange} hidden type="file" id="image-input" />
                <label htmlFor="image-input">
                  <div className="w-full border rounded p-1 flex items-center justify-center text-color1 cursor-pointer">
                    <AiOutlineCloudUpload />
                    Upload Image
                  </div>
                </label>
              </div>
              {selectedImg ? (
                <>
                  <textarea
                    placeholder="Alt text"
                    className="resize-none p-1 w-full bg-transparent focus:ring-1 text-color1 border border-color1 outline-none rounded h-20 custom-scroll-bar"
                    value={altText}
                    onChange={({ target }) => setAltText(target.value)}></textarea>
                  <ActionButton title="Select" onClick={handleSelection} />
                  <div className="relative aspect-square mt-2">
                    <Image src={selectedImg} fill alt="gallery" className="object-contain" />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default GalleryModal;
