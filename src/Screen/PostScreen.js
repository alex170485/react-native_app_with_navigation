import React from "react";
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from 'react-native'
import {DATA} from "../data";
import {THEME} from "../theme";

export const PostScreen = ({navigation}) => {
    const postId = navigation.getParam('postId')
    const post = DATA.find(p => p.id === postId)
    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно -хотите удалить пост",
            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                { text: "Удаление", style: 'destructive', onPress: () => {} }
            ]
        );
    }

    return <ScrollView>
       <Image source = {{uri: post.img}} style = {styles.image}/>
        <View style = {styles.textWrap}>
            <Text style = {styles.title}>{post.text.repeat(100)}</Text>
        </View>
        <Button title = 'удалить'
                color = {THEME.DANGER_COLOR}
                onPress = {removeHandler}
        />
    </ScrollView>
}
PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam('date')
    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString()
    }
}

const styles = ({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
    }
})