import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';

function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./images/CAA-Logo.png')} style={styles.logo} />
      <Text style={styles.heading}>Internal Audit Software</Text>
      {/* <TextInput placeholder="User name" style={styles.textInput} />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
      /> */}
      <FloatingLabelInput
        label={'User Name'}
        // value="Adnan"
        leftComponent={
          <Image
            style={{height: 30, width: 30}}
            source={require('./images/CAA-Logo.png')}
          />
        }
        // onFocus={focus}
        // onBlur={blur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // flexDirection: 'row',
  },
  heading: {
    color: '#058DC7',
    fontSize: 24,
    fontWeight: 'bold',
    // paddingTop: 35,
    // paddingLeft: 20,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  textInput: {
    padding: 15,
    height: 50,
    width: 250,
    borderColor: '#058DC7',
    borderWidth: 1,
    borderRadius: 15,
  },
});
export default App;
