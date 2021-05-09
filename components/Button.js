import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React from "react";

const {width} = Dimensions.get('screen');
export default function Button({customStyle, onPress, buttonText,customButtonStyle}) {
  return (
    <TouchableOpacity onPress={onPress} style={[customStyle, {width}]}>
      <View style={[styles.btnContainer,customButtonStyle]}>
        <Text style={styles.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  btnContainer: {
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F78765',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
