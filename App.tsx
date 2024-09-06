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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{
          paddingTop:30,
          paddingLeft:17,
          paddingRight:26,
          flex:1, 
          flexDirection:'row', 
          alignItems:'center',
          justifyContent: 'space-between'}}>
          <Title title={"Let's Explore"} />
          <FontAwesomeIcon icon={faEnvelope} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
