import {View, Text, StyleSheet} from 'react-native';
export default function Timer({time}){
    //creamos variable que da formato al tiempo de mm a segundos
    const formatedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")} `;
    return(
        <View style={style.container}>
            <Text style={style.time}>{formatedTime}</Text>
        </View>

    );
}
const style = StyleSheet.create({
    container:{
        
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 15,
        marginTop:5,
        
    },
    time:{
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",

    }

});