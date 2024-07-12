import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type H1Props = {
  variant?: "primary" | "secondary";
  style?: CSSProperties;
};

export const H1: FC<PropsWithChildren & H1Props> = ({
  children,
  variant,
  style,
}) => {
  if (variant === "secondary")
    return (
      <h1 className="secondary-h1-style" style={style}>
        {children}
      </h1>
    );

  return (
    <h1 className="primary-h1-style" style={style}>
      {children}
    </h1>
  );
};
