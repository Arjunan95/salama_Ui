import React, { Component } from "react";
import { Header } from "react-native-elements";
import { Container } from "native-base";

import {
  Image,
  AppRegistry,
  StyleSheet,
  WebView,
  Button,
  View,
  Text
} from "react-native";

class Salama extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Booking Service",
      // headerLeft: <Icon name="menu" color="white" />,
      headerStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "#c3ad7e",
        textAlign: "center",
        flex: 1
      }
    };
  };
  login() {
    this.props.navigation.navigate("safetyengineerscreen");
  }

  render() {
    return (
      <Container>
        <View>
          <Header
            leftComponent={{
              icon: "menu",
              onPress: () => this.props.navigation.openDrawer(),
              color: "black"
            }}
            containerStyle={{ backgroundColor: "white" }}
            rightComponent={{ icon: "home", color: "black" }}
            outerContainerStyles={{ backgroundColor: "white" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../images/salama.png")}
            style={{
              justifyContent: "center",
              alignSelf: "center",
              alignContent: "center"
            }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 24,
              textAlign: "center"
            }}
          >
            WHAT IS SALAMA?
          </Text>

          <WebView
            style={{ flex: 1 }}
            source={{
              html:
                "<style>p{text-align: justify;font-size:18}</style>" +
                "<p>" +
                "Salama is a high-level training center established as a collaboration between Sharjah Prevention and Safety Authority (SPSA) and SANED, to serve various sectors in the Emirate of Sharjah, providing specialized training programs in the prevention and safety of workers within private and public sectors.The centre provides main focus on HSE in addition to other topics to increase HSE awareness leading to reducing injuries and  incidents." +
                "</p>"
            }}
          />
          <Button
            title="NEXT"
            color="red"
            style={{
              height: 50,
              marginTop: 70,
              width: "80%",
              marginLeft: 40,
              height: 44.7,
              borderRadius: 5,
              fontSize: 20,
              marginTop: 30
            }}
            onPress={() => this.login()}
          />
        </View>
      </Container>

      //<Container>

      //       <View flex center style = {styles.container}>
      //       <View>
      //  <Image source = {require('../images/salama.png')} style = {styles.image} />
      //  </View>
      //       <View>
      //         <Text style={{ color: 'black',fontWeight:'bold', fontSize: 24, textAlign:'center',}}>
      //        WHAT IS SALAMA?
      //         </Text>
      //         {/* <View style = {{}}> */}
      //         <WebView
      //         source=
      //         {{ html: "<style>p{text-align: justify}</style>"
      //         +
      //         "<p>"
      //         +
      //         "Salama is a high-level training center established as a collaboration between Sharjah Prevention and Safety Authority (SPSA) and SANED, to serve various sectors in the Emirate of Sharjah, providing specialized training programs in the prevention and safety of workers within private and public sectors.The centre provides main focus on HSE in addition to other topics to increase HSE awareness leading to reducing injuries and  incidents."
      //         +
      //         "</p>"}}
      //         />

      //       {/* </View> */}
      //         </View>
      //         </View>
      //   </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    margin: 20
  }

  //   image: {
  //    flex:1
  //   },
  //   box:{
  //     width:292,
  //     height: 227,
  //     textAlign: 'justify'

  //   }
});

export default Salama;
