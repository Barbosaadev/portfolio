"use client";

import { useEffect, useState } from "react";

/**
 * true em desktop com mouse: hover real + ponteiro fino.
 * Touch e telas grossas ficam de fora das microinterações de cursor.
 */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setFine(query.matches);
    const onChange = (event: MediaQueryListEvent) => setFine(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return fine;
}
