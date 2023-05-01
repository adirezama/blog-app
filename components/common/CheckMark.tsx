import { FC } from "react";
import { BiCheck } from "react-icons/bi";

interface Props {
  visible: boolean;
}

const CheckMark: FC<Props> = ({ visible }): JSX.Element | null => {
  if (!visible) return null;
  return (
    <div className="bg-color3 p-2 text-color1 rounded-full bg-opacity-70 border border-color1 backdrop-blur-sm">
      <BiCheck />
    </div>
  );
};

export default CheckMark;
