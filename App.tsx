import React, { useState } from 'react';

import {
  FlatList,
  Pressable,
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
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  // All of the items in our stories
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'Oliver',
      id: 4,
    },
    {
      firstName: 'Nata',
      id: 5,
    },
    {
      firstName: 'Adam',
      id: 6,
    },
    {
      firstName: 'Sean',
      id: 7,
    },
    {
      firstName: 'Nicolas',
      id: 8,
    },
    {
      firstName: 'Fedrick',
      id: 9,
    }
  ];
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));
  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    // console.log(startIndex,renderData.length)
    if (startIndex > data.length) {
      return [];
    }
    setPageNumber(pageNumber );
    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title={"Let's Explore"} />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={{
                fontSize: 6,
                fontFamily: 'Inter',
                lineHeight: 7,
                fontWeight: 600,
                color: '#FFFFFF'
              }}>
                2
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={style.useHistoryContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true);
                setRenderData(prev => [...prev, ...pagination(data, pageNumber + 1, pageSize)])
                setIsLoading(false);
              }
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={renderData}
            renderItem={({ item }) => <UserStory firstName={item.firstName} />}></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
