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
import App from './todoApp';
import List from './List';
import Input from './input';
import ScrollView from './scrollview';
import ScrollView1 from './scrollview1';
import ImageExample from './image_example';
import HttpExample from './http_example';
import ButtonExample from './button_Example';
import FlatList from './mh_flatlist';
import SectList from './mh_sectlist';

class MyApp extends Component {
  render() {
    return <FlatList/>
  }
}

export default MyApp;
