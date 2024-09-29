import * as Common from "../Common/";

type ButtonProps = {
  label: string;
  type: buttonType.Submit;
  disabled?: boolean;
  onClick: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  loading?: boolean;
};

export enum buttonType {
  Submit = "submit",
  Button = "button",
  Reset = "reset",
  Underfined = "undefined",
}

const Button = ({
  label,
  type,
  onClick,
  loading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="text-white w-[100%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
    >
      {loading ? <Common.Spinner /> : label}
    </button>
  );
};

export default Button;
