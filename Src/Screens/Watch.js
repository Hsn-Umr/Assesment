import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Watch() {
  return (
    <View style={styles.container}>
      <Text>Watch</Text>
      
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

export {Watch};