import classNames from "classnames";

import style from "styles/components/Button.module.scss";
import { ButtonVariantType } from "./types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariantType;
}

const Button = ({
  children,
  variant = "contained",
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={classNames(style.button, {
        [style.button__outlined]: variant === "outlined",
      })}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
