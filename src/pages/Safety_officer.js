// Second screen which we will use to get the data
import React, { Component } from "react";
//import react in our code.
import {
    StyleSheet,
    View,
    Text, Image,
    TouchableHighlight,
    FlatList,
    Button
} from "react-native";
import { Header, } from "react-native-elements";
import { Container, ListItems } from "native-base";
import CheckBox from "react-native-check-box";
import { WebView } from "react-native-gesture-handler";


//import all the components we are going to use.

// import ImagePicker from "react-native-image-picker";
// import Step from './Step'
// import ReCAPTCHA from "react-google-recaptcha";



// var checked
// var index
export default class safety_officer extends Component {
    // static Step = props => <Step {...props} />



    constructor(props) {
        super(props);


        // this.setState({ checked: intialCheck });

        let safetyemployee = this.props.navigation.state.params.responseJson

        let safetyemployeeresponse = safetyemployee.message


        let intialCheck = safetyemployeeresponse.map(x => false);


        console.warn("safetyemployeeresponse", safetyemployeeresponse)

        this.state = {
            safetyemployeeresponse: safetyemployeeresponse,

            avatarSource: '',
            index: '',

            checked: intialCheck,

        };
    }
    static navigationOptions = {
        title: "Employee List",
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

    handleChange = index => {

        let checked = [...this.state.checked];

        console.warn("checked", checked);
        checked[index] = !checked[index];
        this.setState({ checked });
    };


    Selected_employees = deviceId => {
        console.warn("Selected values");
        chkBoxState = this.state.checked;
        contentOfChkbox = this.state.safetyemployeeresponse;

        getdata = [];
        // getdata.push(chkSalonDetail);
        // console.warn(checkedData, norDAta);
        // getdata.push("hai");
        for (var i = 0; i < chkBoxState.length; i++) {
            if (chkBoxState[i] === true) {
                getdata.push(contentOfChkbox[i]);
                console.warn("loopconsole", getdata)
                // getdata.push(chkSalonDetail[i]);
            }
        }

        // this.props.navigation.navigate("BookingPage", {
        //     getdata: getdata,
        //     id: id
        // });



    };


    // componentWillMount() {
    //     this.setState({ data: this.state.safetyemployeeresponse })
    // }

    render() {
        let { checked } = this.state;
        // this.setState({ data: safetyemployeeresponse })
        return (

            <View>
                <Text style={styles.select_style}>Select all</Text>
                <FlatList
                    data={this.state.safetyemployeeresponse}
                    extraData={this.state}
                    renderItem={({ item, index }) => (
                        <View style={styles.flatstyle}>
                            <Image source={{ uri: item.profile_photo_url }}
                                style={{ width: 80, height: 80, borderRadius: 40 }} />
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={styles.text_style}>{item.Name_en}</Text>
                                <Text style={styles.text_style}>{item.Employee_ID}</Text>
                            </View>
                            <CheckBox
                                style={{ flex: 1, padding: 0, marginLeft: 160 }}
                                checkBoxColor={"black"}
                                rightTextStyle={{ color: "black" }}
                                checkedCheckBoxColor={"black"}
                                value={checked[index]}
                                onClick={() => this.handleChange(index)}
                                isChecked={checked[index]}

                            />
                            {/* <CheckBox
                                value={this.state.checked}
                                onValueChange={() => this.setState({ checked: !this.state.checked })}
                            /> */}
                        </View>


                    )}
                // keyExtractor={item => item.Employee_ID}
                // ItemSeparatorComponent={this.renderSeparator}
                // ListHeaderComponent={this.renderHeader}
                />
                <Button
                    title="Submit"
                    color="#bc9e6d"
                    onPress={() => {

                        this.Selected_employees();
                    }}
                    style={styles.next}
                />
            </View>





        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",

    },
    select_style: {
        fontSize: 16,
    },
    next: {
        padding: 50,
        width: 50,
        height: 50

    },
    flatstyle: {
        flex: 1,
        flexDirection: "row",
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    text_style: {
        color: 'black',
        padding: 0,
        marginLeft: 20,
        fontSize: 16,
        fontFamily: 'Roboto',

    },

    containersafety: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        marginBottom: 50,
        marginLeft: 20
    },
    checkboxstyle: {
        flex: 1,
        flexDirection: 'column',

        marginLeft: 80
    },
    textstyle: {
        fontSize: 22,
        flexDirection: 'column',

    }

});
