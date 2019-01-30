import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

import { Header, Left,ListItem, Form, Content,Alert, CardItem,Card, Body, Icon, Container,Picker, Textarea } from 'native-base';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: '',
      time: '',
      date:'',
      buttonColor: 'red',
dataSource:''

    };
    this.onDateChange = this.onDateChange.bind(this);
  }

 

  time(time) {
  
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

  submit(){
    return fetch('http://192.168.0.53:8085/Classroom_availability', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "selectedStartDate": this.state.selectedStartDate,
        // "Password": this.state.Password,
      }),
    }).then((response) => response.json())
    
        .then(() => {
  
        })
  
  }
  




  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <Container>
      <Header style={{backgroundColor:'#bc9e6d',color:'black'}} >
      <Left>
             <Icon style={styles.drawericon} name="menu" onPress={()=>
              this.props.navigation.openDrawer()} />
         </Left>
       
      </Header>
      <View style={styles.container}>
         
         <View style={styles.calendar}>
        <CalendarPicker
         onPress={this.submit()}  onDateChange={this.onDateChange}
          
        />
        </View>

        <View>
        <ListItem itemDivider>         
          <Text style={{marginLeft:70}}>{ startDate}</Text>
          </ListItem>
        </View>
         

         <View flexDirection='row'>
         <Image
        source={require('../images/noun-589357-cc.png')}
        style={{marginLeft:20,marginTop:17 }}>
        </Image>  
      <Text  style={{fontSize:25,fontFamily:'Roboto',color:'black',margin:10}}>{this.state.dataSource}</Text>
      </View>
      

         <View style={styles.time}>
         <TouchableOpacity 
          activeOpacity={.5}
          onPress={()=> this.text('8 am-12 am')}>
         <Text >8 am-12 am</Text>
        </TouchableOpacity>

          
         </View> 
       

         <View style = {styles.lineStyle} />

         {/* <View style={{ marginTop:5, width:150,height: 50,marginLeft:125}}>
        <Button
         title="Proceed to Pay"
         color="red"
         height= "90"
         onPress ={() => this.submit()}
         />
         </View> */}
         

        </View>
        <View style={styles.bottom}>
                <Button title='next' color= "#bc9e6d" height='120' style={{width: '60%',
    marginLeft: 80,
    height: 50,
    borderRadius: 5,
    }} onPress={() => this.props.navigation.navigate('Seat_Allocation')} >
            {/* <Text style={  {  borderRadius: 5, fontSize: 20, color:'white', marginRight:105  } }>Next</Text> */}
          </Button>
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
    backgroundColor: 'red',
    
  },
  bottom:{
   
    marginBottom:30,
    width: '60%',
    marginLeft: 80,
    height: 54.7,
    borderRadius: 5,
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  drawericon:{
    marginLeft:-100
 },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:15,
    width: 380,
 },
 welcome: {
 justifyContent:'center',
 fontFamily: 'Roboto',
 marginLeft: 5,
 fontSize: 25,
 
},
time:{
  flexDirection:'row',
  // margin: 10,
  marginLeft: 55
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
