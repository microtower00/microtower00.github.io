import React from "react";
import type { LucideIcon } from "lucide-react";

type SquareButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  lucideIcon?: LucideIcon;
  iconProps?: React.ComponentProps<LucideIcon>;
  href?: string;
  onAction?: () => void;
};

const SquareButton: React.FC<SquareButtonProps> = ({
  icon,
  lucideIcon: LucideIconComponent,
  iconProps,
  href,
  onAction,
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    onAction?.();
  };

  const iconElement = LucideIconComponent ? (
    <span className="square-button-icon">
      <LucideIconComponent
        size={18}
        color="var(--accent-color)"
        {...iconProps}
      />
    </span>
  ) : icon ? (
    <span className="square-button-icon">{icon}</span>
  ) : null;

  const button = (
    <button
      className="square-button"
      onClick={handleClick}
      disabled={props.disabled}
      {...props}
    >
      {iconElement}
      {children}
    </button>
  );

  if (href) {
    return (
      <a
        href={href}
        className="square-button"
        style={{ textDecoration: "none" }}
        tabIndex={props.disabled ? -1 : 0}
        aria-disabled={props.disabled}
      >
        {button.props.children}
      </a>
    );
  }

  return button;
};

export default SquareButton;
