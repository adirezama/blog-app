import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSetting } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { navMenu } from "../../constant";

interface Props {}

const Navbar: FC<Props> = (props): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const openWidth = "w-48";
  const closeWidth = "w-20";
  const toggleNav = (visibility: boolean) => {
    const currentNav = navRef.current;
    if (!currentNav) return;
    const { classList } = currentNav;
    if (visibility) {
      classList.remove(openWidth);
      classList.add(closeWidth);
    } else {
      classList.add(openWidth);
      classList.remove(closeWidth);
    }
  };
  const updateNavState = () => {
    toggleNav(visible);
    setVisible(!visible);
    localStorage.setItem("nav-state", JSON.stringify(!visible));
  };
  useEffect(() => {
    const navState = localStorage.getItem("nav-state");
    if (navState !== null) {
      const newState = JSON.parse(navState);
      setVisible(newState);
      toggleNav(!newState);
    } else {
      setVisible(true);
    }
  }, []);
  return (
    <nav
      ref={navRef}
      className="border-r sticky top-0 flex justify-between shadow-lg rounded-r-xl w-48 bg-color1 h-screen transition-width overflow-hidden">
      <div
        className={
          visible
            ? `m-4 flex flex-col justify-between w-full`
            : `m-4 flex flex-col items-center justify-between w-full`
        }>
        {/* Header and Logo */}
        <div
          className={
            visible
              ? `my-4 flex flex-col justify-center gap-12`
              : `my-4 flex flex-col items-center gap-12`
          }>
          <Link href={"/"} className="flex items-center justify-center overflow-hidden w-full">
            <Image title="Sweet Wish" src="/icon-rev.png" height={`60`} width={`60`} alt="logo" />
          </Link>
          {/* Menu List */}
          <div
            className={
              visible
                ? `flex flex-col justify-center gap-10`
                : `flex flex-col items-center justify-center gap-10`
            }>
            {navMenu.map((menu) => (
              <ul
                key={menu.href}
                className="flex flex-col justify-center hover:bg-color2 hover:fill-color1 font-semibold text-color2 hover:text-color1 rounded-md leading-none">
                <li title={menu.label}>
                  <Link className="flex items-center gap-2 " href={menu.href}>
                    <span className="p-2">{menu.icon}</span> {visible && <span>{menu.label}</span>}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
        {/* Setting */}
        <ul>
          <li className="flex items-center leading-none gap-2 my-2 fill-color3 hover:text-color1 hover:bg-color2 active:fill-color1 active:bg-color2 cursor-pointer rounded-md p-2">
            <AiOutlineSetting size={25} title="Setting" />
            {visible && <span> Setting</span>}
          </li>
          <li
            onClick={updateNavState}
            className="flex items-center leading-none gap-2 my-2 fill-color3 hover:text-color1 hover:bg-red-600  active:fill-color1 active:bg-color2 cursor-pointer rounded-md p-2">
            <ImExit size={25} title="Sign out" />
            {visible && <span> Exit</span>}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
