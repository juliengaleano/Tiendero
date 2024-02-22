import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';


export default function App() {
  useEffect(() => {
    const database = firebase.database();
    // Realizar operaciones con la base de datos...
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start carechimbaa!</Text>
      <StatusBar style="auto" />
      <View>
      <Text style={styles.con}>que hubo carechimbaa!</Text>
      </View>
      
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  con: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});
