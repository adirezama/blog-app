import { FC, useState, ReactNode } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
interface Props {
  options: { label: string; onClick(): void }[];
  head: ReactNode;
}

const DropdownOption: FC<Props> = ({ head, options }): JSX.Element => {
  const [visible, setVisible] = useState(false);
  return (
    <button
      onBlur={() => setVisible(false)}
      onMouseDown={() => {
        setVisible(!visible);
      }}
      className="relative flex items-center justify-between font- text-color2 p-2 outline-none text-base  w-28 rounded-sm">
      {head}
      <AiOutlineCaretDown />
      {visible && (
        <div className="absolute top-full min-w-max right-0 mt-2 z-10 w-28 bg-gray-100 rounded-sm text-left">
          <ul>
            {options.map(({ label, onClick }, index) => {
              return (
                <li key={label + index} onMouseDown={onClick} className="">
                  <a className="block px-4 py-1 hover:bg-gray-300 ">{label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropdownOption;
