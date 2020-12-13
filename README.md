# style-sheet-component
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
            <p>{text}</p>
        </div>
    );
}

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

