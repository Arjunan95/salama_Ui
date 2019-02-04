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
      title: "Book service"
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

  render() {
    const { navigate } = this.props.navigation;

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
            <TouchableOpacity onPress={() => navigate("Registerform1")}>
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
            <TouchableOpacity onPress={() => navigate("Registerform2")}>
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
