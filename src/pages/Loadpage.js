import React, { Component } from "react";
//import { Container, Header, Content, Accordion,View,Text } from "native-base";
// import { Icon } from 'react-native-elements'
import { Image,AppRegistry,StyleSheet,View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { Container } from "native-base";

const resetAction = StackActions.reset({
 index:0,
 actions:[
   NavigationActions.navigate({routeName:'Login'})
 ]
})

class Loadpage extends Component {
   static navigationOptions = ({ navigation }) => {
     return {
       header: null
   };
 };
   componentDidMount(){
     setTimeout(
       () => {
         this.props.navigation.navigate('Login')
       },
       3 * 500
     );
   }

 render() {
   return (
    <Container>
    <View style={styles.container}>
  
    <View style={styles.viewStyleOne}>
    <Image source = {require('../images/salama-logo.png')} style = {styles.image} />
    </View>
   
  </View>
  </Container>
   );
 }
}

const styles = StyleSheet.create({

    
      viewStyleOne: {
      
        justifyContent: 'center',
        alignItems:'center', 
       
      },

      container: { 
       
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center'
      },
      
      viewStyleOne: {
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center', 
       
      },
      textStyle:{
        textAlign:'center'
      }

});

export default Loadpage