import { useCallback, useEffect, useState } from "react";

export function useInput(
  initValue: string = ""
): [string, (ev: React.ChangeEvent<HTMLInputElement>) => void] {
  const [inputValue, setInputValue] = useState(initValue);
  const onInputChange: ReturnType<typeof useInput>[1] = useCallback(function (
    ev
  ) {
    setInputValue(ev.target.value);
  },
  []);
  return [inputValue, onInputChange];
}

export function useOnPageLeave(cb: () => void) {
  useEffect(() => {
    window.addEventListener("beforeunload", cb);
    return () => {
      window.removeEventListener("beforeunload", cb);
    };
  }, [cb]);
}
