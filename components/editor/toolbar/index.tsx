import { FC } from "react";
import { Editor } from "@tiptap/react";
import { getFocusedEditor } from "../Editorutils";
import DropdownOption from "../../common/DropdownOption";
import Button from "./Button";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsCode,
  BsBraces,
  BsListOl,
  BsListUl,
  BsImageFill,
  BsFillImageFill,
} from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";
import InsertLink from "../Link/InsertLink";
import { linkOption } from "../Link/LinkForm";
import EmbedYoutube from "./EmbedYoutube";
interface Props {
  editor: Editor | null;
  onOpenImage?(): void;
}
const Toolbar: FC<Props> = ({ editor, onOpenImage }): JSX.Element | null => {
  const handleLinkSubmit = ({ url, openInNewTab }: linkOption) => {
    if (!editor) return;
    const { commands } = editor;
    if (openInNewTab) {
      commands.setLink({ href: url, target: "_blank" });
    } else {
      commands.setLink({ href: url });
    }
  };
  if (!editor) return null;
  const options = [
    {
      label: "Paragraph",
      onClick: () => {
        getFocusedEditor(editor).setParagraph().run();
      },
    },
    {
      label: "Heading 1",
      onClick: () => {
        getFocusedEditor(editor).setHeading({ level: 1 }).run();
      },
    },
    {
      label: "Heading 2",
      onClick: () => {
        getFocusedEditor(editor).setHeading({ level: 2 }).run();
      },
    },
    {
      label: "Heading 3",
      onClick: () => {
        getFocusedEditor(editor).setHeading({ level: 3 }).run();
      },
    },
  ];
  const getLabel = (): string => {
    if (editor.isActive("heading", { level: 1 })) return "Heading 1";
    if (editor.isActive("heading", { level: 2 })) return "Heading 2";
    if (editor.isActive("heading", { level: 3 })) return "Heading 3";
    return "Paragraph";
  };
  const handleEmbedYoutube = (url: string) => {
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };
  const Head = () => {
    return (
      <div className="flex">
        <p>{getLabel()}</p>
      </div>
    );
  };
  return (
    <div className="flex gap-4">
      <DropdownOption options={options} head={<Head />} />
      <div className="flex items-center gap-4">
        <div className=" h-5 w-[1px] bg-gray-400 mx-1" />
        <div className="flex items-center gap-1">
          <Button
            active={editor.isActive("bold")}
            onClick={() => getFocusedEditor(editor).toggleBold().run()}
            title="Bold">
            <BsTypeBold />
          </Button>
          <Button
            active={editor.isActive("italic")}
            onClick={() => getFocusedEditor(editor).toggleItalic().run()}
            title="Italic">
            <BsTypeItalic />
          </Button>
          <Button
            active={editor.isActive("underline")}
            onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
            title="Underline">
            <BsTypeUnderline />
          </Button>
          <Button
            active={editor.isActive("strike")}
            onClick={() => getFocusedEditor(editor).toggleStrike().run()}
            title="Strikethrough">
            <BsTypeStrikethrough />
          </Button>
        </div>
        <div className=" h-5 w-[1px] bg-gray-400 mx-1" />
        <div className="flex items-center gap-1">
          <Button
            active={editor.isActive("blockquote")}
            onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
            title="Quoted text">
            <RiDoubleQuotesL />
          </Button>
          <Button
            active={editor.isActive("code")}
            onClick={() => getFocusedEditor(editor).toggleCode().run()}
            title="Code">
            <BsCode />
          </Button>
          <Button
            active={editor.isActive("codeBlock")}
            onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
            title="Braces">
            <BsBraces />
          </Button>
          <InsertLink onSubmit={handleLinkSubmit} />
          <Button
            active={editor.isActive("orderedList")}
            onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
            title="Numbered list">
            <BsListOl />
          </Button>
          <Button
            active={editor.isActive("bulletList")}
            onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
            title="Button list">
            <BsListUl />
          </Button>
        </div>
        <div className=" h-5 w-[1px] bg-gray-400 mx-1" />
        <div className="flex items-center gap-1">
          <EmbedYoutube onSubmit={handleEmbedYoutube} />
          <Button onClick={onOpenImage} title="Insert image">
            <BsFillImageFill />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
