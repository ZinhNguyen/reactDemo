import React from "react"
import {Text, Image, View} from "react-native";

const Home = (pros) => {
    console.log(pros.name, pros.age)
    return(
        <View style={{flexDirection:'column'}}>
            <Text>{pros.name}</Text>
            <Image
            style={{width:500,height:500}}
             source ={require('./assets/vungTau.jpg')} 
             />
        </View>
    );
}
export default Home