import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    storyContainer: {
        marginRight: 20
    },
    name: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
    },
    location: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: '#79869F'
    },
    userInformation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userPostInformation: {
        marginLeft: 10
    },
    image: {
        borderWidth: 1,
        borderColor: '#F35BAC',
        borderRadius: 50,
        padding: 3
    },
    userInformationContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    UserPostContainer: {
        borderBottomWidth: 1,
        borderBlockColor: '#EFF2F6',
        marginBottom:20
    },
    UserPostStatText:{
        color:'#79869F'
    },
    post: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 16
    },
    UserPostStats: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom:20,
        paddingHorizontal:20
    },
    UserPostStatButton: {
        marginRight: 27,
        flexDirection: 'row'
    },
    UserPostStatIcon: {
        marginRight: 3,
        color:'#79869F'
    }
});

export default style;