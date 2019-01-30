import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  
  TouchableHighlight,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Header, Left, Form, Content,Alert, CardItem,Card, Body, Icon, Container, Button, Picker, Textarea } from 'native-base';



export default class Hr_register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: '',
      time: '',
      date:'',
      buttonColor: 'red',


    };
    this.onDateChange = this.onDateChange.bind(this);
  }



  text(time) {
  
    this.setState ({
        time: time,
        buttonColor: 'someNewColor'

    });
    console.warn("time",time);
   
  
  }
  
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Schedule",
       headerLeft: <Icon name="ios-arrow-back" color="white" />,
       headerRight: <Icon name="ios-arrow-forward" color="white" />,
       
      headerStyle: {
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff",
        borderTopColor: "#ffffff",
        
      },
      headerTitleStyle: {
        color: "#9b9b9b",
        textAlign: 'center', flex:1,
        
      }
    };
  };

  onDateChange(date) {
    this.setState({
      selectedStartDate: date.toString(),
    });
    console.warn("date",this.state.selectedStartDate);
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
        "schedule_time": this.state.time,
        "requestdate": this.state.selectedStartDate
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
  }





  render() {
   
    return (
      <Container>
         <Header style={{backgroundColor:'#bc9e6d',color:'black'}} >
         <Left>
                <Icon style={styles.drawericon} name="menu" onPress={()=>
                 this.props.navigation.openDrawer()} />
            </Left>
          
         </Header>
      <View style={styles.container}>


        </View>
        </Container>
    )
  }
  

}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:15,
    width: 365,
 },
 welcome: {
 justifyContent:'center',
 fontFamily: 'Roboto',
 marginLeft: 5,
 fontSize: 25
},
time:{
  flexDirection:'row',
  margin: 10,
  marginLeft: 20
},
time1:{
  flexDirection:'row',
  margin: 5,

},
text:{
  fontSize: 15,
  marginLeft: 30
},
text1:{
  fontSize: 15,
  marginLeft: 20
},
textt:{
  fontSize: 15,
  marginLeft: 45
},
text11:{
  fontSize: 15,
  marginLeft: 30
},
text2:{
  fontSize: 15,
  marginLeft: 40
},
text4:{
  fontSize: 15,
  marginTop: 30,
  marginLeft: -200
},
text5:{
  fontSize: 15,
  marginTop: 30,
  marginLeft: -120
}

 
});
