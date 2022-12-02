import { useState, useEffect } from "react";
import { useWindowEvent } from '../use-window-event/use-window-event';


export function useHash() {
  const [hash, setHashValue] = useState<string>("");

  const setHash = (value: string) => {
    if (!value.startsWith("#")) {
      value = "#" + value;
    }
    window.location.hash = value;
    setHashValue(value);
  };

  useWindowEvent("hashchange", () => {
    const newHash = window.location.hash;
    if (hash !== newHash) {
      setHashValue(hash);
    }
  });

  useEffect(() => {
    setHashValue(window.location.hash);
  }, []);

  return [hash, setHash] as const;
}
