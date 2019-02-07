// Second screen which we will use to get the data
import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView
} from "react-native";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { TextField } from "react-native-material-textfield";
import { Header } from "react-native-elements";
import { WebView } from "react-native-gesture-handler";
import { Container, Left, Icon } from "native-base";

class Hr_register extends Component {
  // static Step = props => <Step {...props} />
  constructor(props, context) {
    super(props, context);
    this.state = {
      avatarSource: null,
      index: 0,
      visible: false,
      CompanyName: "",
      Trade_Licence_No: "",
      Company_Email: "",
      Address1: "",
      Address2: "",
      Address3: "",
      City: "",
      PhoneNumber: "",
      contact_number: "",
      Contact_Name: "",
      ContactMobile: "",
      Company_Category: "",
      training_percentage: "",
      employee_count: "",
      Password: "",
      otp: ""
    };

    // this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    // this.verifyCallback = this.verifyCallback.bind(this);
  }

  CompanyName = CompanyName => {
    this.setState({ CompanyName: CompanyName });
  };
  Trade_Licence_No = Trade_Licence_No => {
    this.setState({ Trade_Licence_No: Trade_Licence_No });
  };
  Company_Email = Company_Email => {
    this.setState({ Company_Email: Company_Email });
  };
  Address1 = Address1 => {
    this.setState({ Address1: Address1 });
  };
  Address2 = Address2 => {
    this.setState({ Address2: Address2 });
  };
  Address3 = Address3 => {
    this.setState({ Address3: Address3 });
  };
  City = City => {
    this.setState({ City: City });
  };
  PhoneNumber = PhoneNumber => {
    this.setState({ PhoneNumber: PhoneNumber });
  };
  contact_number = contact_number => {
    this.setState({ contact_number: contact_number });
  };
  Contact_Name = Contact_Name => {
    this.setState({ Contact_Name: Contact_Name });
  };
  Contact_Mobile = Contact_Mobile => {
    this.setState({ Contact_Mobile: Contact_Mobile });
  };
  Company_Category = Company_Category => {
    this.setState({ Company_Category: Company_Category });
  };
  training_percentage = training_percentage => {
    this.setState({ training_percentage: training_percentage });
  };
  employee_count = employee_count => {
    this.setState({ employee_count: employee_count });
  };
  Password = Password => {
    this.setState({ Password: Password });
  };

  onChangeVerifyOtp = otp => {
    this.setState({ otp: otp });
  };

  componentDidMount() { }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Register",

