import React, {Component} from 'react';
import {View} from 'react-native';
import {Appbar} from 'material-bread';

export default class Header extends Component {
  render() {
    return (
      <View>
      <Appbar
  barType={"normal"}
  title={'Page Title'}
  navigation={'menu'}
  onNavigation={() => console.log('onNavigation!')}
  actionItems={[
  {name: 'search', onPress: () => console.log('onSearch')},
  {name: 'more-vert'},
  ]}
/>
      </View>
    );
  }
}
