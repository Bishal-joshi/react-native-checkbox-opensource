import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

const Checkbox = ({ label, onChange ,size,checkboxColor,tickColor,checkboxBorderColor}) => {
  const [isChecked, setIsChecked] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;

  const totalSize=size?size:20;
 
  const handleToggle = () => {
    setIsChecked(!isChecked);

    Animated.spring(scaleValue, {
      toValue: isChecked ? 0 : 1,
      useNativeDriver: false,
    }).start();

    // Callback to parent component if provided
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity onPress={handleToggle} style={{ flexDirection: 'row'}}>
      <View
      style={{
        width: totalSize,
        height: totalSize,
        borderRadius: totalSize/2,
        borderWidth: 2,
        borderColor: checkboxBorderColor?checkboxBorderColor:'#3498db',
        justifyContent:'center',
        alignItems: 'center' 
      }}
      >

      <Animated.View
        style={{
        width: totalSize,
        height: totalSize,
        borderRadius: totalSize/2,
        borderWidth: 2,
        borderColor: checkboxBorderColor?checkboxBorderColor:'#3498db',
          backgroundColor: isChecked ? checkboxColor?checkboxColor:'#3498db' : 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ scale: scaleValue }],
        }}
      >
        {isChecked && (
          <Text style={{ color: tickColor?tickColor:'#fff', fontSize: totalSize/2 }}>✓</Text>
        )}
      </Animated.View>
      </View>

      {/* <Text>{label}</Text> */}
    </TouchableOpacity>
  );
};

export default Checkbox;

