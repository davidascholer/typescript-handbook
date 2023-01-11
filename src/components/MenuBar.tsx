import React, {type PropsWithChildren} from 'react';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MenuBar: React.FC<
  PropsWithChildren<{
    menuShown: boolean;
    slideAnimLeftValue: any;
  }>
> = ({menuShown, slideAnimLeftValue}) => {
  const handlePressed = () => {
    console.log("pressed")
  };

  return (
    <TouchableOpacity onPress={handlePressed}>
      <Animated.View
        style={[styles.container, {left: slideAnimLeftValue}]}></Animated.View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#888',
    bottom: 50,
    height: 75,
    left: 25,
    position: 'absolute',
    width: 75,
  },
});

export default MenuBar;
