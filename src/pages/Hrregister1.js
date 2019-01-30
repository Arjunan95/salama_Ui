import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Header, Left, Form, Content,Alert, CardItem,Card, Body, Icon, Container, Button, Picker, Textarea } from 'native-base';



export default class Hrregister1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: '',
      time: '',
      date:'',
      buttonColor: 'red',


    };
    // this.onDateChange = this.onDateChange.bind(this);
  }



  text(time) {
  
    this.setState ({
        time: time,
        buttonColor: 'someNewColor'

    });
    console.warn("time",time);
   
  
  }
  
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Schedule",
       headerLeft: <Icon name="ios-arrow-back" color="white" />,
       headerRight: <Icon name="ios-arrow-forward" color="white" />,
       
      headerStyle: {
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff",
        borderTopColor: "#ffffff",
        
      },
      headerTitleStyle: {
        color: "#9b9b9b",
        textAlign: 'center', flex:1,
        
      }
    };
  };

  register() {
    //         const body = new FormData()
    // body.append('image', this.state.avatarSource)
    // body.append("CompanyName", this.state.CompanyName,)
    // body.append("Trade_Licence_No", this.state.Trade_Licence_No,)


    return fetch('http://192.168.0.23:8085/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({
            "CompanyName": this.state.CompanyName,
            " Trade_Licence_No": this.state.Trade_Licence_No,
            "Company_Email": this.state.Company_Email,
            "Address1": this.state.Address1,
            "Address2": this.state.Address2,
            "Address3": this.state.Address3,
            "City": this.state.City,
            "PhoneNumber": this.state.PhoneNumber,
            "contact_number": this.state.contact_number,
            "contact_name": this.state.contact_name,
            "ContactMobile": this.state.ContactMobile,
            "Company_Category": this.state.Company_Category,
            "training_percentage": this.state.training_percentage,
            "employee_count": this.state.employee_count,
            "Password": this.state.Password
        }),
    }).then((response) => response.json())

        .then((responseJson) => {
            this.imageUpload()
            return responseJson;

        })

        .catch((error) => {
            console.error(error);

        });

}
imageUpload() {
    //        


    return fetch('http://192.168.0.224:8085/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': ' multipart/form-data',

        },
        body: JSON.stringify({
        "avatarImage":this.state.avatarSource
        }),
    }).then((response) => response.json())
   
        .then((responseJson) => {

            return responseJson;

        })
        .catch((error) => {
            console.error(error);

        });

}

// ========================register ajax end===================



