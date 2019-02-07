import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Appeal from "./src/pages/Appeal.js";
import Appeal_ar from "./src/pages/Appeal_ar.js";
import Login from "./src/pages/Login.js";
import Login_ar from "./src/pages/Login_ar.js";
import Homepage from "./src/pages/Homepage.js";
import ForgotPassword from "./src/pages/ForgotPassword.js";
import Feedback from "./src/pages/Feedback.js";
import Seat_Allocation from "./src/pages/Seat_Allocation.js";
import Loadpage from "./src/pages/Loadpage.js";
import Schedule from "./src/pages/Schedule.js";
import Salama from "./src/pages/Salama.js";
import Hr_register from "./src/pages/Hr_register.js";
import Safety_Engineer from "./src/pages/safety_engineer";
import Add_employees from "./src/pages/Add_employees.js";
import Landingpage from "./src/pages/Landingpage.js";
import Safety_officer from "./src/pages/Safety_officer.js";




const Drawer = createDrawerNavigator(
  {

    Loadpage: {
      screen: Salama
    },
    salamaLoad: {
      screen: Loadpage
    },
    Schedule: {
      screen: Schedule
    },
    Salama: {
      screen: Salama
    },
    Seat_Allocation: {
      screen: Seat_Allocation
    },
    safetyengineerscreen: {
      screen: Safety_Engineer
    },

    Add_employees: {
      screen: Add_employees,
    },
    Hr_register: {
      screen: Hr_register
    },

    Login: {
      screen: Login
    },

    Feedback: {
      screen: Feedback
    },

    Homepage: {
      screen: Homepage
    },

    ForgotPassword: {
      screen: ForgotPassword
    },

    Login_ar: {
      screen: Login_ar
    },

    Appeal_ar: {
      screen: Appeal_ar
    },
    Appeal: {
      screen: Appeal
    },
    // Safety_officer: {
    //   screen: Safety_officer
    // }
  },
  {
    initialRouteName: 'safetyengineerscreen',
  },
  {
    drawerWidth: 150
    // contentComponent: props =>
    // <View>
    //   {/* <DrawerItems {...props} /> */}
    //   <Text>Your Own Footer Area After</Text>
    //   <Text>Your Own Footer Area After</Text>
    // </View>
  }
);

const MainNavigator = createStackNavigator({
  safetyengineerscreen: {
    screen: Safety_Engineer
  },
  Login: {
    screen: Login
  },
  Homepage: {
    screen: Homepage
  },

  Appeal: {
    screen: Appeal
  },
  Safety_officer: {
    screen: Safety_officer
  }
});

const App = createAppContainer(MainNavigator);

export default App;
