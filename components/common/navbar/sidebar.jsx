import { AiOutlineSetting } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { navMenu } from "../../constant";
import { Link } from "react-router-dom";

export default function Sidebar({ sidebarRef }) {
  return (
    <nav
      ref={sidebarRef}
      className="portrait:hidden border-r sticky top-0 flex justify-between shadow-lg rounded-r-xl w-20 bg-color1 h-screen  transition-width ease-linear duration-300 ">
      <div className="m-4 flex flex-col justify-between w-full">
        {/* Header and Logo */}
        <div className="my-5 flex flex-col items-center gap-16">
          <Link to={"/"} className="flex items-center justify-between">
            <img title="Sweet Wish" className="" src="/icon_g.svg" sizes="" alt="" />
          </Link>
          {/* Menu List */}
          <div className=" flex flex-col justify-center gap-12">
            {navMenu.map((menu) => (
              <ul key={menu.href} className="flex flex-col justify-center ">
                <li title={menu.label}>{menu.icon}</li>
              </ul>
            ))}
          </div>
        </div>
        {/* Setting */}
        <div>
          <button className="flex justify-center my-4">
            <AiOutlineSetting
              title="Setting"
              className="fill-color3 hover:fill-color1 hover:bg-color2 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2"
            />
          </button>
          <button className="flex justify-center my-4">
            <ImExit
              title="Sign out"
              className="fill-color3 hover:fill-color1 hover:bg-red-600 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
