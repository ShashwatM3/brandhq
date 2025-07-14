import React, { useState } from "react";
import clsx from "clsx";
export default function ColorPaletteSelector({ palettes = [], onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (palette) => {
    setSelected(palette.name);
    onSelect?.(palette);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {palettes.map((palette) => (
        <div
          key={palette.name}
          onClick={() => handleSelect(palette)}
          className={clsx(
            "cursor-pointer p-4 rounded-xl shadow-md border transition-all duration-200",
            selected === palette.name
              ? "border-blue-500 ring-2 ring-blue-300"
              : "border-gray-200 hover:border-gray-400"
          )}
        >
          <div className="flex space-x-2 mb-2">
            {palette.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="text-lg font-semibold">{palette.name}</div>
          <div className="text-sm text-gray-500">{palette.vibe}</div>
        </div>
      ))}
    </div>
  );
}
