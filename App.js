import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import{Audio} from 'expo-av';




export default function App() {
// variables  
  const [isworking, setisworking] = useState(false);
  const [time, setTime]= useState(25 *60);
  const [currentime, setcurrentime]= useState('Pomo'| 'short'| 'break');
  const [isactivated, setactivate]= useState(false);

// funcionalidad del time 
useEffect(() => {
  let interval = null;
  if(isactivated){
    interval=setInterval(() => {
      setTime(time -1)
    },1)
  }else{
    clearInterval(interval);

  }
  if(time === 0 ){
    alert('tu tiempo termino');
setactivate(false);
setisworking((prev) => !prev);
setTime(isworking ? 300 : 1500);
  }
  return () => clearInterval(interval);
}, [isactivated, time])
  //funcion para cambiar el estado del boton  start a stop  
  function handleStartStop (){
    setactivate(!isactivated);
    playSound();
  };
  //funcion para reporducir un sonido cada vez que precione boton 
   async function playSound (){
    const{sound}= await Audio.Sound.create(
      require("./assets/click.mp3")
    ) 
    await sound.playAsync();
  };
  
  return (
    <SafeAreaView >
      <View style={{paddingTop: Platform.OS === 'android' && 30 }}>
     
      <Text>Open up App.js to start carechimbaa!</Text>
      <StatusBar style="auto" />
      <Text>pomodoro</Text>
      
      <Header  currentime={currentime} setcurrentime={setcurrentime} setTime={setTime} />
      <Timer time={time}></Timer>
      <TouchableOpacity onPress={handleStartStop} style={styles.button}>
        <Text style={{fontWeight: 'bold', color: "white", alignContent: "center"}}>{isactivated ? "STOP" : "START"}</Text>
      </TouchableOpacity>
      

      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',

  },
  button:{
    backgroundColor: "black",
    padding:10,
    alignItems:"center",
    margin: 15,
    borderRadius: 15
  }
});
