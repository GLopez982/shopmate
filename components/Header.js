import { StyleSheet, View, Text} from "react-native";


//THIS COMPONENT RETURNS A BASIC HEADER THAT CONTAINS THE APPLICATION LOGO AND STYLING
export default function Header(){
    return(
    <View style={styles.container}>

            <Text style={styles.text}>SHOPMATE</Text>
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'rgb(50, 200, 233)', 
       
     
        

       


    }, 
    text: {
        marginTop: 30,
        width: 'auto', 
        height: 120, 
        fontSize: 42,
        color:  'brown', 
        textAlign: 'center',
        alignContent: 'center', 
        fontFamily: 'InknutAntiqua'

        
        
    }
})