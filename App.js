/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Home from "./home";
import Detail from './details';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mh_flatlist from './mh_flatlist';
import Mh_sectlist from './mh_sectlist';
import FinalMain from './final_main';
import FinalLogin from './final_login';
import FinalSignin from './final_signin';



const Stack=createStackNavigator();

class MyApp extends Component {
  render() {
    return (
      <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
            options={{
              headerTitleAlign: 'center',
            }}
        >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerTitleAlign:'center',
            }}
            />
          <Stack.Screen
            name='Detail'
            component={Detail}
            options={{
              headerTitleAlign:'center',
            }}
            />
          <Stack.Screen
            name='MhFlat'
            component={Mh_flatlist}
            options={{
              headerTitleAlign:'center',
            }}
            />
           <Stack.Screen
            name='MhSect'
            component={Mh_sectlist}
            options={{
              headerTitleAlign:'center',
            }}
            />
           <Stack.Screen
            name='FinalMain'
            component={FinalMain}
            options={{
              headerTitleAlign:'center',
            }}
            />
           <Stack.Screen
            name='FinalLogin'
            component={FinalLogin}
            options={{
              headerTitleAlign:'center',
            }}
            />
           <Stack.Screen
            name='FinalSignin'
            component={FinalSignin}
            options={{
              headerTitleAlign:'center',
            }}
            />
            </Stack.Navigator>           
      </NavigationContainer>
      </>
    )
  }
}

export default MyApp;
