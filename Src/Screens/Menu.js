import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Menu() {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Menu};