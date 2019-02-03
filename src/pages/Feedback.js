import React, { Component } from "react";
import { Container, Header, Content, Accordion,View,Text, Left,Icon } from "native-base";
// import { Icon } from 'react-native-elements'
import { Image,AppRegistry,StyleSheet,TextInput,TouchableOpacity,LayoutAnimation,NativeModules,TouchableHighlight,TouchableNativeFeedback } from 'react-native';
import Textarea from 'react-native-textarea';
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Button } from 'react-native-elements';
import {CheckBox} from 'native-base';


 class Feedback extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      description : '',
         rating : ''
    }
}

  
  
    state = {
        w: 44,
        h: 44,
        Img1Border:1,
        Img2Border:1,
        Img3Border:1,
        //rating : ''
      };
    
         // constructor (props) {
    //     super(props);
    //     this.state = {
    //       check1:false,
    //       check2:false,
    //       check3:false,
    //       facp_working_condition:0,
    //       facp_readiness:0,
    //       annual_maintenance_contract:0

    //     };
    //   }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Feedback",
      headerLeft:  
      <TouchableOpacity>
        {/* <Button
       
       buttonStyle = {{backgroundColor: 'white',
   
 }}
         title="Back"
         onPress={() => this.props.navigation.navigate('mainPage')}
       /> */}
       <Text>Back</Text>
      </TouchableOpacity>,
      headerStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "#c3ad7e",
        textAlign: 'center',
        marginLeft: 110
      }
    };
  };

  componentDidMount(){
    //console.warn("inside the component did mount");
  }

  chkBoxCondition = (chkName) =>{

    //console.warn("inside the condition ",chkName);
    
    this.setState({
      Img1Border:1,
      Img2Border:1,
      Img3Border:1,
     // rating:''
     
    })

    if(chkName === "img1"){

        this.setState({
           Img1Border:0.5,
           rating: '3'
           
        }) 
    }
    else if(chkName === "img2"){
        
        this.setState({
            Img2Border:0.5,
            rating: '2'
            
        })
    }
    if(chkName === "img3"){
        this.setState({
          Img3Border:0.5,
          rating:"1"
          
        })
    }
}


// abcfn = () => {
//   //console.warn("inside the abcfn");
// }

submit = () => {
 
//console.warn("inside the submit");
//console.warn("rating"+this.state.rating)
//console.warn(this.state.description)
  fetch("http://192.168.0.134:8082/Feedback", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
           "schedule_id":this.state.rating,
      "comments":this.state.description,
      
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
     <View>
      
      
       <View style = {styles.container}>
        
       
        {/* <Text style={styles.FACP}>
       FACP COMMUNICATION DEVICE
       
        </Text>
        <Text style={styles.price}>
      PRICE: AED 500
       
        </Text>
        <Text style={styles.content}>
        Preyank Solar Optical wireless smoke 
        </Text>
        <Text style={styles.content}>
        detector/sensor/alarm unit
        </Text>
        <Text style={styles.content}>
        9V Battery Included
        </Text>
        <Text style={styles.content}>
        85 db alarm signal Loud Output
        </Text> */}
<View style={styles.area}>
  <Textarea
    containerStyle={styles.textareaContainer}
    style={styles.textarea}
    onChangeText = {(txt) =>{
      this.setState({
        description:txt
      })}}
    //defaultValue={this.state.text}
    //maxLength={120}
    placeholder={'What would you like share with us'}
    placeholderTextColor={'#979797'}
    underlineColorAndroid={'transparent'}
  ></Textarea>
</View>
    <Text style={styles.content1}>
        What do you think of our service?
        </Text>
        
        
      

    <View style={{ flexDirection:'row', marginTop: 25}}>
  

    <TouchableOpacity onPress={() => this.chkBoxCondition("img1")} >
            <Image source = {require('../images/001-happy.png')}  style = {{width:44, opacity:this.state.Img1Border, height:44, marginRight: 21,borderRadius: 35}} 
                
                 /> 
   </TouchableOpacity>
  
   <TouchableOpacity onPress={() => this.chkBoxCondition("img2")} >

{/* <Text  onPress={() => this.chkBoxCondition("img2") }>hai</Text> */}

        <Image source = {require('../images/003-sceptic.png')}  style = {{width:44, height:44, marginRight: 21,borderRadius: 35, opacity:this.state.Img2Border}}  
            > 
        </Image>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => this.chkBoxCondition("img3")} >
    
        <Image source = {require('../images/002-sad.png')}   style = {{width:44, height:44, marginRight: 21,borderRadius: 35, opacity:this.state.Img3Border}}  
                 > 
        </Image>
    </TouchableOpacity>
    </View>
   

    <View style={styles.but}>
       <TouchableOpacity
         //style={styles.button}
         //onPress={this.props.navigation.navigate("mainPage")}
       >
       <Button disabled={!this.state.description || !this.state.rating}
       backgroundColor='#bc9e6d'
        //style = {{color: '#bc9e6d'}}
        //style={styles.but}
        buttonStyle = {{backgroundColor: '#bc9e6d',
    width: 248,
    height: 44.3,marginLeft: -30,}}
          title="Send"
          //onPress={() => this.props.navigation.navigate('FeedbackTQ')}
          onPress={() => {
            this.submit()
            this.props.navigation.navigate('FeedbackTQ')
          }}
        />
        
       </TouchableOpacity>
       {/* <Rating
  type='custom'
  ratingImage={WATER_IMAGE}
  ratingColor='#3498db'
  ratingBackgroundColor='#c8c7c8'
  ratingCount={10}
  imageSize={30}
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/> */}

      </View>
      
     
        </View>
      </View>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
    check:
{
    opacity:0.5,
	color:'#996'
	
},
  drawericon:{
    marginLeft:-100
 },
  container: {
   
    alignItems: 'center',
    
   
  },

  FACP:{
    
    height: 24,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 54,
    color: 'black'
  },
  price:{
    height: 25,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginTop: 7,
    marginRight: 195,
    color: 'black'
  },
  content:{
    width:224,
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 12,
    marginTop: 7,
    lineHeight: 26,
    marginRight: 65,
    color: 'black'
  },
  area: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
  },
  textareaContainer: {
    height: 103,
    width:309,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    //backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  
    height: 170,
    fontSize: 14,
    color: '#333',

  },
  content1:{
    width: 250,
    height: 19,
    fontFamily: 'Roboto',
    fontSize: 14,
    color: 'black',
    marginTop:45,
    marginLeft: 50,
  },
  images: {
    flex:1,
    flexDirection: 'row',
    width:44, 
    height:44,
    marginRight: 130,
    marginTop:18,
    //marginBottom: 50
  },
//   button: {
//     borderWidth: 1,
//     padding: 12,
//     borderColor: 'black',
//     marginTop: 63,
//     width:248,
//     height:44.3,
//     borderRadius: 1.5,
//     backgroundColor: '#bc9e6d', 
//  },
 but: {
  
    justifyContent: 'center',
    borderWidth: 1,
    padding: 12,
    //borderColor: 'black',
    marginTop: 23,
    width:208,
    height:44.3,
    borderRadius: 1.5,
    backgroundColor: '#bc9e6d', 
  },
  img: {
    width:54, height:54, marginRight: 21
  },

  button: {
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    //padding: 10
    //marginBottom:50
  },
 
});

export default Feedback