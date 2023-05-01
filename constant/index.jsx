import { RiDashboardLine, RiDoubleQuotesL } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineGroups } from "react-icons/md";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
  BsBraces,
  BsCode,
  BsListOl,
  BsListUl,
  BsImageFill,
  BsYoutube,
  BsLink45Deg,
  BsFilePost
} from "react-icons/bs";
export const color =
  "fill-color3 hover:fill-color1 hover:bg-color2 active:fill-color1 active:bg-color2 items-center justify-center flex  cursor-pointer rounded-md p-2";
export const color1 =
  "fill-color3 hover:fill-color1 hover:bg-color2 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2";

const dashboard = <RiDashboardLine size={25} />;
const post = <  BsFilePost size={25} />;
const comment = <BiCommentDetail size={25} />;
const user = <MdOutlineGroups size={25} />;

export const navMenu = [
  { href: "/admin", icon: dashboard, label: "Dashboard" },
  { href: "/admin/posts", icon: post, label: "Post" },
  { href: "/admin/comments", icon: comment, label: "Comment" },
  { href: "/admin/user", icon: user, label: "User" },
  // { href: "/message", icon: <IoMailOutline />, label: "Message" },
];

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
  { title: "Bold", button: bold },
  { title: "Italic", button: italic },
  { title: "Underline", button: underline },
  { title: "Strikethrough", button: strike },
  { title: "Quoted text", button: doubleQuote },
  { title: "Code", button: code },
  { title: "Braces", button: braces },
  { title: "Insert link", button: link45 },
  { title: "Numbered list", button: ol },
  { title: "Button list", button: ul },
  { title: "Insert youtube", button: youtube },
  { title: "Insert image", button: imageFIll },
];

export const headingDropdown = [
  {
    label: "Paragraph",
    onClick: () => {
      editor.chain().focus().toggleBold().run();
    },
  },
  {
    label: "Heading 1",
    onClick: () => {
      editor.chain().focus().toggleBold().run();
    },
  },
  {
    label: "Heading 2",
    onClick: () => {
      editor.chain().focus().toggleBold().run();
    },
  },
  {
    label: "Heading 3",
    onClick: () => {
      editor.chain().focus().toggleBold().run();
    },
  },
];

export const footer = [
  {
    head: "For Beginner",
    links: [
      { name: "About Us", link: "" },
      { name: "Contact Us", link: "" },
      { name: "New Account", link: "" },
    ],
  },
  {
    head: "Explore Us",
    links: [
      { name: "Our Careers", link: "" },
      { name: "Privacy", link: "" },
      { name: "Terms & Condition", link: "" },
    ],
  },
  {
    head: "Explore Us",
    links: [
      { name: "Our Careers", link: "" },
      { name: "Privacy", link: "" },
      { name: "Terms & Condition", link: "" },
    ],
  },
];
