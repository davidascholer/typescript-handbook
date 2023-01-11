import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MenuBar from './src/components/MenuBar';

import HomeScreen from './src/screens/HomeScreen';

  // type Fish = { swim: () => void };
  // type Bird = { fly: () => void };

  // const lilfish: Fish = {
  //   swim: ()=>{console.log("swimming")}
  // }

  // const lilbird: Bird = {
  //   fly: ()=>{console.log("flying")}
  // }

  // function isFish(pet: Fish | Bird) : pet is Fish{

  //   return (pet as Fish).swim !== undefined;
  // }

  // function getFood(pet: Fish | Bird){
  //   if(isFish(pet)){
  //     pet
  //     console.log("fish");
  //   }else{
  //     pet
  //     console.log("bird")
  //   }  
  //   return (pet as Fish).swim !== undefined;
  // }



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height:"100%"
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <HomeScreen title={"a title"}>
        </HomeScreen>
        <MenuBar></MenuBar>
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
