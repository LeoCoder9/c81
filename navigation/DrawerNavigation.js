import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../screens/Profile'
import BottomTabNavigator from './BottomTabNavigation'
import Feed from '../screens/Feed'

const Drawer = createDrawerNavigator()

export default class DrawerNavigation extends React.Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name='Profile' component={Profile} ></Drawer.Screen>
                <Drawer.Screen name='BottomTabNavigator' component={BottomTabNavigator}></Drawer.Screen>
            </Drawer.Navigator>
        )
    }
}