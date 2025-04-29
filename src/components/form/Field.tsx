import React from "react";

export default function Field({children, htmlFor, label}: {children: React.ReactNode, htmlFor: string, label: string}) {
  return <div className="flex flex-col gap-2">
    <label htmlFor={htmlFor} className="label">{label} *</label>
    {children}
  </div>;
}