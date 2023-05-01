import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsCode,
  BsBraces,
  BsLink45Deg,
  BsListOl,
  BsListUl,
  BsYoutube,
  BsImageFill,
} from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";

const bold = <BsTypeBold />;
const italic = <BsTypeItalic />;
const underline = <BsTypeUnderline />;
const strike = <BsTypeStrikethrough />;
const doubleQuote = <RiDoubleQuotesL />;
const code = <BsCode />;
const braces = <BsBraces />;
const link45 = <BsLink45Deg />;
const ol = <BsListOl />;
const ul = <BsListUl />;
const youtube = <BsYoutube />;
const imageFIll = <BsImageFill />;

export const buttonHelper = [
  {
    title: "Bold",
    button: bold,
  },
  {
    title: "Italic",
    button: italic,
  },
  {
    title: "Underline",
  },
  {
    title: "Strikethrough",
    button: strike,
  },
];

export const buttonHelper2 = [
  { title: "Quoted text", button: doubleQuote },
  { title: "Code", button: code },
  { title: "Braces", button: braces },
  { title: "Insert link", button: link45 },
  { title: "Numbered list", button: ol },
  { title: "Button list", button: ul },
];
export const buttonHelper3 = [
  { title: "Insert youtube", button: youtube },
  { title: "Insert image", button: imageFIll },
];
