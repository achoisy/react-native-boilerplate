import React, {Component} from 'react';
import {View} from 'react-native';
import {Appbar} from 'material-bread';
//import Style from '.HeaderStyle';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default class Header extends Component {
  render() {
    return (
      <View style={ApplicationStyles.header}>
        <Appbar title={'Page Title'} />
      </View>
    );
  }
}
