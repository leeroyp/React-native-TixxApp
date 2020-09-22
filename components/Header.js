import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.icon1}>
        <Icon name="home" size={40} />
        <Text style={styles.text}>YoTixx</Text>
      </View>
      <View style={styles.icon2}>
        <Icon name="home" size={40} />
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 38,
    flexDirection: 'row',
    backgroundColor: 'coral',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  icon1:{
    paddingLeft: 10,
    flexDirection:'row'
  },
  icon2: {
    paddingRight:10,
    alignItems: 'flex-end',
  },
  

});
