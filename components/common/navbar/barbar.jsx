import { AiOutlineSetting } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { navMenu } from "../../constant";

export default function Barbar({ sidebarRef }) {
  return (
    <nav
      ref={sidebarRef}
      className="border-r sticky top-0 flex justify-between shadow-lg rounded-r-xl w-40 bg-color1 h-screen  transition-width ease-linear duration-300 ">
      <div className="m-4 flex flex-col justify-between w-full">
        {/* Header and Logo */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between">
            <img title="Sweet Wish" className="h-12 max-md:h-10" src="/icon-rev.png" alt="" />
          </div>
          {/* Menu List */}
          <div className=" flex flex-col my-6 justify-center gap-12">
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
              className="fill-color3 hover:fill-color1 hover:bg-red-600 active:fill-color1 active:bg-color2 items-center justify-center flex h-10 w-10 cursor-pointer rounded-md p-2"
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
