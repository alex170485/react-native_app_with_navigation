import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
       navigation.navigate('Post')
    }
    return <View style={styles.center}>
        <Text>
            MainScreen
        </Text>
        <Button title='go to post' onPress={goToPost}></Button>
    </View>
}
MainScreen.navigationOptions = {
    headerTitle: 'Мой блог'

}

const styles = ({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})