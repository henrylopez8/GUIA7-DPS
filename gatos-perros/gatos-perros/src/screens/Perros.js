import React from 'react';
import {View,StyleSheet,Text, Image, ScrollView} from 'react-native'; 

export default function Home(props){
    const{navigation}=props;
 return(
 <ScrollView>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/perro1.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>    Pugb</Text>
   <Text>  Estados Unidos</Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/perro2.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
      Pastor Aleman</Text>
       <Text> Alemania </Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/perro3.png")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
   Pomerania</Text>
       <Text> Polonia </Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/perro4.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
   rottweiler</Text>
       <Text> Alemania </Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/perro5.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
   Pitbul</Text>
       <Text> Estados Unidos </Text>
   </View>
    </View>



 </ScrollView>
 );
}
const styles= StyleSheet.create({

contenedor:{  
   flex:1,
   flexDirection:'row',
   textAlign:'center',
   borderRadius:10,
},
imagenes:{
   flexDirection:'column',
   width:100,
   height:100,
   marginLeft:20,
   marginTop:10
},
texto:{
   flexDirection:'column',
   marginLeft:40
},
titulo:{
   fontWeight:'bold',
   fontFamily:'sans-serif',
   marginTop: 10,
   marginBottom:42,
   fontSize:20
},
pais:{
   fontFamily:'sans-serif',
   fontSize:15
}

}

);
