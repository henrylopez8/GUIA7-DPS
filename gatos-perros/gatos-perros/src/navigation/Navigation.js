import React from 'react';
import PerrosStack from './PerrosStack';
import GatosStack from './GatosStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab=createBottomTabNavigator();
export default function Navigation(){
return(
<Tab.Navigator>
 <Tab.Screen name="Perros" component={PerrosStack} options={{ tabBarIcon: ({ color,size }) => (
          <Icon name="dog" size={size+10} color={color} />
        ) }}  />
 <Tab.Screen name="Gatos" component={GatosStack} options={{ tabBarIcon: ({ color,size }) => (
          <Icon name="cat" size={size+10} color={color} />
        ) }} />
 </Tab.Navigator>
);
}