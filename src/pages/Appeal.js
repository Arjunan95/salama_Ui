import React, {Component} from 'react';
import {Platform, StyleSheet, Text,  TextInput,View, Image} from 'react-native';
// import {DrawerNavigator} from 'react-navigation'
import { Header, Left, Form, Content,Alert, CardItem,Card, Body, Icon, Container, Button, Picker, Textarea } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { CheckBox } from 'react-native-elements'

export default class Appeal extends Component {
    constructor() {
        super();
        this.state = {
            service: '',
            description: ''
        }
      }
   
   
    // state = {service: ''}

    updateService = (service) => {
       this.setState({ service: service })
    }

    onChangeText = (description) => {
        this.setState({ description: description })
     }
    
//   static navigationOptions = { 
//     drawerLabel: '',
//     drawerIcon: () => (  
//    <View>         
//   <Image
//     source={require('../src/images/download.png')}
//     style={{width: 60, height: 60, borderRadius: 10 , marginLeft: 230, margin:20}}
//   />
//   <View style={styles.lineStyle} />

//   </View>
// ) 
// }

appeal(){

   return fetch('http://192.168.0.53:8085/Appeal', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "service": this.state.service,
          "Description": this.state.description,
        }),
      }).then((response) => response.json())
      
          .then(() => {
           
            alert(result)
         
          })
          
          .catch((error) => {
            console.error(error);
           
        });
      
}

// componentDidMount(){
//   alert("hiii");
// }
    render() {
        return (
          <Container>
            <Header style={{backgroundColor:'#bc9e6d',color:'black'}} >
            <Left>
                <Icon style={styles.drawericon} name="menu" onPress={()=>
                 this.props.navigation.openDrawer()} />
            </Left>
          
            </Header>
            <Content padder style={{marginTop: 50, }}>
            <View >
              
            <Picker selectedValue = {this.state.service} onValueChange = {this.updateService}>
               <Picker.Item label = "Salama" value = "Salama" />
               <Picker.Item label = "Aman" value = "Aman" />
            
            </Picker>
            {/* <Text style = {styles.text}>{this.state.service}</Text> */}
            
         </View>
         <View style={{marginTop:20}}>
         {/* <Form> */}
            <Textarea rowSpan={5}   bordered placeholder="Text here"  onChangeText = {this.onChangeText}/>
          {/* </Form> */}
          </View>
          
            </Content>
            <Button style={styles.bottom} onPress={()=> this.appeal()}>
            <Text style={  {  borderRadius: 5, fontSize: 20, color:'white', marginRight:140  } }>Send</Text>
          </Button>
          </Container>
        );
      }
}
const styles =StyleSheet.create({
container:{
    alignItems:'center',
    backgroundColor: "white",
    flex:1,
    justifyContent: 'center'
},
welcome:{
    fontSize:24,
    // textAlign:'center'
    marginTop:10,
  
},
drawericon:{
   marginLeft:-100
},
headerWelcome:{
    fontSize:24,
    textAlign:'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 899,
  borderTopWidth: 1,
//   borderColor: 'white',
},
lineStyle:{
  borderBottomWidth: 1,
  borderColor:'black',
  margin: 5,
  width: 500,
},
bottom:{
    justifyContent:'flex-end',
    backgroundColor: 'red',
    marginBottom:60,
    width: '80%',
    marginLeft: 40,
    height: 44,
    // borderRadius: 5,
    fontSize: 20,
}

});