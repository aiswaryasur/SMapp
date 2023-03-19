import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground,Image,ScrollView,TouchableOpacity,TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config';
export default class SignupScreen extends React.Component {
  
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      address:'',
      contact:'',
      confirmPassword:'',
      name:''

    }
  }
  signup=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
   alert("user created")
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
      <ImageBackground source={require('../assets/Signupbg.png')}
      style={{flex: 1,
        width:314,
        height:500,
        resizeMode: 'cover',
      }}>
      <TextInput style={{ width:157, 
      height:26, 
      borderWidth:0.5, 
      borderColor:"transparent",
      padding: 6,
      margin: "8px",
      borderBottomColor:"blue",
      marginTop:100,
      marginLeft:80}} placeholder="Society Name" onChangeText={(val)=>{
     this.setState({name:val});
   }}></TextInput>
      <TextInput style={{ width:157, 
      height:26, 
      borderWidth:0.5, 
      borderColor:"transparent",
      padding: 6,
      margin: "8px",
      borderBottomColor:"blue",
      marginTop:20,
      marginLeft:80}} placeholder="Society Email ID" onChangeText={(val)=>{
     this.setState({email:val});
   }}></TextInput>
      <TextInput style={{ width:157, 
      height:26, 
      borderWidth:0.5, 
      borderColor:"transparent",
      padding: 6,
      margin: "8px",
      borderBottomColor:"blue",
      marginTop:20,
      marginLeft:80}} placeholder="Address" onChangeText={(val)=>{
     this.setState({address:val});
   }}></TextInput>
      <TextInput style={{ width:157, 
      height:26, 
      borderWidth:0.5, 
      borderColor:"transparent",
      padding: 6,
      margin: "8px",
      borderBottomColor:"#B1E1F5",
      marginTop:20,
      marginLeft:80}} placeholder="Contact" placeholderTextColor='white'></TextInput>
      <TextInput style={{ width:157, 
      height:26, 
      borderWidth:0.5, 
      borderColor:"transparent",
      padding: 6,
      margin: "8px",
      borderBottomColor:"#B1E1F5",
      marginTop:20,
      marginLeft:80}} placeholder="Password" placeholderTextColor='white' secureTextEntry={true} onChangeText={(val)=>{
     this.setState({password:val});
   }}></TextInput>
      <TextInput style={{ width:157, 
      height:26, 
      borderWidth:0.5, 
      borderColor:"transparent",
      padding: 6,
      margin: "8px",
      borderBottomColor:"#B1E1F5",
      marginTop:20,
      marginLeft:80}} placeholder="Confirm Password" placeholderTextColor='white' secureTextEntry={true} onChangeText={(val)=>{
     this.setState({confirmPassword:val});
   }}></TextInput>
      <TouchableOpacity style={{
      marginLeft: 120,
      marginTop: 20,
      borderRadius: 300,
      backgroundColor: '#4E8EB8',
      borderColor:"#B1E1F5",
      borderWidth:2,
      width:90,
      height:50,}} onPress={()=>this.signup()}><Text style={{
        fontSize:20,
        fontWeight: "bold",
        color: "#FDFEE9",
        marginTop: 7,
        paddingLeft:13}}>Signup</Text></TouchableOpacity>
        <TouchableOpacity style={{fontSize:15,
        fontWeight: "bold",
        color: "#FDFEE9",
        marginTop: 7,
        paddingLeft:80}}onPress={()=>this.props.navigation.navigate("LoginScreen")}>Aldready a user? Login</TouchableOpacity>
      </ImageBackground>
      </ScrollView>
      </View>
    )
  }
}