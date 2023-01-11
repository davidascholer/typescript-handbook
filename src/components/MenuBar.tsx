import React, {type PropsWithChildren, useRef, useState} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

const MenuBar = () => {
  // Initial 'left' value
  const slideAnim = useRef(new Animated.Value(75)).current;
  const [isShown,setIsShown] = useState(false);

  type AnimValues = {
    toValue: number;
    duration: number;
    useNativeDriver: boolean;
  };

  const slideAnimValues: AnimValues = {
    toValue: 100,
    duration: 500,
    // Set to false to support layout transitions.
    useNativeDriver: false,
  };

  const slideIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      ...slideAnimValues,
      toValue: 75,
    }).start();
  };

  const slideOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(slideAnim, {
      ...slideAnimValues,
      toValue: -25,
    }).start();
  };

  const handlePressed = () => {
    if(isShown)
    slideOut();
    else
    slideIn();

    setIsShown(isShown => !isShown);
  };

  return (
    <TouchableOpacity onPress={handlePressed}>
      <Animated.View
        style={[styles.position, {left: slideAnim}]}></Animated.View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  position: {
    backgroundColor: '#888',
    bottom: 50,
    height: 75,
    left:25,
    position: 'absolute',
    width: 75,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default MenuBar;
