import { useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(320);
  const resizeObserver = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.contentBoxSize) {
        setWidth(Math.floor(entry.contentBoxSize[0].inlineSize));
      } else {
        setWidth(Math.floor(entry.contentRect.width));
      }
    }
  });
  return { resizeObserver, width };
};
