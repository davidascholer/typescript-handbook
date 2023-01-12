import React, {type PropsWithChildren, useEffect, useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';

const MenuBar: React.FC<
  PropsWithChildren<{
    menuShown: boolean;
    setModalShown: Function;
  }>
> = ({menuShown, setModalShown}) => {
  // Initial 'left' value
  const slideAnimLeftValue = useRef(new Animated.Value(0)).current;
  const menuSizeInPixels: number = 75;

  type AnimValues = {
    toValue: number;
    duration: number;
    useNativeDriver: boolean;
  };

  const slideAnimValues: AnimValues = {
    toValue: 0,
    duration: 500,
    // Set to false to support layout transitions.
    useNativeDriver: false,
  };

  const slide = (slidePixels: number): void => {
    // Will slide into view in .5 seconds
    Animated.timing(slideAnimLeftValue, {
      ...slideAnimValues,
      toValue: slidePixels,
    }).start();
  };

  useEffect(() => {
    if (menuShown) {
      slide(Math.ceil(menuSizeInPixels*.5));
    } else {
      slide(Math.ceil(menuSizeInPixels*-1.5));
    }
  });

  const handlePressed = () => {
    setModalShown((modalShown: boolean) => !modalShown);
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
    bottom: 20,
    height: 75,
    left: 25,
    position: 'absolute',
    width: 75,
  },
});

export default MenuBar;
