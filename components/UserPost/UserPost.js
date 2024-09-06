import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
const UserPost = (props) => {
    return (
        <View style={style.UserPostContainer}>
            <View style={style.userInformationContainer}>
                <View style={style.userInformation}>
                    {/* <View style={style.image}>
                        <Image source={require('../../assets/images/default-profile.png')}></Image>
                    </View> */}
                    <UserProfileImage />
                    <View style={style.userPostInformation}>
                        <Text style={style.name}>{props.firstName} {props.lastName}</Text>
                        <Text style={style.location}>{props.location}</Text>
                    </View>
                </View>
                <Pressable>
                    <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={22} />
                </Pressable>
            </View>
            <View style={style.post}>
                <Image resizeMode={'cover'} source={require('../../assets/images/default-post.png')}></Image>
            </View>
            <View style={style.UserPostStats}>
                <Pressable style={style.UserPostStatButton}>
                    <FontAwesomeIcon icon={faHeart} style={style.UserPostStatIcon} />
                    <Text style={style.UserPostStatText}>{props.likes}</Text>
                </Pressable>
                <Pressable style={style.UserPostStatButton}>
                    <FontAwesomeIcon icon={faComment} style={style.UserPostStatIcon} />
                    <Text style={style.UserPostStatText}>{props.comments}</Text>
                </Pressable>
                <Pressable style={style.UserPostStatButton}>
                    <FontAwesomeIcon icon={faBookmark} style={style.UserPostStatIcon} />
                    <Text style={style.UserPostStatText}>{props.bookmarks}</Text>
                </Pressable>
            </View>
        </View>
    );
};

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
    location: PropTypes.string
}

export default UserPost;