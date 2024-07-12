import "./style.css";
import { CSSProperties, FC, PropsWithChildren } from "react";

type ParagraphProps = {
  variant?: "primary" | "secondary";
  style?: CSSProperties;
};

export const Paragraph: FC<PropsWithChildren & ParagraphProps> = ({
  children,
  variant,
  style,
}) => {
  if (variant === "secondary")
    return (
      <p className="secondary-p-style" style={style}>
        {children}
      </p>
    );

  return (
    <p className="primary-p-style" style={style}>
      {children}
    </p>
  );
};
