import { createContext } from "react";

export const PrePathContext = createContext<{ lastPath, applyRef }>({ lastPath: undefined, applyRef: undefined });
