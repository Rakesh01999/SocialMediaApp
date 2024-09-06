import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes  from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
const UserStory = (props) => {
    return (
        <View style={style.storyContainer}>
            <UserProfileImage />
            {/* <View style={style.userImageContainer}>
                <Image source={require('../../assets/images/default-profile.png')}></Image>
            </View> */}
            <Text style={style.name}>{props.firstName}</Text>
        </View>
    );
};

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired
}

export default UserStory;