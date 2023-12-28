"use client"
import { useEffect, useRef, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { PrePathContext } from "./PrePathContext";

export const TransitionRouteProvider = ({ children }) => {
    const pathname = usePathname();
    const [lastPath, setLastPath] = useState(pathname);
    const applyRef = useRef<any>();
    const contextVal = useMemo(() => {
        return {
            applyRef,
            lastPath,
        };
    }, [lastPath]);
    useEffect(() => {
        if (lastPath != pathname) {
            setLastPath(pathname);
            applyRef.current?.();
        }
    }, [pathname, lastPath]);
    return <PrePathContext.Provider value={contextVal}>
        {children}
    </PrePathContext.Provider>;

};
