import React, {Component} from 'react';
import {Platform, StyleSheet, Text,  TextInput,View, Image} from 'react-native';
// import {DrawerNavigator} from 'react-navigation'
import { Header, Left, Form, Content,Alert, CardItem,Card, Body, Icon, Container, Button, Picker, Textarea } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { CheckBox } from 'react-native-elements'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Homepage extends Component {
    static navigationOptions = {
      // header: null
    };
    constructor() {
        super();
        this.state = {
            service: '',
            description: ''
        }
      }
   
   
    // state = {service: ''}
    onCheckBoxPressAman(id) {
      console.log( "Checked!" );
      console.log( id );
      this.setState({
        checkBoxChecked: !this.state.checkBoxChecked
      });
    }
    onCheckBoxPressSalama(id) {
      console.log( "Checked!" );
      console.log( id );
      this.setState({
        checkBoxChecked: !this.state.checkBoxPress
      });
    }
    updateService = (service) => {
       this.setState({ service: service })
    }

    onChangeText = (description) => {
        this.setState({ description: description })
     }
     onSelect(index, value){
      this.setState({
        text: `Selected index: ${index} , value: ${value}`
      })
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

    render() {
        return (
         
          <Container>
            <Header style={{backgroundColor:'#bc9e6d',color:'black'}} >
            <Left>
                <Icon style={styles.drawericon} name="menu" onPress={()=>
                 this.props.navigation.openDrawer()} />
            </Left>
          
            </Header>
          
         <View style={{paddingTop:30}}>  
<Text style={{fontSize:30,color:'#bc9e6d',textAlign:'center'}}>Welcome</Text>
<Text style={{fontSize:15,color:'#bc9e6d',textAlign:'center'}}>Our Services</Text>
</View>

<View style={{flexDirection :'row', marginTop:20}}>
<RadioGroup
style={{flexDirection :'row'}}
  size={20}
  thickness={2}
  color='#9575b2'
  // highlightColor='#ccc8b9'
  selectedIndex={1}
  onSelect = {(index, value) => this.onSelect(index, value)}
  
>
  <RadioButton 
    style={{alignItems:'center',
  paddingTop:-10
  }}
    value='Yo!! I am a cat.' 
  >
    <Image
      source={require('../images/aman-llogo-red-background-copy-3.png')}
      style={{width: 150, height: 60, borderRadius: 10 , marginTop:40}}
    />
    
  </RadioButton>
  <RadioButton 
    // style={{alignItems:'center'}}
    value='Yo!! I am a cat.' 
  >
   <Image
     source={require('../images/salama-logo-copy-2.png')}
     style={{width: 100, height: 110, borderRadius: 10}}
   />
    
  </RadioButton>
  </RadioGroup>


</View>
<Body>

</Body>
<Text style={{fontSize:22,color:'#9b9b9b',textAlign:'center', marginBottom:30}} onPress={() => this.props.navigation.navigate('Appeal')}>Want to Appeal?</Text>
       
<Button style={styles.bottom} onPress={() => this.props.navigation.navigate('Appeal')} >
            <Text style={  {  borderRadius: 5, fontSize: 20, color:'white', marginRight:130  } }>Appeal</Text>
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