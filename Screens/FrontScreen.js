import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground,Image,ScrollView,TouchableOpacity,TextInput } from 'react-native';
export default class FrontScreen extends React.Component {
  render(){
    return(
      <View style={{flex:1}}>
      <ImageBackground source={require('../assets/fbg.png')}
      style={{
        flex:1,
        width:314,
        height:493,
      resizeMode: 'cover',}}>
       <TouchableOpacity style={{ marginLeft: 120,
      marginTop: 310,
      borderRadius: 300,
      backgroundColor: '#78CDEA',
      borderColor:"#B1E1F5",
      borderWidth:2,
      width:90,
      height:50, }} onPress={()=>this.props.navigation.navigate("LoginScreen")}>
      <Text style={{fontSize:20,
        fontWeight: "bold",
        color: "#FDFEE9",
        marginTop: 7,
        paddingLeft:15}}>Login</Text></TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 120,
      marginTop: 20,
      borderRadius: 300,
      backgroundColor: '#78CDEA',
      borderColor:"#B1E1F5",
      borderWidth:2,
      width:90,
      height:50,}}
      onPress={()=>this.props.navigation.navigate("SignupScreen")}>
      <Text style={{fontSize:20,
        fontWeight: "bold",
        color: "#FDFEE9",
        marginTop: 9,
        paddingLeft:10}}>Signup</Text></TouchableOpacity>
        
      
      </ImageBackground>
      </View>
    )
  }
}