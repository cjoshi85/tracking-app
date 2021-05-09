import React from "react";
import { View, ActivityIndicator } from "react-native";

export function getLoader(size, color = '#F78765', style = {}) {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', ...style}}>
      <ActivityIndicator size={size} color={color}/>
    </View>
  )
}
