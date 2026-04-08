"use client";
import React, { CSSProperties } from "react";
import { Users, Brain, Target, AlertTriangle } from "lucide-react";
import MetricCard from "./MetricCard";

const StudyOverview = ({ className = "" }: { className?: string }) => {
  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    padding: "32px",
    backgroundColor: "var(--primary-color)",
    border: "1px solid var(--border-dark-gray)",
    borderRadius: "16px",
    margin: "32px auto",
    width: "1024px",
    maxWidth: "1024px",
  };

  const cards = [
    {
      icon: Target,
      title: "UX Research",
      metric: "NASA-TLX",
      subtitle: (
        <>
          Safety-critical ski-tour planning tool
          <br />
          <strong>N=5 experienced users</strong>
        </>
      ),
      isGreenIcon: true,
    },
    {
      icon: AlertTriangle,
      title: "Biggest Pain",
      metric: "2x Mental Load",
      subtitle: (
        <>
          No route comparison feature → users rely on memory
          <br />
          <em>Task 2: 290s avg (vs 202s Task 1)</em>
        </>
      ),
      isGreenIcon: false,
    },
    {
      icon: Brain,
      title: "Outcome",
      metric: "Design Recs",
      subtitle: (
        <>
          Side-by-side comparison → <strong>Lower cognitive load</strong>
          <br />
          Menu restructure → <strong>Faster decisions</strong>
          <br />
          <em>Safer backcountry skiing</em>
        </>
      ),
      isGreenIcon: true,
    },
    {
      icon: Users,
      title: "Method",
      metric: "NASA-TLX: 4.7",
      subtitle: (
        <>
          Think-aloud protocol
          <br />3 realistic tasks
          <br />
          <strong>100% task completion</strong>
        </>
      ),
      isGreenIcon: false,
    },
  ];

  return (
    <div style={containerStyle} className={className}>
      {cards.map((card, index) => (
        <MetricCard key={index} {...card} />
      ))}
    </div>
  );
};

export default StudyOverview;
