import React from "react";

type SquareButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

const SquareButton: React.FC<SquareButtonProps> = ({
  icon,
  children,
  ...props
}) => {
  return (
    <button className="square-button" {...props}>
      {icon && <span className="square-button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default SquareButton;
