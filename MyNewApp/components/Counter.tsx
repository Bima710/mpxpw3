import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const Counter = ({ handleIncrement, handleDecrement, value }) => {
  return (
    <View style={styles.container}>
      <Button title="INCREMENT" onPress={handleIncrement} color="#4CAF50" />
      <Button title="DECREMENT" onPress={handleDecrement} color="#F44336" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default Counter;
