# React Native Custom Checkbox

A customizable React Native Checkbox

## Installation

Install the package using npm or yarn:

```bash
npm i react-native-checkbox-opensource

```
## Usage

```javascript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Checkbox from 'react-native-checkbox-opensource';

const App = () => {
  const handleCheckboxChange = (isChecked) => {
    console.log('Checkbox is now:', isChecked ? 'checked' : 'unchecked');
    // Add your additional logic here
  };

  return (
    <View style={styles.container}>
      <Checkbox onChange={handleCheckboxChange} size={50} checkboxColor={"red"} tickColor={"black"} checkboxBorderColor={"red"} />
      
      {/* Add more checkboxes as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
```

## Props
1. onChange: callback Function with 1 arg.
2. size: size of the checkbox
3. checkboxColor: Color of chheckbox.
4. tickColor: Color of tick icon of checkbox.
5. checkboxBorderColor: border color of checkbox.

# License
This project is licensed under the MIT License - see the LICENSE file for details. Feel free to further customize the code according to your project's specifics.
