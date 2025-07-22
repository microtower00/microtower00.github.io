import React from "react";
import type { LucideIcon } from "lucide-react";

type SquareButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  lucideIcon?: LucideIcon;
  iconProps?: React.ComponentProps<LucideIcon>;
  href?: string;
  onAction?: () => void;
  color?: string; // Accept color as a prop
};

const SquareButton: React.FC<SquareButtonProps> = ({
  icon,
  lucideIcon: LucideIconComponent,
  iconProps,
  href,
  onAction,
  onClick,
  children,
  color = "var(--accent-color)", // Default to accent color
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
    onAction?.();
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const iconElement = LucideIconComponent ? (
    <span className="square-button-icon">
      <LucideIconComponent size={18} color={color} {...iconProps} />
    </span>
  ) : icon ? (
    <span className="square-button-icon">{icon}</span>
  ) : null;

  // Only set borderColor inline on hover, otherwise let CSS handle it
  const buttonStyle = isHovered ? { borderColor: color } : {};

  const button = (
    <button
      className="square-button"
      onClick={handleClick}
      disabled={props.disabled}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        style={{ textDecoration: "none", ...buttonStyle }}
        tabIndex={props.disabled ? -1 : 0}
        aria-disabled={props.disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {button.props.children}
      </a>
    );
  }

  return button;
};

export default SquareButton;
