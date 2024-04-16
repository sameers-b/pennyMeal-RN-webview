import React from 'react';
import {StatusBar, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import LoginScreen from './screens/LoginScreen';
// // import {createNativeStackNavigator} from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Provider as PaperProvider} from 'react-native-paper';
import {WebView} from 'react-native-webview';

// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#E48C06" // Change to the desired background color
        barStyle="light-content" // Change to "dark-content" for light background
      />
      <WebView
        source={{uri: 'https://pennymeal.sameerdev.in'}}
        style={{flex: 1}}
      />
    </>
  );
  // return (
  //   <PaperProvider>
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="Login">
  //         <Stack.Screen
  //           name="Login"
  //           component={LoginScreen}
  //           options={{headerShown: false}}
  //         />
  //         <Stack.Screen
  //           name="Home"
  //           component={HomeScreen}
  //           options={{title: 'Home'}}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   </PaperProvider>
  // <LoginScreen />
  // );
};

export default App;

// /**
