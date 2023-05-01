import { FC, useCallback, useState } from "react";
import { BsBoxArrowUpRight, BsPencilSquare } from "react-icons/bs";
import { BiUnlink } from "react-icons/bi";
import { BubbleMenu, Editor } from "@tiptap/react";
import LinkForm, { linkOption } from "./LinkForm";

interface Props {
  editor: Editor;
}

const EditLink: FC<Props> = ({ editor }): JSX.Element => {
  const [showEditForm, setShowEditForm] = useState(false);
  const handleOnLinkOpenClick = useCallback(() => {
    const { href } = editor.getAttributes("link");
    if (href) window.open(href, "_blank");
  }, [editor]);

  const handleLinkEditClick = () => {
    setShowEditForm(true);
  };

  const handleUnlinkClick = () => {
    editor.commands.unsetLink();
  };
  const handleSubmit = ({ url, openInNewTab }: linkOption) => {
    editor
      .chain()
      .focus()
      .unsetLink()
      .setLink({ href: url, target: openInNewTab ? "_blank" : "" })
      .run();
    setShowEditForm(false);
  };
  const getInitialState = useCallback(() => {
    const { href, target } = editor.getAttributes("link");
    return { url: href, openInNewTab: target ? true : false };
  }, [editor]);

  return (
    <BubbleMenu
      shouldShow={({ editor }) => editor.isActive("link")}
      editor={editor}
      tippyOptions={{
        onHide: () => {
          setShowEditForm(false);
        },
      }}>
      <LinkForm visible={showEditForm} onSubmit={handleSubmit} initialState={getInitialState()} />
      {!showEditForm && (
        <div className="rounded bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary shadow-secondary-dark shadow-md p-2 flex items-center gap-2 z-50">
          <button
            className="p-2 rounded hover:bg-gray-300"
            title="Open in a new tab"
            onClick={handleOnLinkOpenClick}>
            <BsBoxArrowUpRight />
          </button>

          <button
            className="p-2 rounded hover:bg-gray-300"
            title="Edit link"
            onClick={handleLinkEditClick}>
            <BsPencilSquare />
          </button>

          <button
            className="p-2 rounded hover:bg-gray-300"
            title="Unlink"
            onClick={handleUnlinkClick}>
            <BiUnlink />
          </button>
        </div>
      )}
    </BubbleMenu>
  );
};

export default EditLink;
