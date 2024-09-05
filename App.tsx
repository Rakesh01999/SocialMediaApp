import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Title from './components/Title/Title';


const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Text style={{ fontFamily: 'Inter-Black' }}>Hello World</Text> */}
        <Title title={"Let's Explore"}/>
      </View>
    </SafeAreaView>
  );
}

export default App;
