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
  ImageBackground,
  Dimensions
} from "react-native";
import { Header } from "react-native-elements";
import { Container } from "native-base";
//import all the components we are going to use.

// import ImagePicker from "react-native-image-picker";
// import Step from './Step'
// import ReCAPTCHA from "react-google-recaptcha";

export default class Employeeselector extends Component {
  // static Step = props => <Step {...props} />
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
      index: 0,
      title: "Book service",
      responseJson: ''




    };
  }
  static navigationOptions = {
    title: "Book Service",
    headerTitleStyle: {
      flex: 1,
      textAlign: "center",
      alignSelf: "center",
      fontFamily: "Roboto",
      color: "#9b9b9b"
    },
    headerStyle: {
      backgroundColor: "white"
    }
  };


  // ============Safety employee ajax call start==============
  safety_officer() {
    console.warn("Enter in to the  Safety officer")
    return fetch("http://192.168.0.224:8085/Safetyofficer_details", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: "abc",

      },
      body: JSON.stringify({

        company_trade_lincense_no: "78954",
        category: "safety_oficer",
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        var responseJson = data.message
        console.warn("safety", responseJson)
        this.props.navigation.navigate("Safety_officer", {
          responseJson: responseJson,

        });
      })




      .catch(function (error) {
        console.warn(
          "Error" + error
        );
        // ADD THIS THROW error
        throw error;
      });
  }
  // ============Safety employee ajax call end==============

  // ============other employee ajax call start==============
  other_employee() {
    console.warn("Enter in to the other employee")
    return fetch("http://192.168.0.224:8085/Employee_Profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        other_employee: "other_employee"
      })
    })
      .then(response => response.json())

      .then(responseJson => {
        console.warn("responsejsonvalue", responseJson)
        // this.props.navigation.navigate("Safety_officer", {
        //   responseJson: responseJson
        // }) 


        // this.props.navigation.navigate("other_employee", {
        //   responseJson: responseJson
        // })



        // navigate('other_employee', {
        //   responseJson: responseJson,
        // })
      })

      .catch(error => {
        console.error(error);
      });
  }
  // ============Safety employee ajax call end==============











  render() {

    //const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <View>
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
          rightComponent={{ icon: "home", color: "black" }}
          outerContainerStyles={{ backgroundColor: "white" }}
        />

        <View style={styles.container}>
          <View style={styles.containersafety}>
            {/* <TouchableOpacity onPress={() => this.safety_officer()}> */}
            <TouchableOpacity onPress={() => this.safety_officer()}>
              <ImageBackground style={styles.backgroundBoder}>
                <Image
                  source={require("../images/worker.png")}
                  style={styles.workerimage}
                />
              </ImageBackground>
              <Text style={styles.text}>Safety Officer</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containersafety}>
            <TouchableOpacity onPress={() => this.other_employee()}>
              <ImageBackground style={styles.backgroundBoder1}>
                <Image
                  source={require("../images/team.png")}
                  style={styles.otheremployeestyle}
                />
              </ImageBackground>

              <Text style={styles.text}>Other Employee</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },

  containersafety: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 10
  },
  backgroundBoder: {
    marginLeft: 30,
    marginTop: 30,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 3,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
  backgroundBoder1: {
    marginLeft: 30,
    marginTop: 30,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 3,
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").width * 0.3,
    // backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bc9e6d"
  },
  workerimage: {
    alignItems: "center"
    // objectFit: 'contain',
  },
  //   backgroundBoderworker: {
  //     marginTop: 30,
  //     borderRadius:
  //       Math.round(
  //         Dimensions.get("window").width + Dimensions.get("window").height
  //       ) / 2,
  //     width: Dimensions.get("window").width * 0.3,
  //     height: Dimensions.get("window").width * 0.3,
  //     // backgroundColor: "white",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "gray"
  //   },
  otheremployeestyle: {
    alignItems: "center"
  },
  text: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 30,
    marginLeft: 20,
    fontSize: 18,
    alignItems: "center"
  }
});
