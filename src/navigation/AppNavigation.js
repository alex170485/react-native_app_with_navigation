import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {MainScreen} from "../Screen/MainScreen";
import {PostScreen} from "../Screen/PostScreen";
import {THEME} from "../theme";
import {Platform} from 'react-native'


const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen
    }
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android'? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
})

export const AppNavigation = createAppContainer(PostNavigator)


