import { FC, useState, useEffect } from "react";
import { validateUrl } from "../Editorutils";

interface Props {
  visible: boolean;
  onSubmit(link: linkOption): void;
  initialState?: linkOption;
}
export type linkOption = {
  url: string;
  openInNewTab: boolean;
};
const defaultLink = {
  url: "",
  openInNewTab: false,
};

const LinkForm: FC<Props> = ({ initialState, visible, onSubmit }): JSX.Element | null => {
  const [link, setLink] = useState<linkOption>(defaultLink);
  const handleSubmit = () => {
    onSubmit({ ...link, url: validateUrl(link.url) });
    resetForm();
  };
  const resetForm = () => {
    setLink({ ...defaultLink });
  };
  useEffect(() => {
    if (initialState) setLink({ ...initialState });
  }, [initialState]);
  if (!visible) return null;
  return (
    <div className="rounded p-2 text-sm bg-color4 shadow-sm border border-color2">
      <input
        autoFocus
        type="text"
        className="bg-gray-100 rounded border border-color2 focus:border-black transition py-1 px-2"
        placeholder="https://example.com"
        value={link.url}
        onChange={({ target }) => setLink({ ...link, url: target.value })}
      />
      <div className="flex items-center justify-center gap-1 mt-2">
        <input
          type="checkbox"
          id="open-in-new-tab"
          checked={link.openInNewTab}
          onChange={({ target }) => setLink({ ...link, openInNewTab: target.checked })}
        />
        <label htmlFor="open-in-new-tab">Open in new tab</label>
        <div className="flex-1 text-right">
          <button onClick={handleSubmit} className="px-2 py-1 text-color1 bg-color2 rounded">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
