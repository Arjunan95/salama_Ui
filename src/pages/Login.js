import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image
} from "react-native";

import {
  Header,
  Left,
  Content,
  CardItem,
  Card,
  Body,
  Icon,
  Container
} from "native-base";
import { TextField } from "react-native-material-textfield";
import { CheckBox } from "react-native-elements";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Company_Email: "",
      Password: "",
      checkBoxChecked: false
    };
  }
  // static navigationOptions = {
  //     drawerLabel: '',
  //     header: null,
  //     drawerIcon: () => (
  //    <View>
  //   <Image
  //     source={require('../images/download.png')}
  //     style={{width: 60, height: 60, borderRadius: 10 , marginLeft: 230, margin:20}}
  //   />
  //   <View style={styles.lineStyle} />
  //   <Text></Text>
  //   </View>
  // )
  // }

  onChangeEmail = Company_Email => {
    this.setState({ Company_Email: Company_Email });
  };
  onChangePassword = Password => {
    this.setState({ Password: Password });
  };

  onCheckBoxPress(id) {
    console.log("Checked!");
    console.log(id);
    this.setState({
      checkBoxChecked: !this.state.checkBoxChecked
    });
  }

  login() {
    return fetch("http://192.168.0.51:8085/hr_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Company_Email: this.state.Company_Email,
        Password: this.state.Password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        var res1 = responseJson;
        // console.warn("Entire login console", res1)
        if (res1.status == 401) {
          alert(res1.message);
        }
        if (res1.message.status == 401) {
          alert(res1.message.message);
        } else {
          this.props.navigation.navigate("Salama");
        }
      });
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "white", color: "black" }}>
          <Left>
            <Icon
              style={styles.drawericon}
              name="menu"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
        </Header>
        <Content padder style={{ marginTop: 50 }}>
          <Card style={{ marginBottom: 30, height: 400 }}>
            <CardItem>
              <Body>
                <Text
                  style={{ fontSize: 25, marginBottom: 10, color: "black" }}
                >
                  Welcome To Services
                </Text>
              </Body>
            </CardItem>

            <TextField
              type="text"
              label="Email Id"
              onChangeText={this.onChangeEmail}
            />

            <TextField
              label="Enter password"
              onChangeText={this.onChangePassword}
              secureTextEntry={true}
            />
            <Container>
              <View style={{ flexDirection: "row" }}>
                <CheckBox
                  checked={this.state.checkBoxChecked}
                  onPress={() => this.onCheckBoxPress()}
                  title="Remember Me"
                />
                <Text
                  onPress={() =>
                    this.props.navigation.navigate("ForgotPassword")
                  }
                  style={{ color: "black", marginTop: 17 }}
                >
                  Forgot password?
                </Text>
              </View>
            </Container>

            <View style={styles.bottom}>
              <Button
                title="SIGN IN"
                color="red"
                style={{ height: 50 }}
                onPress={() => this.login()}
              />
            </View>
            <View style={{ flexDirection: "row", marginTop: -50 }}>
              <Text style={{ color: "black", marginLeft: 17, fontSize: 15 }}>
                New User?{" "}
              </Text>
              <Text
                style={{ color: "red", fontSize: 15 }}
                onPress={() => this.props.navigation.navigate("Hrregister1")}
              >
                Register Here
              </Text>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center"
  },
  welcome: {
    fontSize: 24,
    // textAlign:'center'
    marginTop: 10
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
  },
  bottom: {
    marginBottom: 70,
    width: "80%",
    marginLeft: 40,
    height: 44.7,
    borderRadius: 5,
    fontSize: 20
  },
  lineStyle: {
    borderBottomWidth: 1,
    borderColor: "black",
    margin: 5,
    width: 500,
    paddingTop: 10
  }
});
