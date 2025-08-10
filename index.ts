import { CSSProperties, useEffect, useState } from 'react';


export namespace StyleSheet {
    type NamedStyles<T> = { [P in keyof T]: CSSProperties };
    export function create<T extends NamedStyles<T>>(styles: T | NamedStyles<T>): T {
        return styles as T;
    }
}

interface MinWidthPx {
    min: number;
    max?: null;
}
interface MaxWidthPx {
    max: number;
    min?: null;
}

export const useMediaQuery = (query: MinWidthPx | MaxWidthPx) => {
    const mediaMatch = window.matchMedia(`(${query.min ? 'min' : 'max'}-width: ${query.min || query.max}px)`);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = (e: any) => setMatches(e.matches);
        mediaMatch.addEventListener("change",handler);
        return () => mediaMatch.removeEventListener("change",handler);
    },[]);
    return matches;
}
