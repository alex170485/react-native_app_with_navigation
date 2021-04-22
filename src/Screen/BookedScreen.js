import React from "react";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useSelector} from 'react-redux'
import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";

export const BookedScreen = ({navigation}) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }
    const bookedPost = useSelector(state => state.post.bookedPost)
    return <PostList data={bookedPost.filter(post=> post.booked)} onOpen={openPostHandler}/>
}
BookedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Избранное',
    headerLeft: <HeaderButtons HeaderButtonComponent = {AppHeaderIcon}>
        <Item title = 'Menu Drawer' iconName = 'ios-menu' onPress = {() => navigation.toggleDrawer()}/>
    </HeaderButtons>
})

