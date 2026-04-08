import React, { CSSProperties } from "react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  metric: string;
  subtitle: React.ReactNode;
  isGreenIcon?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  metric,
  subtitle,
  isGreenIcon = false,
}) => {
  const metricCardStyle: CSSProperties = {
    padding: "24px",
    backgroundColor: "var(--primary-color)",
    border: "1px solid var(--border-dark-gray)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
    cursor: "pointer",
  };

  const iconStyle: CSSProperties = {
    width: "56px",
    height: "56px",
    backgroundColor: isGreenIcon
      ? "var(--green-accent)"
      : "var(--accent-color)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const titleStyle: CSSProperties = {
    fontFamily: '"VCR OSD Mono", Courier, monospace',
    fontSize: "20px",
    lineHeight: "1.2",
    color: "var(--green-accent)",
    margin: 0,
  };

  const metricStyle: CSSProperties = {
    fontFamily: '"VCR OSD Mono", Courier, monospace',
    fontSize: "28px",
    fontWeight: "bold",
    color: "var(--text-color)",
    margin: "8px 0 4px 0",
    lineHeight: "1",
  };

  const subtitleStyle: CSSProperties = {
    fontFamily: '"Satoshi", "Courier New", Courier, monospace',
    fontSize: "16px",
    lineHeight: "1.5",
    color: "var(--gray-text-color)",
    margin: 0,
  };

  const handleHover = (el: HTMLElement | null, enter: boolean) => {
    if (!el) return;
    if (enter) {
      el.style.borderColor = "var(--accent-color)";
      el.style.boxShadow = "0 0 20px rgba(199, 56, 255, 0.3)";
    } else {
      el.style.borderColor = "var(--border-dark-gray)";
      el.style.boxShadow = "none";
    }
  };

  return (
    <div
      style={metricCardStyle}
      onMouseEnter={(e) => handleHover(e.currentTarget, true)}
      onMouseLeave={(e) => handleHover(e.currentTarget, false)}
    >
      <div style={iconStyle}>
        <Icon size={24} color="var(--primary-color)" />
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <div style={metricStyle}>{metric}</div>
      <p style={subtitleStyle}>{subtitle}</p>
    </div>
  );
};

export default MetricCard;
