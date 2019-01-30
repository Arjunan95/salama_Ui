import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, Image} from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Header, Left, Content, CardItem, Card, Body, Icon, Container, Button } from 'native-base';
import { TextField } from 'react-native-material-textfield';

var Password
export default class ForgotPassword extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      email_id:'',
      password:'',
      confirmpassword:"",
      otp:"",
      checkBoxChecked: false,
      visible: false
    };
  }
// static navigationOptions = { 
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

onChangeEmail = (email_id) => {
  this.setState({ email_id: email_id })
}
onChangeNewPassword = (password) => {
  this.setState({ password: password })
}
onChangeConfirmPassword = (confirmpassword) => {
    this.setState({ confirmpassword: confirmpassword })
  }
  onChangeVerifyOtp = (otp) => {
    this.setState({ otp: otp })
  }
onCheckBoxPress(id) {
  console.log( "Checked!" );
  console.log( id );
  this.setState({
    checkBoxChecked: !this.state.checkBoxChecked
  });
}

forgotPassword(){
  return fetch('http://192.168.0.53:8085/Hr_Forget_password', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email_id": this.state.email_id,
      "password": this.state.password,
      "confirmpassword": this.state.confirmpassword,
    }),
  }).then((response) => response.json())
  
      .then(() => {
       
        // alert(response)
     
      })
      
      .catch((error) => {
        console.error(error);
       
    });




}
verifyOtp(){
    return fetch('http://192.168.0.53:8085/hr_forget_password_otp_verify', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "otp": this.state.otp,
        "password": this.state.password
      }),
    }).then((response) => response.json())
    
        .then((response) => {
        //  console.warn(response,"response=>")
          alert(response.message.message)
          this.props.navigation.navigate('Homepage')
        })
        
        .catch((error) => {
          console.error(error);
         
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
          
            </Header>
            <Content padder style={{marginTop: 50, }}>
              <Card style={{marginBottom: 30,height:400 }}>
                
                <CardItem >
                  <Body>
                  <Text style={{ fontSize: 25, marginBottom: 10,color:'black',textAlign:"center" }}>Forgot Password</Text>
                  </Body>
                </CardItem>
              
                
                <TextField type="text"
                                    label="Email Id"
                                    onChangeText = {this.onChangeEmail}
                                />

                <TextField 
                                    label="New password"
                                    onChangeText = {this.onChangeNewPassword}

                                    secureTextEntry={true}
                                   
                                />
                                 <TextField type="text"
                                    label="Confirm password"
                                    onChangeText = {this.onChangeConfirmPassword}
                                    secureTextEntry={true}
                                />
                           <Container>
                           <View style={{
        flex: 1,
        flexDirection: 'row',
      
        // alignI   tems: 'stretch',
      }}></View>
                       <View style={{flex:1,flexDirection:"row"}}>
<View style={{ marginLeft:70}}>
<Button onPress={() => {
                            this.setState({ visible: true });
                            this.forgotPassword()
                        }}
                          style={  { backgroundColor: 'red', 
                                            width: 248,
                                           alignContent: "center",
                                            height: 40,
                                            borderRadius: 5,
                                            fontSize: 20,
                                        } }>
            <Text style={  {  borderRadius: 5, 
                              fontSize: 20, 
                              marginLeft: 80, 
                              color:'white'  } }>
                             Send OTP
                              </Text>
          </Button>
         
          </View>    
          </View>
          </Container>
              </Card>

            
                     <Dialog
                        visible={this.state.visible}
                           onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}
                    >
                        <DialogContent>
                            <View >
                                <Text style={{ fontSize: 30, marginTop: 30,fontWeight:'bold' }}>Enter One Time Password</Text>


                             
                                <TextField
                                    placeholder="Enter OTP"
                                    onChangeText = {this.onChangeVerifyOtp}
                                    style={
                                        {
                                            textAlign: 'left',
                                            // width: 2.5,
                                            
                                            borderRadius: 65,
                                        
                                            fontSize: 20,
                                        }
                                    }
                                />

                                <View 
                                style={{
                                    height: 50, backgroundColor:
                                        'red', justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Button 
                                    onPress={() => {
                                        this.verifyOtp();
                                        
                                    }}
                                    style={  { backgroundColor: 'red', 
                                            width: 248,
                                           alignContent: "center",
                                            height: 40,
                                            borderRadius: 5,
                                            fontSize: 20,
                                        } }>
            <Text style={  {  borderRadius: 5, 
                              fontSize: 20, 
                              textAlign: 'center',
                              paddingLeft: 130, 
                              color:'white'  } }>
                             Verify OTP
                              </Text>
          </Button>
         
                                       
                                </View>

                            </View>
                        </DialogContent>

                    </Dialog>
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