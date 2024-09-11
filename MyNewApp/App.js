import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import Counter from './components/Counter';
import Profile from './components/Profile';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      {showProfile && <Profile name={name} age={count} />}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
      <Button title="PASS VALUE" onPress={() => setShowProfile(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});
