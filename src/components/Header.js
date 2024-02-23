// Header.js
import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';


const Options =[ 'pomodoro','shortbreak','longbreak'];
const Header = ({ setTime, currentime, setcurrentime }) => {
  //creamos una funcion  que maneja el evento del boton 
  function Handlespress(index){
     // creamos una variable que compare el estado del index 
    const newtime = index === 0 ? 25: index === 1 ? 5: 15;
    setcurrentime(index);
    setTime(newtime * 60);

  }
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      {Options.map((item, index) => (
        <TouchableOpacity key={index} 
         onPress={() => Handlespress(index)} 
         //la siguiente funcion del style  es un condicional donde solo añade el borde al 
         // boton seleccionado
         style={[style.itemStyle, currentime !== index &&{borderColor:'transparent' }]}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))
      }
      
      
    </View>
  );

};

const style = StyleSheet.create({
  itemStyle:{
    width:'33%',
    borderWidth: 5,
    padding: 5,
    margen: 5,
  }
})
export default Header;
