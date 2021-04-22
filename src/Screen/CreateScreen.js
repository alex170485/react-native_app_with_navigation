import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {AboutScreen} from "./AboutScreen";

export const CreateScreen = ({}) => {
    return <View style = {styles.center}>
        <Text>
            CreateScreen
        </Text>
    </View>
}
CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Создать пост',
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title='Menu Drawer' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
})

const styles = ({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})