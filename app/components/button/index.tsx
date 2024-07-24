import "./style.css";

import { CSSProperties, FC, PropsWithChildren } from "react";

type ButtonProps = {
  variant?: "contained" | "url" | "outline";
  style?: CSSProperties;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
};

export const Button: FC<PropsWithChildren & ButtonProps> = ({
  children,
  className,
  style,
  type,
  variant,
}) => {
  if (variant === "url")
    return (
      <button
        className={`${className} button-url-style`}
        style={style}
        type={type}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`${className} button-contained-style`}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};
