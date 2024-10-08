import React from 'react';
import { View, Image } from 'react-native';
import style from './style';

const UserProfileImage = () => {
    return <View style={style.userImageContainer}>
        <Image source={require('../../assets/images/default-profile.png')}></Image>
    </View>
};

export default UserProfileImage;