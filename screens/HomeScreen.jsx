// HomeScreen.js

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Card, Title, Button, Paragraph} from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const handleLogout = () => {
    // Implement logout logic here
    // For example, navigate back to the login screen
    navigation.goBack(); // Navigate back to the previous screen (login screen)
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{color: 'black'}}>Home Screen</Text> */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Welcome to Home Page</Title>
          <Paragraph>This is a beautiful card UI example.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={handleLogout}>Logout</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '80%',
    elevation: 4, // This adds a shadow to the card
  },
});

export default HomeScreen;
