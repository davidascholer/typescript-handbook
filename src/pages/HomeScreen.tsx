import React, {type PropsWithChildren, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen: React.FC<
  PropsWithChildren<{
    menuShown: boolean;
    setMenuShown: Function;
    slideOut: Function;
    slideIn: Function;
  }>
> = ({menuShown, setMenuShown, slideOut, slideIn}) => {
  // Set the old scroll position.
  const oldPos = useRef(0);

  const handleScroll = (e: any) => {
    const newPos = e.nativeEvent.contentOffset.y;
    if (newPos > oldPos.current && menuShown) {
      // Hide the menu.
      slideOut();
      setMenuShown(false);
      console.log('OUT')

    } else {
      if (newPos < oldPos.current && !menuShown)
        // Show the menu.
        slideIn();
        setMenuShown(true);
        console.log('IN')
        }
    oldPos.current = newPos;
  };

  return (
    <ScrollView
      scrollEventThrottle={1000}//IOS only. Controls how often the scroll event will be fired while scrolling (as a time interval in ms).
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
      onScroll={e => handleScroll(e)}>
        <Text>Some stuff</Text>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
