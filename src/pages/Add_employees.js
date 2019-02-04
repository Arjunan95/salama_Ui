import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import ImagePicker from "react-native-image-picker";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import { TextField } from "react-native-material-textfield";
import { Header } from "react-native-elements";
import { WebView } from "react-native-gesture-handler";
import { Container, Left, Icon, Picker } from "native-base";
const options = {
  title: "Select Avatar",
  takePhotoButtonTitle: "Take photo from your camera",
  chooseFromLibraryButtonTitle: "choose photo from your Gallery"
};

class Add_employees extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      avatarSource: '',
      index: 0,
      visible: false,
      category: "",
      employee_Id: "",
      name: "",
      position: "",
      national_Id: "",
      company_Trade_Licence_No: ""
    };
  }
  upload = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  };
  employee_Id = employee_Id => {
    this.setState({ employee_Id: employee_Id });
  };

  name = name => {
    this.setState({ name: name });
  };
  position = position => {
    this.setState({ position: position });
  };
  national_Id = national_Id => {
    this.setState({ national_Id: national_Id });
  };
  company_Trade_Licence_No = company_Trade_Licence_No => {
    this.setState({ company_Trade_Licence_No: company_Trade_Licence_No });
  };
  category = category => {
    this.setState({ category: category });
  };

  componentDidMount() {}

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add_employees",

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

  add_employees() {
    return fetch("http://192.168.0.53:8085/Employee_Profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        employee_Id: this.state.employee_Id,
        name: this.state.name,
        position: this.state.position,
        national_Id: this.state.national_Id,
        company_Trade_Licence_No: this.state.company_Trade_Licence_No,
        category: this.category
      })
    })
      .then(response => response.json())

      .then(responseJson => {
        var res1 = responseJson;
        console.warn("Entire add_employees console", res1);
        if (res1.status == 401) {
          alert(res1.message);
        } else {
          alert(res1.message.message);
        }
      })

      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
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
          centerComponent={{
            text: "Add employees",
            fontSize: "20",
            color: "black"
          }}
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
              <View style={{ flex: 3, alignItems: "flex-end" }}>
                <TouchableHighlight
                  onPress={() => {
                    this.upload();
                  }}
                >
                  <Image
                    source={this.state.avatarSource}
                    style={styles.circle}
                  />
                </TouchableHighlight>
              </View>
            </View>
            <Text style={styles.addr1text}>Employee ID</Text>

            <TextInput
              ref="name"
              onChangeText={this.employee_Id}
              style={styles.addr1}
            />

            <Text style={styles.addr1text}>Name</Text>
            <TextInput
              ref="name"
              onChangeText={this.name}
              style={styles.addr1}
            />
            <Text style={styles.addr1text}>Position</Text>
            <TextInput
              ref="position"
              onChangeText={this.position}
              style={styles.addr1}
            />

            <Text style={styles.addr1text}>National ID</Text>

            <TextInput
              ref="national_Id"
              onChangeText={this.national_Id}
              style={styles.addr1}
            />

            <Text style={styles.addr1text}>Company Trade Licence Number</Text>
            <TextInput
              ref="Company_Trade_Licence_No"
              onChangeText={this.company_Trade_Licence_No}
              style={styles.InputSelector}
            />
            <Text style={styles.addr1text}>Employee Category</Text>
            <View
              style={{ borderWidth: 1, borderColor: "#d9d9d9", width: 300 }}
            >
              <Picker
                selectedValue={this.state.category}
                onValueChange={this.category}
              >
                <Picker.Item label="Select Category" />
                <Picker.Item label="Safety_officer" value="Safety_officer" />
                <Picker.Item label="Others" value="Others" />
              </Picker>
            </View>
            <View style={{ marginTop: 15 }}>
              <Button
                title="Add employee"
                color="#bc9e6d"
                onPress={() => {
                  this.setState({ visible: true });
                  this.add_employees();
                }}
                style={styles.next}
              />
            </View>
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
  },
  circle: {
    marginTop: 30,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").width * 0.2,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  }
});

export default Add_employees;
