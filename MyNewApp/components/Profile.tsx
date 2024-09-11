import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halo nama ku, {name}!</Text>
      <Text style={styles.text}>Umur ku, {age} tahun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});

export default Profile;