render() {
    const { navigate } = this.props.navigation;
    return (

        <View style={styles.container}>
            <ScrollView>
                {/* <Image source={this.state.avatarSource} style={styles.uploadAvatar} /> */}
                <Text style={styles.welcome}>Welcome to Salama</Text>
                {/* <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
            <Image source={this.state.avatarSource} style={styles.uploadAvatar} /> */}
                <TouchableOpacity style={styles.imageuploader} onPress={this.imageselect} >

                    {/* <Image source={{ uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg' }}
                    // source={this.state.avatarSource}
                    style={styles.profileImg} >
                </Image> */}
                    <Image source={this.state.avatarSource} style={styles.profileImg} />

                </TouchableOpacity>

                {/*==================================Input field start==================================                 */}
                <View style={styles.textinput}>
                    <Text style={styles.Name}>Company Name</Text>

                    {/*Input to get the value from the user*/}
                    <TextInput
                        ref="name"
                        value={this.state.CompanyName}
                        onChangeText={CompanyName => this.setState({ CompanyName })}
                        placeholder={'Enter the name'}
                        style={styles.InputSelector}
                    />

                    <Text style={styles.Company}>Trade Licence Number</Text>
                    <TextInput
                        ref="Trade_Licence_No"
                        value={this.state.Trade_Licence_No}
                        onChangeText={Trade_Licence_No => this.setState({ Trade_Licence_No })}
                        placeholder={'Enter the trade licence no'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.companyemail}>Company Email</Text>
                    <TextInput
                        value={this.state.Company_Email}
                        onChangeText={Company_Email => this.setState({ Company_Email })}
                        placeholder={'Enter the company email'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.addr1text}>Address1</Text>
                    <TextInput
                        ref="Address1"
                        value={this.state.Address1}
                        onChangeText={Address1 => this.setState({ Address1 })}
                        placeholder={'Enter the address1'}
                        style={styles.addr1}
                    />
                    <Text style={styles.addr1text}>Address2</Text>
                    <TextInput
                        value={this.state.Address2}
                        onChangeText={Address2 => this.setState({ Address2 })}
                        placeholder={'Enter the address2'}
                        style={styles.addr1}
                    />



                    <Text style={styles.Name}>Address3</Text>

                    {/*Input to get the value from the user*/}
                    <TextInput
                        ref="name"
                        value={this.state.Address3}
                        onChangeText={Address3 => this.setState({ Address3 })}
                        placeholder={'Enter the address3'}
                        style={styles.addr1}
                    />

                    <Text style={styles.Company}>City</Text>
                    <TextInput

                        value={this.state.City}
                        onChangeText={City => this.setState({ City })}
                        placeholder={'Enter the city'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.companyemail}>PhoneNumber</Text>
                    <TextInput
                        value={this.state.PhoneNumber}
                        onChangeText={PhoneNumber => this.setState({ PhoneNumber })}
                        placeholder={'Enter the company phonenumber'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.addr1text}>Contact Number</Text>
                    <TextInput
                        ref="Address1"
                        value={this.state.contact_number}
                        onChangeText={contact_number => this.setState({ contact_number })}
                        placeholder={'Enter the address1'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.addr1text}>Contact Name</Text>
                    <TextInput
                        value={this.state.contact_name}
                        onChangeText={contact_name => this.setState({ contact_name })}
                        placeholder={'Enter the contact name'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.Name}>ContactMobile</Text>
                    <TextInput
                        ref="ContactMobile"
                        value={this.state.ContactMobile}
                        onChangeText={ContactMobile => this.setState({ ContactMobile })}
                        placeholder={'Enter the ContactMobile'}
                        style={styles.addr1}
                    />

                    <Text style={styles.Company}>Company Category</Text>
                    <TextInput
                        ref="Company_Category"
                        value={this.state.Company_Category}
                        onChangeText={Company_Category => this.setState({ Company_Category })}
                        placeholder={'Enter the Company Category'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.companyemail}>Mandatory Training Percentage</Text>
                    <TextInput
                        value={this.state.training_percentage}
                        onChangeText={training_percentage => this.setState({ training_percentage })}
                        placeholder={'Enter the training percentage'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.addr1text}>Total Employee Count</Text>
                    <TextInput
                        ref="Address1"
                        value={this.state.employee_count}
                        onChangeText={employee_count => this.setState({ employee_count })}
                        placeholder={'Enter the employee count'}
                        style={styles.InputSelector}
                    />
                    <Text style={styles.addr1text}>Password</Text>
                    <TextInput
                        value={this.state.Password}
                        onChangeText={Password => this.setState({ Password })}
                        placeholder={'Enter the Password'}
                        style={styles.InputSelector}
                    />
                    <Button
                        title="Submit"
                        color="#bc9e6d"
                        onPress={this.register}
                        style={styles.next}

                    />
                </View>

                {/* =====================================Input END=======================================                 */}
            </ScrollView>

        </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
},
textinput: {
    flex: 1,
    margin: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
},
welcome: {
    fontSize: 23,

    margin: 25,
    color: 'black'
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
Name: {
    width: 200,
    height: 26,
    fontFamily: 'Roboto',
    fontSize: 20,

    color: 'black'
},
InputSelector: {
    width: 350,
    height: 43,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'gray'
    //marginBottom: 20,
    // backgroundColor: '#ffffff',
    // borderBottomColor: '#000000',
    // borderBottomWidth: 1,
    // borderBottomLeftRadius: 1
},
addr1: {
    width: 300,
    height: 55,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: '#ffffff'
},
addr2: {
    width: 300,
    height: 50,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: '#ffffff'
},
Company: {
    width: 200,
    height: 26,
    fontFamily: 'Roboto',
    fontSize: 20,

    color: 'black'
},
companyemail: {
    width: 350,
    height: 26,
    fontFamily: 'Roboto',
    fontSize: 20,

    color: 'black'
},
addr1text: {
    width: 200,
    height: 26,
    fontFamily: 'Roboto',
    fontSize: 20,

    color: 'black'
},
next: {
    marginTop: 10
},
imageuploader: {
    borderRadius: 150,
    marginLeft: 250,
    width: 100,
    marginTop: -60
},
profileImg: {
    height: 70,
    width: 70,
    borderRadius: 40,
    backgroundColor: 'black'
    //backgroundImage: "https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg"
},
});
