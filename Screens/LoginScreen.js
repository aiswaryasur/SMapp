import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground,Image,ScrollView,TouchableOpacity,Button,TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import firebase from 'firebase';
import db from '../config';
export default class LoginScreen extends React.Component {
   

  constructor(){
    super();
    this.state={
      email:'',
      password:'',

    }
  }
   login=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
  alert("welcome back")
  this.props.navigation.navigate('HomeScreen')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
   }

  render(){
    return(
      <View style={{flex:1}}>
      <ScrollView>
      <ImageBackground source={require('../assets/loginbg.png')}
      style={{
        flex:1,
        width:314,
        height:493,
      resizeMode: 'cover',}}>
      <TextInput style={{
      width:157, 
      height:26, 
      borderWidth:0.5, 
      borderColor:"transparent",
      padding: 6,
      margin: "8px",
      borderBottomColor:"blue",
      marginTop:250,
      marginLeft:80
  }} placeholder="Email ID" onChangeText={(val)=>{
     this.setState({email:val});
   }}></TextInput>
      <TextInput style={{
      width:157,
      height:26,
      borderWidth:0.5,
      borderColor:"transparent",
      padding: 6,
      margin: "8px",borderBottomColor:"blue",
      marginLeft:80,
     }}
   placeholder="Password" secureTextEntry={true} onChangeText={(val)=>{
     this.setState({password:val});
   }}></TextInput>
    <TouchableOpacity style={styles.box} onPress={()=>this.login()}><Text style={{fontSize:20,
        fontWeight: "bold",
        color: "#FDFEE9",
        marginTop: 7,
        paddingLeft:13}} >Login</Text></TouchableOpacity>
         <TouchableOpacity style={{fontSize:15,
        fontWeight: "bold",
        color: "#4E8EB8'",
        marginTop: 20,
        paddingLeft:100}}onPress={()=>this.props.navigation.navigate("SignupScreen")}>Not a user? Signup</TouchableOpacity>
      </ImageBackground>
      </ScrollView>
      </View>
      
    )
  }
}
const styles=StyleSheet.create({
box:{
     marginLeft: 120,
      marginTop: 20,
      borderRadius: 300,
      backgroundColor: '#4E8EB8',
      borderColor:"#B1E1F5",
      borderWidth:2,
      width:90,
      height:50,
}
})