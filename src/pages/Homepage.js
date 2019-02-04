import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image
} from "react-native";
// import {DrawerNavigator} from 'react-navigation'
import {
  Form,
  Content,
  Alert,
  CardItem,
  Card,
  Body,
  Icon,
  Container,
  Picker,
  Textarea
} from "native-base";
import { Header } from "react-native-elements";
import { TextField } from "react-native-material-textfield";
import { CheckBox } from "react-native-elements";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

export default class Homepage extends Component {
  static navigationOptions = {
    // header: null
  };
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  render() {
    value = "salama";
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{
            icon: "menu",
            onPress: () => this.props.navigation.openDrawer(),
            color: "black"
          }}
          containerStyle={{ backgroundColor: "white" }}
          centerComponent={{
            text: "Home",
            style: { color: "black", fontSize: 20 }
          }}
          rightComponent={{ icon: "home", color: "black" }}
          outerContainerStyles={{ backgroundColor: "white" }}
        />

        <View style={{ paddingTop: 30 }}>
          <Text style={{ fontSize: 30, color: "#bc9e6d", textAlign: "center" }}>
            Welcome
          </Text>
          <Text style={{ fontSize: 15, color: "#bc9e6d", textAlign: "center" }}>
            Our Services
          </Text>
        </View>
        <View style={{ flex: 0.2 }} />
        <View
          style={{
            flexDirection: "row",
            borderColor: "red",
            justifyContent: "center"
          }}
        >
          <View style={styles.container}>
            <Card style={{ width: "40%", height: 110 }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Appeal")}
              >
                <Image
                  source={require("../images/aman-llogo-red-background-copy-3.png")}
                  style={{
                    width: "100%",
                    marginRight: 60,
                    height: 60,
                    borderRadius: 10,
                    marginTop: 25
                  }}
                />
              </TouchableOpacity>
            </Card>

            <View>
              <Text style={{ color: "white" }}>abc</Text>
            </View>
            <Card style={{ width: "40%" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("salamaLoad")}
              >
                <Image
                  source={require("../images/salama-logo-copy-2.png")}
                  style={{
                    width: "50%",
                    height: 110,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 40
                  }}
                />
              </TouchableOpacity>
            </Card>
          </View>
        </View>
        <Body />
        <Text
          style={{
            fontSize: 22,
            color: "#9b9b9b",
            textAlign: "center",
            marginBottom: 30
          }}
          onPress={() => this.props.navigation.navigate("Appeal")}
        >
          Want to Appeal?
        </Text>
        <View style={styles.bottom}>
          <Button
            title="Appeal"
            color="#bc9e6d"
            width="500"
            onPress={() => this.props.navigation.navigate("Appeal")}
          />
        </View>
        <View style={{ flex: 0.2 }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 24,
    // textAlign:'center'
    marginTop: 10
  },
  imgbutton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  drawericon: {
    marginLeft: -100
  },
  headerWelcome: {
    fontSize: 24,
    textAlign: "center",
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 899,
    borderTopWidth: 1
    //   borderColor: 'white',
  },
  addBorder: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
    // Set border width.
    borderWidth: 2,
    // Set border color.
    borderColor: "red"
  },
  lineStyle: {
    borderBottomWidth: 1,
    borderColor: "black",
    margin: 5,
    width: 500
  },

  bottom: {
    // marginBottom:30,
    width: "60%",
    marginLeft: 80,
    height: 58.7,
    borderRadius: 5,
    fontSize: 20
  }
});
