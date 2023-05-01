import Link from "next/link";
import { FC, useRef, useState } from "react";
import { IconType } from "react-icons/lib";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
// import Logo from "./Logo";

interface Props {
  navItems: { label: string; href: string; icon: IconType }[];
}

const openWidth = "w-52";
const closeWidth = "w-20";
const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const updateNavState = () => {
    const currentNav = navRef.current;
    if (!currentNav) return;
    const { classList } = currentNav;
    if (visible) {
      // hide nav
      classList.remove(openWidth);
      classList.add(closeWidth);
    } else {
      // show nav
      classList.add(openWidth);
      classList.remove(closeWidth);
    }
    setVisible(!visible);
  };
  const [visible, setVisible] = useState(true);
  return (
    <nav
      ref={navRef}
      className="h-screen w-52 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between rounded-r-xl">
      <div className={!visible ? `${`flex flex-col items-center`}` : ""}>
        {/* Logo */}
        <Link href="/admin">
          <div className="flex items-center p-2 mx-2 my-6 gap-3">
            {/* <Logo className=" fill-highlight-light dark:fill-highlight-dark w-6 h-6" /> */}
            {visible && (
              <span className=" text-highlight-light dark:text-highlight-dark text-xl font-semibold">
                Admin
              </span>
            )}
          </div>
        </Link>

        <div className="space-y-6 mx-2">
          {navItems.map((item) => {
            return (
              <div key={item.href}>
                <Link href={item.href}>
                  <div className="flex items-center gap-3 text-highlight-light dark:text-highlight-dark text-xl p-2 hover:scale-[.98] transition">
                    <item.icon size={25} />
                    {visible && <span>{item.label}</span>}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={updateNavState}
        className="p-3 text-highlight-light dark:text-highlight-dark hover:scale-[.98] transition self-end">
        {visible ? (
          <RiMenuFoldFill size={25} />
        ) : (
          <RiMenuUnfoldFill size={25} />
        )}
      </button>
    </nav>
  );
};

export default AdminNav;
