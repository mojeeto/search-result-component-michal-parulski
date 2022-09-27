import { useEffect, useCallback } from "react";

export default function useKey(key: KeyboardEvent["code"], cb: Function) {
  const callback = useCallback(cb, [cb]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (key === e.code) {
        callback(e);
      }
    }
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [callback, key]);
}
