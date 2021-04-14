import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export const BookedScreen = ({}) => {
    return <View style = {styles.center}>
        <Text>
            BookedScreen
        </Text>
    </View>
}

const styles = ({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})