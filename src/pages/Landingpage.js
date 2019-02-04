import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";
import {
  Header,
  Left,
  Form,
  Content,
  Alert,
  CardItem,
  Card,
  Body,
  Icon,
  Container,
  Button,
  Picker,
  Textarea
} from "native-base";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";

export default class Landingpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: "",
      time: "",
      date: "",
      buttonColor: "red",
      text: ""
    };
    this.onSelect = this.onSelect.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // title: "Schedule",
      headerLeft: <Icon name="ios-arrow-back" color="white" />,
      headerRight: <Icon name="ios-arrow-forward" color="white" />,

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
  onSelect(index, value) {
    if (value == "english") {
      this.setState({
        text: this.props.navigation.navigate("Homepage")
      });
    } else if (value == "arabic") {
      this.setState({
        text: this.props.navigation.navigate("Homepage")
      });
    }
  }
  submit = () => {
    console.warn("inside the submit");
    fetch("http://192.168.0.94:8082/schedules", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        schedule_time: this.state.time,
        requestdate: this.state.selectedStartDate
      })
    })
      .then(r => r.json())
      .then(result => {
        console.warn("result of data:", result);

        this.setState({
          dataSource: result
        });
      })
      .catch(error => {
        console.warn("data Error", error);
      });
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Image source={require("../images/download-copy.png")} />
          <Text
            style={{ fontSize: 22, color: "#bc9e6d", textAlign: "center" }}
          />
          <Text style={{ fontSize: 22, color: "#bc9e6d", textAlign: "center" }}>
            مرحبًا بك في الخدمة
          </Text>
          <Text style={{ fontSize: 22, color: "#bc9e6d", textAlign: "center" }}>
            Welcome to Service
          </Text>
        </View>

        <View>
          <Text style={{ fontSize: 22, color: "black", textAlign: "center" }}>
            اختر لغتك
          </Text>
          <Text style={{ fontSize: 22, color: "black", textAlign: "center" }}>
            Choose your language
          </Text>
          <Text style={{ fontSize: 22, color: "black", textAlign: "center" }} />
        </View>
        <View style={styles.lineStyle} />
        <View
          style={{ height: 50, justifyContent: "center", alignItems: "center" }}
        >
          <RadioGroup
            style={{ flexDirection: "row" }}
            size={20}
            thickness={2}
            color="#9575b2"
            justifyContent="center"
            alignItems="center"
            selectedIndex={1}
            onSelect={(index, value) => this.onSelect(index, value)}
          >
            <RadioButton value={"english"}>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  textAlign: "center",
                  justifyContent: "center"
                }}
              >
                English
              </Text>
            </RadioButton>
            <RadioButton value={"arabic"}>
              <Text
                style={{
                  fontSize: 18,
                  color: "black",
                  textAlign: "center",
                  justifyContent: "center"
                }}
              >
                الإنجليزية
              </Text>
            </RadioButton>
          </RadioGroup>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    height: 350
  },
  text: {
    textAlign: "center",
    borderColor: "#bbb",
    padding: 10,
    backgroundColor: "#eee",
    backgroundColor: "red"
  },
  drawericon: {
    marginLeft: -100
  },
  container: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: "center",
    // backgroundColor: 'white',
    alignItems: "center"
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    // margin:15,
    width: "100%"
  },
  bottom: {
    justifyContent: "flex-end",
    backgroundColor: "#bc9e6d",
    marginBottom: 60,
    width: "60%",
    marginLeft: 80,
    height: 44,
    // borderRadius: 5,
    fontSize: 20
  },
  welcome: {
    justifyContent: "center",
    fontFamily: "Roboto",
    marginLeft: 5,
    fontSize: 25
  },
  time: {
    flexDirection: "row",
    margin: 10,
    marginLeft: 20
  },
  time1: {
    flexDirection: "row",
    margin: 5
  },
  text: {
    fontSize: 15,
    marginLeft: 30
  },
  text1: {
    fontSize: 15,
    marginLeft: 20
  },
  textt: {
    fontSize: 15,
    marginLeft: 45
  },
  text11: {
    fontSize: 15,
    marginLeft: 30
  },
  text2: {
    fontSize: 15,
    marginLeft: 40
  },
  text4: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: -200
  },
  text5: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: -120
  }
});
