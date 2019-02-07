import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
  Text,
  View,
  Button,
  AppRegistry
} from "react-native";
import { Header } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";
// import CheckBox from 'react-native-checkbox-heaven';
import CheckBox from "react-native-check-box";
import environment from "../environment/environment";
const { base_url } = environment;

class servicelist extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add Service",
      // headerLeft: <Icon name="menu" color="white" />,
      headerStyle: {
        backgroundColor: "black",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "white",
        textAlign: "center",
        flex: 1
      }
    };
  };

  constructor() {
    super();
    this.state = {
      data: [],
      checked: [],
      salonDetail: {},
      stylistDetails: [],
      salonname: "",
      salonaddess: "",
      serviceHide: null,
      productHide: 0,

      stylishHide: 0,
      serviceBorder: 3,
      stylishBorder: 0,
      productBorder: 0
    };
  }

  componentDidMount() {
    this.serviceDetails();
  }

  componentWillMount() {
    var { params } = this.props.navigation.state;
    id = params.id;
    salonname = params.salonname;
    salonaddress = params.salonaddress;
    this.setState({ salonname: salonname, salonaddress: salonaddress });

    console.warn("inside component will mount", id);
      let { data, checked } = this.state;
      let intialCheck = data.map(x => false);
      this.setState({ checked: intialCheck });
  }

  handleChange = index => {
    console.warn("inside the handle change");
    let checked = [...this.state.checked];
    console.warn("selectin===> ", checked)
    checked[index] = !checked[index];
    this.setState({ checked });
  };

  serviceDetails() {
    // const url = "localhost:1003/listOfSalons";
    console.warn("inside service details baseurl", base_url);
    fetch(base_url + "/salonDetail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    })
      .then(r => r.json())
      .then(result => {
        console.warn("serviceDetails data:", result.salonDetails[0].services);
        console.log(
          "stylist_details data:",
          result.salonDetails[0].stylist_details
        );

        this.setState({
          data: result.salonDetails[0].services,
          stylistDetails: result.salonDetails[0].stylist_details
        });
      })
      .catch(error => {
        console.warn("Salone DetailError", error);
      });
  }

  Hide = nav => {
    this.setState({
      serviceHide: 0,
      stylishHide: 0,
      productHide: 0,
      serviceBorder: 0,
      stylishBorder: 0,
      productBorder: 0
    });

    if (nav === "service") {
      this.setState({
        serviceHide: null,
        serviceBorder: 3
      });
    } else if (nav === "stylish") {
      this.setState({
        stylishHide: null,
        stylishBorder: 3
      });
    } else if (nav === "product") {
      this.setState({
        productHide: null,
        productBorder: 3
      });
    }
  };

  getChkboxValue = deviceId => {
    console.warn("button called");
    chkBoxState = this.state.checked;
    contentOfChkbox = this.state.data;

    getdata = [];
    // getdata.push(chkSalonDetail);
    // console.warn(checkedData, norDAta);
    // getdata.push("hai");
    for (var i = 0; i < chkBoxState.length; i++) {
      if (chkBoxState[i] === true) {
        getdata.push(contentOfChkbox[i]);
        // getdata.push(chkSalonDetail[i]);
      }
    }

    this.props.navigation.navigate("BookingPage", {
      getdata: getdata,
      id: id
    });
  };

  render() {
    let { data, checked } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/APPbg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View>
            <Header
              leftComponent={{
                icon: "menu",
                onPress: () => this.props.navigation.openDrawer(),
                color: "#fff"
              }}
              centerComponent={{
                text: "Service List",
                style: { color: "#fff" }
              }}
              rightComponent={{ icon: "home", color: "#fff" }}
              outerContainerStyles={{ backgroundColor: "black" }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 35,
              marginRight: 35,
              marginTop: 17,
              marginBottom: 20
            }}
          >
            <Text
              onPress={() => this.Hide("service")}
              style={{
                color: "white",
                fontSize: 14,
                borderBottomWidth: this.state.serviceBorder,
                borderColor: "#e81d62"
              }}
            >
              Service
            </Text>
            <Text
              onPress={() => this.Hide("product")}
              style={{
                color: "white",
                fontSize: 14,
                borderBottomWidth: this.state.productBorder,
                borderColor: "#e81d62"
              }}
            >
              Product
            </Text>
            <Text
              onPress={() => this.Hide("stylish")}
              style={{
                color: "white",
                fontSize: 14,
                borderBottomWidth: this.state.stylishBorder,
                borderColor: "#e81d62"
              }}
            >
              Stylist
            </Text>
          </View>

          <View style={{ borderBottomWidth: 1, borderColor: "grey" }} />

          <View
            style={{ flexDirection: "row", marginTop: 10, marginRight: 10 }}
          >
            <View style={{ flex: 2, alignItems: "center" }}>
              <Image
                source={require("../assets/images/salonimg.png")}
                style={styles.imgProduct}
              />
            </View>

            <View style={{ flex: 3 }}>
              <Text
                style={{
                  fontWeight: "900",
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Roboto"
                }}
              >
                {this.state.salonname}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  color: "white",
                  fontSize: 14,
                  fontFamily: "Roboto"
                }}
              >
                {this.state.salonaddress}
              </Text>
            </View>
          </View>

          <View style={{ borderWidth: 0.5, borderColor: "grey", margin: 23 }} />

          <ScrollView>
            <View style={{ height: this.state.serviceHide }}>
              <FlatList
                data={data}
                extraData={this.state}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginLeft: 20,
                      marginRight: 30
                    }}
                  >
                    <CheckBox
                      style={{ flex: 1, padding: 10 }}
                      checkBoxColor={"white"}
                      rightTextStyle={{ color: "white" }}
                      checkedCheckBoxColor={"white"}
                      value={checked[index]}
                      onClick={() => this.handleChange(index)}
                      isChecked={checked[index]}
                      rightText={item.service_name}
                    />
                    <Text
                      style={{ color: "white", marginRight: 50, marginTop: 10 }}
                    >
                      {item.service_price}
                    </Text>
                    <Text style={{ color: "gray", marginTop: 10 }}>
                      {item.service_duration}
                    </Text>
                  </View>
                )}
              />
            </View>

            <View style={{ height: this.state.stylishHide }}>
              <FlatList
                data={this.state.stylistDetails}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginRight: 20,
                      marginLeft: 20,
                      borderBottomWidth: 1,
                      borderColor: "grey",
                      paddingBottom: 20,
                      paddingTop: 20
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start"
                      }}
                    >
                      <Image
                        source={require("../assets/images/profile-picture-circle-png-10.png")}
                        style={styles.stylisImg}
                      />

                      <View style={{ marginLeft: 20 }}>
                        <Text
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 14
                          }}
                        >
                          {item.stylist_first_name}{" "}
                        </Text>
                        <Text style={{ color: "white", fontSize: 10 }}>
                          Makeup and Hair
                        </Text>
                        <Text style={{ color: "white", fontSize: 10 }}>
                          12:00 AM
                        </Text>

                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "bold",
                            color: "white",
                            marginTop: 20
                          }}
                        >
                          Gallery
                        </Text>
                      </View>
                    </View>

                    <View>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "700"
                        }}
                      >
                        150$
                      </Text>
                    </View>
                  </View>
                  // <View style={{borderBottomWidth:1, borderColor:"grey", margin:20 }} >
                )}
              />
            </View>
          </ScrollView>

          <View style={{ borderWidth: 0.5, borderColor: "grey", margin: 23 }} />

          <View style={styles.footer}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Text style={{ color: "white" }}>BACK</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.getChkboxValue();
              }}
            >
              <Text style={{ color: "white" }}>NEXT</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    height: 40,
    textAlign: "center",
    marginLeft: 23,
    marginRight: 23,
    color: "white",
    marginTop: 7,
    borderColor: "white",
    borderBottomWidth: 1,
    fontFamily: "Roboto-Light"
  },
  sumallIcon: {
    width: 14,
    height: 13,
    marginRight: 5
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 20
  },
  stylisImg: {
    height: 60,
    width: 60
  },
  roundImg: {
    //backgroundColor:'gray',
    width: 50,
    height: 50,
    borderRadius: 30,
    marginTop: 13
  },
  bannerImg: {
    //backgroundColor:'gray',
    height: 150,
    marginTop: 10,
    width: "100%"
  },
  prodeuctView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 17,
    marginRight: 17
  },
  productImg: {
    // backgroundColor:'gray',
    height: 114,
    width: 101,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 7
  },
  textCenter: {
    textAlign: "center",
    marginTop: 3,
    color: "white",
    fontFamily: "Roboto-Light"
  },
  productText: {
    textAlign: "center",
    fontFamily: "Roboto",
    color: "white",
    fontSize: 10
  },
  viewB: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 24
  },

  viewAll: {
    fontFamily: "Roboto",
    backgroundColor: "#e81d62",
    fontSize: 12,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 8,
    color: "white"
  },
  textA: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    marginTop: 17
  },
  imgProduct: {
    width: 101,
    height: 114
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  labelStyle: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "bold",
    color: "#2f4f4f"
  }
});

export default servicelist;