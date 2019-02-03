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
//import all the components we are going to use.

// import ImagePicker from "react-native-image-picker";
// import { loadReCaptcha } from "react-recaptcha-google";
// import { ReCaptcha } from "react-recaptcha-google";
import { WebView } from "react-native-gesture-handler";
//import { ScrollView } from 'react-native-gesture-handler';
// import Step from './Step'

class Hrregister1 extends Component {
  // static Step = props => <Step {...props} />
  constructor(props, context) {
    super(props, context);
    this.state = {
      avatarSource: null,
      index: 0
    };

    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  getWebviewContent(){
    var originalForm = '<!DOCTYPE html><html><head><script src="https://www.google.com/recaptcha/api.js"></script></head><body><form action="[POST_URL]" method="post"><input type="hidden" value="[TITLE]"><input type="hidden" value="[DESCRIPTION]"><input type="hidden" value="[URL]"><div class="g-recaptcha" data-sitekey="6Lfi340UAAAAABu-sFRpLaz6pqhQDPPhYaNqBfqL"></div></form></body></html>'
    var tmp =  originalForm
        .replace("[POST_URL]", "http:////192.168.0.94:8082/v1/video")
        //.replace("[TITLE]", this.state.form.title)
        //.replace("[DESCRIPTION]", this.state.form.description)
        //.replace("[URL]", this.state.form.url); 

    return tmp; 
}

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
      console.warn("enter in to the register")
    return fetch("http://192.168.0.94:8085/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name: this.state.Name,
        Company: this.state.Company,
        Nationality: this.state.Nationality,
        phone_number: this.state.phone_number,
        Address: this.state.Address,
        pobox: this.state.pobox,
        mobile: this.state.mobile,
        Email: this.state.Email,
        Password: this.state.Password,
        ConfirmPassword: this.state.ConfirmPassword
      })
    })
      .then(response => response.json())

      .then(responseJson => {
        return responseJson;
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
      <ScrollView>
        <View style={styles.textinput}>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
            <View style={{ flex: 3, alignItems: "flex-start", margin: 1 }}>
              <Text
                style={{ fontSize: 17, fontFamily: "Roboto", color: "black" }}
              >
                Welcome to service portal, please enter your information to be
                able to use the portal and add your property details
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              
            </View>
          </View>

          <Text style={styles.addr1text}>Name *</Text>

          {/*Input to get the value from the user*/}
          <TextInput
            ref="Name"
            value={this.state.Name}
            onChangeText={Name => this.setState({ Name })}
            placeholder={"Enter the ContactMobile"}
            style={styles.addr1}
          />

          <Text style={styles.addr1text}>Company</Text>
          <TextInput
            ref="Company_Category"
            value={this.state.Company}
            onChangeText={Company => this.setState({ Company })}
            placeholder={"Enter the Company"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Nationality</Text>
          <TextInput
            value={this.state.Nationality}
            onChangeText={Nationality => this.setState({ Nationality })}
            placeholder={"Enter the Nationality"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Phone Number</Text>
          <TextInput
            ref="phone_number"
            value={this.state.phone_number}
            onChangeText={phone_number => this.setState({ phone_number })}
            placeholder={"Enter the phone_number"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Address</Text>
          <TextInput
            value={this.state.Address}
            onChangeText={Address => this.setState({ Address })}
            placeholder={"Enter the Address"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>PO Box</Text>
          <TextInput
            value={this.state.pobox}
            onChangeText={pobox => this.setState({ pobox })}
            placeholder={"Enter the pobox"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Mobile *</Text>
          <TextInput
            value={this.state.mobile}
            onChangeText={mobile => this.setState({ mobile })}
            placeholder={"Enter the mobile"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Email *</Text>
          <TextInput
            value={this.state.Email}
            onChangeText={Email => this.setState({ Email })}
            placeholder={"Enter the Email"}
            style={styles.InputSelector}
          />

          <Text style={styles.addr1text}>Password</Text>
          <TextInput
            value={this.state.Password}
            onChangeText={Password => this.setState({ Password })}
            placeholder={"Enter the Password"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Confirm Password</Text>
          <TextInput
            value={this.state.ConfirmPassword}
            onChangeText={ConfirmPassword => this.setState({ ConfirmPassword })}
            placeholder={"Enter the ConfirmPassword"}
            style={styles.InputSelector}
          />

          {/* <Button
                    title="Prev"
                    color="#bc9e6d"
                    onPress={() => navigate('Login')}
                    style={styles.prev}

                /> */}

          {/* <ReCaptcha
              ref={el => {
                this.captchaDemo = el;
              }}
              size="normal"
              data-theme="dark"
              render="explicit"
              sitekey="6Lcl1I0UAAAAAA-AhxGefIHtUIeJCtKsDb5BSQDu"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />  */}
          {/* <WebView 
    javaScriptEnabled={true} 
    mixedContentMode={'always'} 
    style={{height: 200}} 
    source={{
        html: this.getWebviewContent(),
        baseUrl: 'http://127.0.0.1' // <-- SET YOUR DOMAIN HERE
    }}/>
            </View>  */}

          {/* <WebView style={{flex:1}}
       source=
       {{ html: "<style>p{text-align: justify;font-size:18}</style>"
       +
       "<div>"
       +
       "Salama is a high-level training center established as a collaboration between Sharjah Prevention and Safety Authority (SPSA) and SANED, to serve various sectors in the Emirate of Sharjah, providing specialized training programs in the prevention and safety of workers within private and public sectors.The centre provides main focus on HSE in addition to other topics to increase HSE awareness leading to reducing injuries and  incidents."
       +
       "</div>"}}
       /> */}

          <WebView
            javaScriptEnabled={true}
            mixedContentMode={"always"}
            style={{ height: 500 }}
            source={{
              html: this.getWebviewContent(),
              baseUrl: "http://192.168.0.94:8082" // <-- SET YOUR DOMAIN HERE
            }}
          />

          <Button
            title="Submit"
            color="#bc9e6d"
            onPress={() => {
              this.register();
              this.props.navigation.navigate("Login");
            }}
            style={styles.next}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#F5FCFF"
  },
  textinput: {
    flex: 1,
    margin: 20
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: '#F5FCFF',
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
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,
    color: "black"
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

export default Hrregister1;
