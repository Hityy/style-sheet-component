# style-sheet-component
[![npm version](https://badge.fury.io/js/style-sheet-component.svg)](https://badge.fury.io/js/style-sheet-component)
[![npm downloads](https://img.shields.io/npm/dm/style-sheet-component.svg?maxAge=2592000)](https://img.shields.io/npm/dm/style-sheet-component.svg?maxAge=2592000)

Write styles and code in one file reactjs component like in react-native approach together with type checking and intellisense.

## Installation

`npm install style-sheet-component` 

## Example 
```typescript
import React, { FC } from 'react';
import { StyleSheet } from 'style-sheet-component';

interface Props {
    text: string;
}

export const ExampleComponent: FC<Props> = ({ text }) => {
    return (
        <div style={styles.container}>
            <p style={styles.text}>{text}</p>
        </div>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: '5px 20px',
        backgroundColor: 'blue'
    },
    text: {
        fontSize: "12px",
        color: 'yellow',
    }
});
```

