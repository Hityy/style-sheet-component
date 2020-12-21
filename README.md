# style-sheet-component
[![npm version](https://badge.fury.io/js/style-sheet-component.svg)](https://badge.fury.io/js/style-sheet-component)
![npm](https://img.shields.io/npm/dw/style-sheet-component)

Write styles and code in one file reactjs component like in react-native approach together with type checking and intellisense.

## Installation

`npm install style-sheet-component` 

## Example 
```typescript
import React, { FC } from 'react';
import { StyleSheet, useMediaQuery } from 'style-sheet-component';

interface Props {
    text: string;
}

export const ExampleComponent: FC<Props> = ({ text }) => {
    const matches = useMediaQuery({ min: 500 });

    return (
        <div style={styles.container}>
            <p style={matches ? styles.textDesktop : styles.textMobile}>{text}</p>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: '5px 20px',
        backgroundColor: 'blue'
    },
    textMobile: {
        fontSize: "12px",
        color: 'yellow',
    },
    textDesktop: {
        fontSize: "35px",
        color: "white"
    }
});
```

