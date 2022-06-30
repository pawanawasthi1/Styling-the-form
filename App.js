import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.registerwithus}>Register With Us</Text>
      <TextInput placeholder='Enter your username' style={styles.username} keyboardType='default'></TextInput>
      <TextInput placeholder='Enter your email' style={styles.username} keyboardType='email-address' textContentType='emailAddress'></TextInput>
      <TextInput placeholder='Enter your password' style={styles.username} textContentType='password'></TextInput>
      <TextInput placeholder='Confirm your password' style={styles.username} textContentType='password'></TextInput>
      <Button title='Submit' style={styles.buttons} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerwithus: {
    fontSize: 30,
    marginBottom: 60,
  },
  username: {
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    width: 200,
    borderRadius: 50,
    borderColor: '#456875',
    
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    margin:10,
    alignContent: 'flex-start',
  },
  buttons: {
    marginTop: 50,
    paddingRight: 100,
  },
});
