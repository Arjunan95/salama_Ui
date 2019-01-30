import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, Image} from 'react-native';
// import {DrawerNavigator} from 'react-navigation'
import { Header, Left, Content, CardItem, Card, Body, Icon, Container, Button } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { CheckBox } from 'react-native-elements'

export default class Login_ar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // friends: [{ id: 10, name:"Gundam" },
      //           { id: 20, name:"Rambo" },
      //           { id: 30, name:"Mickey Mouse" } ],
      checkBoxChecked: false
    };
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
onCheckBoxPress(id) {
  console.log( "Checked!" );
  console.log( id );
  this.setState({
    checkBoxChecked: !this.state.checkBoxChecked
  });
}

    render() {
        return (
          <Container>
            <Header style={{backgroundColor:'white',color:'black'}} >
            <Left>
                <Icon style={styles.drawericon} name="menu" onPress={()=>
                 this.props.navigation.openDrawer()} />
            </Left>
          {/* <Text>Sign In</Text>  */}
            </Header>
            <Content padder style={{marginTop: 50, }}>
           
              <Card style={{marginBottom: 30,height:400 }}>
              <Text style={{ fontSize: 25, marginBottom: 10,color:'black' }}>مرحبا بكم في الخدمات</Text>
  
  
                <TextField  type="text"  style={{textAlign:'right'}}
                            label="عنوان الايميل" />

                <TextField 
                            label="أدخل كلمة المرور"
                            secureTextEntry={true} 
                                 />

                           <Container>
                           <View style={{flexDirection :'row'}}>
<CheckBox checked={this.state.checkBoxChecked} onPress={()=>this.onCheckBoxPress()} title="تذكرنى" />
 <Text style={{color:'black',marginTop:17}}>هل نسيت كلمة المرور؟</Text></View>
</Container>
<Button style={  { backgroundColor: 'red', marginBottom:50,
                                            width: '60%',
                                            marginLeft: 75,
                                            height: 40,
                                            borderRadius: 5,
                                            fontSize: 20,
                                        } }>
            <Text style={  {  borderRadius: 5, fontSize: 20, marginLeft: 75, color:'white'  } }>تسجيل الدخول</Text>
          </Button>
              </Card>
            </Content>
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

});