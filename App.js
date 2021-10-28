/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import Flexbasic from './flexbasics';
import Flex from './flex';
import TableLayout from './TableLayout';
import DemoProps from './demoProps';
import Mhlogin from './mhlogin';
import Mhtinhtong from './mhtinhtong';

class MyApp extends Component{
  render(){
    return (
      <Mhtinhtong />
    )
  }
}

export default MyApp;