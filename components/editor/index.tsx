import { FC, useState, useEffect, ChangeEventHandler } from "react";
import Toolbar from "./toolbar";
import { useEditor, EditorContent, getMarkRange, Range } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import EditLink from "./Link/EditLink";
import Youtube from "@tiptap/extension-youtube";
import TipImage from "@tiptap/extension-image";
import GalleryModal, { ImageSelectionResult } from "./GalleryModal";
import axios from "axios";
import SeoForm, { SeoResult } from "./SeoForm";
import ActionButton from "../common/ActionButton";
import ThumbnailSelector from "./ThumbnailSelector";

export interface FinalPost extends SeoResult {
  id?: string;
  title: string;
  content: string;
  thumbnail?: File | string;
}

interface Props {
  initialValue?: FinalPost;
  btnTitle?: string;
  busy?: boolean;
  onSubmit(post: FinalPost): void;
}

const Editor: FC<Props> = ({
  initialValue,
  btnTitle = "Submit",
  busy = false,
  onSubmit,
}): JSX.Element => {
  const [selectionRange, setSelectionRange] = useState<Range>();
  const [showGallery, setShowGallery] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<{ src: string }[]>([]);
  const [seoInitilaValue, setSeoInitilaValue] = useState<SeoResult>();
  const [post, setPost] = useState<FinalPost>({
    title: "",
    content: "",
    meta: "",
    tags: "",
    slug: "",
  });

  const handleImgUpload = async (image: File) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await axios.post("/api/image", formData);
    setUploading(false);
    setImages([data, ...images]);
  };
  const fetchImages = async () => {
    const { data } = await axios("/api/image");
    setImages(data.images);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        autolink: false,
        linkOnPaste: false,
        openOnClick: false,
        HTMLAttributes: {
          target: "",
        },
      }),
      Placeholder.configure({
        placeholder: "Write something …",
      }),
      Youtube.configure({
        width: 840,
        height: 472.5,
        HTMLAttributes: {
          class: "mx-auto rounded",
        },
      }),
      TipImage.configure({
        HTMLAttributes: {
          class: "mx-auto",
        },
      }),
    ],
    editorProps: {
      handleClick(view, position, event) {
        const { state } = view;
        const selectionRange = getMarkRange(state.doc.resolve(position), state.schema.marks.link);
        if (selectionRange) setSelectionRange(selectionRange);
      },
      attributes: {
        class: "prose prose-lg max-w-full h-full focus:outline-none mx-auto",
      },
    },
  });

  const handleImgSelection = (result: ImageSelectionResult) => {
    editor?.chain().focus().setImage({ src: result.src, alt: result.altText }).run();
  };
  const handleSubmit = () => {
    if (!editor) return;
    onSubmit({ ...post, content: editor.getHTML() });
  };
  const updateTitle: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setPost({ ...post, title: target.value });
  };
  const updateSeoValue = (result: SeoResult) => {
    setPost({ ...post, ...result });
  };
  const updateThumbnail = (file: File) => {
    setPost({ ...post, thumbnail: file });
  };
  useEffect(() => {
    if (editor && selectionRange) {
      editor.commands.setTextSelection(selectionRange);
    }
  }, [editor, selectionRange]);

  useEffect(() => {
    fetchImages();
  }, []);
  useEffect(() => {
    if (initialValue) {
      setPost({ ...initialValue });
      editor?.commands.setContent(initialValue.content);
      const { meta, slug, tags } = initialValue;
      setSeoInitilaValue({ meta, slug, tags });
    }
  }, [initialValue, editor]);

  return (
    <>
      <div className="max-w-4xl mx-auto transition">
        <div className="sticky top-0 z-10 bg-white">
          {/* Thumbnail selector */}
          <div className="flex item-center justify-between my-3">
            <ThumbnailSelector onChange={updateThumbnail} />
            <div className="inline-block">
              <ActionButton busy={busy} title={btnTitle} onClick={handleSubmit} />
            </div>
          </div>
          {/* Title input */}
          <input
            type="text"
            className="bg-transparent w-full  border-b-[1px] outline-none text-3xl italic font-semibold my-5 py-2"
            placeholder="Title"
            value={post.title}
            onChange={updateTitle}
          />
          <Toolbar editor={editor} onOpenImage={() => setShowGallery(true)} />
          <div className="h-[1px] w-full bg-gray-600 my-3" />
        </div>
        {editor ? <EditLink editor={editor} /> : null}
        <EditorContent className="min-h-[400px]" editor={editor} />
        <div className="h-[1px] w-full bg-gray-600 my-3" />
        <SeoForm onChange={updateSeoValue} title={post.title} initialValue={seoInitilaValue} />
      </div>
      {/* Gallery modal */}
      <GalleryModal
        images={images}
        visible={showGallery}
        onClose={() => setShowGallery(false)}
        onFileSelect={handleImgUpload}
        onSelect={handleImgSelection}
        uploading={uploading}
      />
    </>
  );
};

export default Editor;
