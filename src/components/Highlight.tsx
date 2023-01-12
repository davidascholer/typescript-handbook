import React, {type PropsWithChildren} from 'react';
import {ColorValue, StyleSheet, Text, View} from 'react-native';

const Highlight: React.FC<PropsWithChildren<{color: "red" | "purple"}>> = ({
  color,
  children,
}) => {
    
    // Initialize and set default color.
    let colorValue:ColorValue|string = "fff";

    switch(color){
        case "red": {
            colorValue = "#FFEEED";
            break; 
        }
        case "purple": {
            colorValue = "#BFBFBF";
            break; 
        }
        default:
            const _exhaustiveCheck: never = color;
            return _exhaustiveCheck;
    }
  return (
    <Text style={[styles.container, {backgroundColor: colorValue}]}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default Highlight;
