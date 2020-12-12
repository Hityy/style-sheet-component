import { CSSProperties } from 'react';

export namespace StyleSheet {
    type NamedStyles<T> = { [P in keyof T]: CSSProperties };
    export function create<T extends NamedStyles<T>>(styles: T | NamedStyles<T>): T {
        return styles as T;
    }
}
