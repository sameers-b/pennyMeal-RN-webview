import React, {useState} from 'react';
import {
  StatusBar,
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic for handling login
    console.log('Email:', email);
    console.log('Password:', password);
    // Assuming login is successful, navigate to another screen
    navigation.navigate('Home'); // Replace 'Home' with the name of the screen you want to navigate to
  };
  const image = {
    uri: 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlkZXxlbnwwfHwwfHx8MA%3D%3D',
  };
  return (
    <ImageBackground source={image} style={styles.background}>
      <StatusBar
        backgroundColor="#0194b5" // Change to the desired background color
        barStyle="light-content" // Change to "dark-content" for light background
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            placeholderTextColor="#fff"
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.registerLink}>
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#fff',
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#fff',
    marginBottom: 16,
  },
  registerLink: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
