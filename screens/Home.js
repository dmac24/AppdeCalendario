import React, {Component} from 'react'; 
import {View, Text, Button, TouchableOpacity, StyleSheet, ImageBackground, Image} from "react-native";
import {Header} from 'react-native-elements';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.contenedor}>
      <ImageBackground source={require('../assets/bg2.jpg')}>
      <Header
      backgroundColor={'#17A589'}
      centerComponent={{
        text: 'MI CALENDARIO',
        style:{color:'#ffffff', fontSize: 20, fontWeight: 'bold'}
        }}/>
      <Image
      style={styles.imagenIcon}
      source={{
        uri: 'https://www.shareicon.net/data/128x128/2017/06/21/887256_book_512x512.png',
      }}
      />

      <TouchableOpacity style={[styles.botones, {backgroundColor: "#D658B4" }]}  
      onPress={() => this.props.navigation.navigate("Estudios")}>
      <Text style={styles.texto}>Estudio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botones, {backgroundColor: "#CED658" }]}
      onPress={() => this.props.navigation.navigate("TareasPendientes")}>
      <Text style={styles.texto}>Tareas Pendientes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botones}
      onPress={() => this.props.navigation.navigate("Horario")}>
      <Text style={styles.texto}>Horario de Estudio</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
    );   
  }
}

const styles = StyleSheet.create({
contenedor: {
  flex: 2,
  alignItems: 'center',
},
botones: {
  flex: 0.25,
  backgroundColor: '#17A589',
  marginLeft: 50,
  marginRight: 50,
  marginTop: 50,
  borderRadius: 20,
  weight: 30,
  height: 20,
},
imagenIcon:{
    width: 80,
    height: 80,
    marginLeft: 155,
    marginBottom: 0,
},
texto: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#ffffff',
  paddingLeft: 15,
  paddingTop: 10,
  textAlign: "center",
}
});