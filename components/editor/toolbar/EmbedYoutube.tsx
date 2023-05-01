import { FC, useState } from "react";
import Button from "../toolbar/Button";
import { BsYoutube } from "react-icons/bs";

interface Props {
  onSubmit(link: string): void;
}

const EmbedYoutube: FC<Props> = ({ onSubmit }): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState("");
  const handleSubmit = () => {
    if (!url.trim()) return hideForm();
    onSubmit(url);
    setUrl("");
    hideForm();
  };
  const hideForm = () => setVisible(false);
  const showForm = () => setVisible(true);
  return (
    <div
      onKeyDown={({ key }) => {
        if (key === "Escape") hideForm();
      }}
      className="relative">
      <Button onClick={visible ? hideForm : showForm} title="Insert link">
        <BsYoutube />
      </Button>

      {visible && (
        <div className="absolute top-full mt-5 z-50 right-0">
          <div className="flex gap-2">
            <input
              autoFocus
              type="text"
              className="bg-gray-100 rounded border border-color2 focus:border-black transition py-1 px-2"
              placeholder="https://youtube.com"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <button onClick={handleSubmit} className="p-2 text-color1 bg-color2 rounded">
              Embed
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbedYoutube;
