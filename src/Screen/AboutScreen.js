import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const AboutScreen = ({}) => {
    return <View style = {styles.center}>
        <Text>
            Это мое первое приложение
        </Text>
        <Text>
            Версия приложения 1.0.0
        </Text>
    </View>
}
AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'О приложении',
    headerLeft: <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>
        <Item title = 'Menu Drawer' iconName = 'ios-menu' onPress = {() => navigation.toggleDrawer()}/>
    </HeaderButtons>

})

const styles = ({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})