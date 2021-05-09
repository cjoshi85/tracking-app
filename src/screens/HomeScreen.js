import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../../components/Button";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button buttonText={'Training'} onPress={()=>navigation.navigate('Training')}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop:50,
  },
  btnContainer: {
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F78765',
    alignItems:'center',
    justifyContent: 'center',
    height:60
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
