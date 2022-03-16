import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import IsMe from './isMe';
import Other from './other';

const ChatItem = ({ isMe }) => {
    if (isMe) {
        return <IsMe />
    }
    return <Other /> 
};

export default ChatItem;
