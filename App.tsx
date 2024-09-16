import React, { useEffect, useState } from 'react';

import {
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

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
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukumbai, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmark: 55,
      id: 1
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 570,
      comments: 12,
      bookmark: 60,
      id: 2
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston,Massachusetts',
      likes: 100,
      comments: 8,
      bookmark: 7,
      id: 3
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, New York',
      likes: 300,
      comments: 18,
      bookmark: 17,
      id: 4
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 1240,
      comments: 56,
      bookmark: 20,
      id: 5
    },
  ];
  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));
  // const [renderDataPosts, setRenderDataPosts] = useState(posts.slice(0, pageSize));
  const [renderDataPosts, setRenderDataPosts] = useState(posts.slice(0, pageSizePosts));

  // console.log(Platform);
  const [isOn, setIsOn] = useState(true);

  const [screenData, setScreenData] = useState(Dimensions.get("screen"));
  console.log(screenData);
  useEffect(() => {
    Dimensions.addEventListener('change', (result) => {
      console.log('changed screen data', result.screen);
      setScreenData(result.screen);
    });
  }, []);

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    // console.log(startIndex,renderData.length)
    if (startIndex > data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber)
    }
    return data.slice(startIndex, startIndex + pageSize);
  };
  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      {/* <StatusBar backgroundColor={'blue'} barStyle={'light-content'} /> */}
      <StatusBar backgroundColor={'yellow'} barStyle={'dark-content'} />

      <View style={style.userPostContainer}>

        <FlatList
          ListHeaderComponent={() => {
            return <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />
                <Switch value={isOn} onValueChange={(value) => setIsOn(value)} style={[Platform.OS === 'android' && { transform: [{ scaleX: 1.8 }, { scaleY: 1.5 }] }]}
                  trackColor={Platform.OS === 'android' && { false: 'grey', true: 'red' }}
                />

                <Pressable style={style.messageIcon}>
                  <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20} />
                  <View style={style.messageNumberContainer}>
                    {/* <Text style={{
                    fontSize: 6,
                    fontFamily: 'Inter',
                    lineHeight: 7,
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}> */}
                    <Text style={[
                      style.messageNumber,
                      { fontSize: screenData.height / 130 }
                    ]}>
                      2
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={style.useStoryContainer}>
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
                  renderItem={({ item }) => <UserStory firstName={item.firstName} />}>

                </FlatList>
              </View>
            </>
          }}
          onMomentumScrollBegin={() => setIsLoadingPosts(false)}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => {
            if (!isLoadingPosts) {
              setIsLoadingPosts(true);
              setRenderDataPosts(prev => [...prev, ...pagination(posts, postPageNumber + 1, pageSizePosts, true)])
              setIsLoadingPosts(false);
            }
          }}
          showsVerticalScrollIndicator={false}
          data={renderDataPosts}
          renderItem={({ item }) => (
            <View >

              <UserPost

                firstName={item.firstName}
                lastName={item.lastName}
                comments={item.comments}
                likes={item.likes}
                bookmarks={item.bookmark}
                location={item.location}
              />
            </View>

          )}
        />

      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default App;
