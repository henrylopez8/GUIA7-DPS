import React from 'react';
import {View,StyleSheet,Text, Image, ScrollView} from 'react-native'; 
export default function Contact(){
 return(
<ScrollView>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/gato1.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>Gato Persa</Text>
   <Text>  Iran</Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/gato2.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
   Bengala</Text>
       <Text> Estados Unidos </Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/gato3.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
   Maine Coon</Text>
       <Text> Estados Unidos </Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/gato4.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
   British Shorthair</Text>
       <Text> Reino Unido </Text>
   </View>
    </View>
    <View style={styles.contenedor}>
    <Image style={styles.imagenes} source={require("../img/gato5.jpg")}></Image>
    <View style={styles.texto}>
   <Text style={styles.titulo}>
   Siamés</Text>
       <Text> Tailandia </Text>
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
