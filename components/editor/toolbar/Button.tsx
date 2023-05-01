import { FC, MouseEventHandler, ReactNode, useCallback } from "react";

interface Props {
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
}

const Button: FC<Props> = ({
  children,
  active,
  disabled,
  onMouseDown,
  onClick,
  title,
}): JSX.Element => {
  const activeStyle = useCallback((): string => {
    if (active) {
      return "bg-gray-100 text-color3";
    } else {
      return "";
    }
  }, [active]);
  const commonClass = "p-2 hover:bg-gray-300 rounded hover:scale-95 ";
  return (
    <button
      title={title}
      type="button"
      onMouseDown={onMouseDown}
      onClick={onClick}
      className={commonClass + activeStyle()}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
