import { useEffect, useRef } from "react";

export function ToolTip({
  role,
  scope,
  operations,
}: {
  role: string;
  scope: string;
  operations: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const TOOLTIP_OFFSET = {
    x: 15,
    y: 15,
  };
  useEffect(() => {
    addEventListener("mousemove", (e) => {
      const { pageX: x, pageY: y } = e;

      if (ref.current) {
        ref.current.style.left = `${x + TOOLTIP_OFFSET.x}px`;
        ref.current.style.top = `${y + TOOLTIP_OFFSET.y}px`;
      }
    });
  });
  return (
    <div
      ref={ref}
      className="absolute z-10 top-0 left-0 bg-white p-2 shadow-lg rounded-sm"
    >
      <div>
        <span className="font-medium">Role: </span>
        {role}
      </div>
      <div>
        <span className="font-medium">Scope: </span>
        {scope}
      </div>
      <div>
        <span className="font-medium">Actions: </span>
        {operations}
      </div>
    </div>
  );
}