      headerStyle: {
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff",
        borderTopColor: "#ffffff"
      },
      headerTitleStyle: {
        color: "#9b9b9b",
        textAlign: "center",
        flex: 1
      }
    };
  };

  // =============Register form ajax call start================
  register() {
    return fetch("http://192.168.0.224:8085/Hr_Registration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        CompanyName: this.state.CompanyName,
        Trade_Licence_No: this.state.Trade_Licence_No,
        Company_Email: this.state.Company_Email,
        Address1: this.state.Address1,
        Address2: this.state.Address2,
        Address3: this.state.Address3,
        City: this.state.City,
        PhoneNumber: this.state.PhoneNumber,
        contact_number: this.state.contact_number,
        Contact_Name: this.state.Contact_Name,
        Contact_Mobile: this.state.Contact_Mobile,
        Company_Category: this.state.Company_Category,
        training_percentage: this.state.training_percentage,
        employee_count: this.state.employee_count,
        Password: this.state.Password
      })
    })
      .then(response => response.json())

      .then(responseJson => {
        var res1 = responseJson;
        console.warn("Entire register console", res1);
        if (res1.status == 401) {
          alert(res1.message);
        } else {
          alert(res1.message.message);
          // this.props.navigation.navigate('Feedback')
        }
      })

      .catch(error => {
        console.error(error);
      });
  }
  register_otp_verify() {
    return fetch("http://192.168.0.224:8085/Hr_registration_otp_verify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        otp: this.state.otp
      })
    })
      .then(response => response.json())

      .then(response => {
        if (response.status == 400) {
          console.warn("response--->", response);
          alert(response.message);
        } else {
          alert(response.message.message);
          this.props.navigation.navigate("Homepage");
        }
      })

      .catch(error => {
        console.error(error);
      });
  }

  // ========================register ajax end===================
  render() {
    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <Container>
        <Header
          leftComponent={{
            icon: "menu",
            onPress: () => this.props.navigation.openDrawer(),
            color: "black"
          }}
          containerStyle={{
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "gray"
          }}
          centerComponent={{ text: "Register", fontSize: "20", color: "black" }}
        //rightComponent={{ text: "Calender",fontSize:'20', color: "black" , onPress: () => this.props.navigation.navigate('Schedule')}}
        //  outerContainerStyles={{ backgroundColor: "white" }}
        />
        <ScrollView>
          <View style={styles.textinput}>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
              <View style={{ flex: 3, alignItems: "flex-start", margin: 1 }}>
                <Text
                  style={{ fontSize: 17, fontFamily: "Roboto", color: "black" }}
                >
                  Welcome to service portal, please enter your information to be
                  able to use the portal
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end" }} />
            </View>

            <Text style={styles.addr1text}>Company Name</Text>

            {/*Input to get the value from the user*/}
            <TextInput
              ref="name"
              // value={this.state.CompanyName}
              onChangeText={this.CompanyName}
              // placeholder={'Enter the company name'}
              style={styles.addr1}
            />

            <Text style={styles.addr1text}>Trade Licence Number</Text>
            <TextInput
              ref="Trade_Licence_No"
              // value={this.state.Trade_Licence_No}
              onChangeText={this.Trade_Licence_No}
              //placeholder={'Enter the trade licence no'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Company Email</Text>
            <TextInput
              //  value={this.state.Company_Email}
              onChangeText={this.Company_Email}
              //placeholder={'Enter the company email'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Address1</Text>
            <TextInput
              ref="Address1"
              // value={this.state.Address1}
              onChangeText={this.Address1}
              //placeholder={'Enter the address1'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Address2</Text>
            <TextInput
              //  value={this.state.Address2}
              onChangeText={this.Address2}
              //placeholder={'Enter the address2'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Address3</Text>
            <TextInput
              // ref="name"
              // value={this.state.Address3}
              onChangeText={this.Address3}
              //placeholder={'Enter the address3'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>City</Text>
            <TextInput
              // value={this.state.City}
              onChangeText={this.City}
              //placeholder={'Enter the city'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Phone Number</Text>
            <TextInput
              // value={this.state.PhoneNumber}
              onChangeText={this.PhoneNumber}
              //placeholder={'Enter the company phonenumber'}
              style={styles.InputSelector}
            />

            <Text style={styles.addr1text}>Contact Number</Text>
            <TextInput
              //  ref="Address1"
              //  value={this.state.contact_number}
              onChangeText={this.contact_number}
              //placeholder={'Enter the address1'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Contact Name</Text>
            <TextInput
              //  value={this.state.contact_name}
              onChangeText={this.Contact_Name}
              //placeholder={'Enter the contact name'}
              style={styles.InputSelector}
            />

            <Text style={styles.addr1text}>Contact Mobile</Text>
            <TextInput
              ref="ContactMobile"
              //value={this.state.ContactMobile}
              onChangeText={this.Contact_Mobile}
              //placeholder={'Enter the ContactMobile'}
              style={styles.InputSelector}
            />

            <Text style={styles.addr1text}>Company Category</Text>
            <TextInput
              ref="Company_Category"
              //value={this.state.Company_Category}
              onChangeText={this.Company_Category}
              //placeholder={'Enter the Company Category'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Mandatory Training Percentage</Text>
            <TextInput
              //value={this.state.training_percentage}
              onChangeText={this.training_percentage}
              //placeholder={'Enter the training percentage'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Total Employee Count</Text>
            <TextInput
              ref="Address1"
              //value={this.state.employee_count}
              onChangeText={this.employee_count}
              //placeholder={'Enter the employee count'}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Password</Text>
            <TextInput
              //value={this.state.Password}
              onChangeText={this.Password}
              //placeholder={'Enter the Password'}
              secureTextEntry={true}
              style={styles.InputSelector}
            />

            <Button
              title="Create Account"
              color="#bc9e6d"
              onPress={() => {
                this.setState({ visible: true });
                this.register();
              }}
              style={styles.next}
            />
          </View>
        </ScrollView>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <View>
              <Text style={{ fontSize: 30, marginTop: 30, fontWeight: "bold" }}>
                Enter One Time Password
              </Text>
              <TextField
                placeholder="Enter OTP"
                onChangeText={this.onChangeVerifyOtp}
                style={{
                  textAlign: "left",
                  // width: 2.5,

                  borderRadius: 65,

                  fontSize: 20
                }}
              />

              <Button
                title="Verify OTP"
                color="#bc9e6d"
                onPress={() => {
                  this.register_otp_verify();
                }}
                style={styles.next}
              />
            </View>
          </DialogContent>
        </Dialog>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  textinput: {
    flex: 1,
    margin: 20
  },
  welcome: {
    fontSize: 23,
    textAlign: "center",
    margin: 10,
    color: "black"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  Name: {
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,
    color: "black"
  },
  InputSelector: {
    width: 300,
    height: 36,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderWidth: 0.5
  },
  addr1: {
    width: 300,
    height: 36,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderWidth: 0.5
  },
  addr2: {
    width: 300,
    height: 50,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#ffffff"
  },
  Company: {
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,

    color: "black"
  },
  companyemail: {
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,

    color: "black"
  },
  addr1text: {
    width: 300,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,
    color: "black"
  },
  drawericon: {
    marginLeft: -100
  },
  next: {
    marginTop: 10,
    width: 50,
    flex: 1
  },
  buttonstyle: {
    width: 150,
    height: 50,
    flex: 1,
    flexDirection: "row"
  },
  prev: {
    width: 50
  }
});

export default Hr_register;
