import React, {type PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const HomeScreen: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  return (
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={styles.container}
    >
      <Text>{title}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default HomeScreen;
