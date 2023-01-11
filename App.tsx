import React, {useRef, useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MenuBar from './src/components/MenuBar';

import HomeScreen from './src/pages/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [menuShown,setMenuShown] = useState(true);
  // Initial 'left' value
  const slideAnimLeftValue = useRef(new Animated.Value(75)).current;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height:"100%"
  };

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
    // Will slide into view in .5 seconds
    Animated.timing(slideAnimLeftValue, {
      ...slideAnimValues,
      toValue: 75,
    }).start();
  };

  const slideOut = () => {
    // Will slide out of view in .5 seconds
    Animated.timing(slideAnimLeftValue, {
      ...slideAnimValues,
      toValue: -25,
    }).start();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <HomeScreen menuShown={menuShown} setMenuShown={setMenuShown} slideOut={slideOut} slideIn={slideIn}>
        </HomeScreen>
        <MenuBar menuShown={menuShown} slideAnimLeftValue={slideAnimLeftValue}></MenuBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
