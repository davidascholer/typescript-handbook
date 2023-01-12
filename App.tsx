import React, {useState} from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MenuBar from './src/components/MenuBar';
import Modal from './src/components/Modal';

import HomeScreen from './src/pages/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [menuShown, setMenuShown] = useState(true);
  const [modalShown, setModalShown] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HomeScreen
        menuShown={menuShown}
        modalShown={modalShown}
        setMenuShown={setMenuShown}
        ></HomeScreen>
      <Modal
        modalShown={modalShown}
        ></Modal>
      <MenuBar menuShown={menuShown} setModalShown={setModalShown}></MenuBar>
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
