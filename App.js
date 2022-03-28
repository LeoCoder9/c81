import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import BottomTabNavigator from './navigation/BottomTabNavigation';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigation></DrawerNavigation>
      </NavigationContainer>
    );
  }
  }
