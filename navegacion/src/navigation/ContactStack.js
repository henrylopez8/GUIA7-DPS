import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screens/Contact';
const Contact= createContactNavigator();
export default function HomeContact(){
 return(
 <Contact.Navigator>
 <Contact.Screen name="contact" component={Contact}
options={{title:'Contact'}}/>
 </Contact.Navigator>
 );
}