import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createDrawerNavigator,createStackNavigator,createAppContainer} from 'react-navigation'

import Appeal from './src/pages/Appeal.js';
import Appeal_ar from './src/pages/Appeal_ar.js';
import Login from './src/pages/Login.js';
import Login_ar from './src/pages/Login_ar.js';
import Homepage from './src/pages/Homepage.js';
import ForgotPassword from './src/pages/ForgotPassword.js';
import Feedback from './src/pages/Feedback.js';
import Seat_Allocation from './src/pages/Seat_Allocation.js';
import Loadpage from './src/pages/Loadpage.js';
import Schedule from './src/pages/Schedule.js';
import Salama from './src/pages/Salama.js';
import Hrregister1 from './src/pages/Hrregister1.js';

import Hr_register2 from './src/pages/Hr_register2.js';

const Drawer=createDrawerNavigator({
  Loadpage:{
    screen:Loadpage
  },
  Schedule:{       
    screen:Schedule,   
  },
   Salama:{       
    screen:Salama,   
  },
  Seat_Allocation:{       
    screen:Seat_Allocation,   
  },
 
  // Hr_register2:{       
  //   screen:Hr_register2,   
  // },
  Hrregister1:{
    screen:Hrregister1
  },
  
  Login:{       
    screen:Login,   
  },

  Feedback:{       
    screen:Feedback,   
    
  },

  Homepage:{       
    screen:Homepage,   
    
  },
 

  ForgotPassword:{
    screen:ForgotPassword
}, 
 
  Login_ar:{       
        screen:Login_ar,   
    },

  Appeal_ar:{
        screen:Appeal_ar
    }, 
    Appeal: { 
      screen: Appeal 
    },
   
},
{
  drawerWidth:150,
  // contentComponent: props => 
  // <View>
  //   {/* <DrawerItems {...props} /> */}
  //   <Text>Your Own Footer Area After</Text>
  //   <Text>Your Own Footer Area After</Text>
  // </View>
}
)

const MainNavigator = createStackNavigator({
 
  Loadpage:{       
    screen:Loadpage,   
},
Login:{       
  screen:Login,   
  
},
Homepage:{       
  screen:Homepage,   
  
},

    Appeal: { 
      screen: Appeal 
    },

  },
   
 
  )

const App = createAppContainer(Drawer);

export default App