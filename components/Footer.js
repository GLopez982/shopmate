import { View, Text, StyleSheet } from "react-native"


//THIS COMPONENT RETURNS A BASIC FOOTER WITH STYLING. THE FOOTER INCLUDES THE COPYRIGHT DATE 
// AND APPLICATION NAME BUT CAN BE EXTENEDED FOR NAVIGATION
export default function Footer() {
    return(
        <View 
        style={styles.container}>
            <Text
            style={styles.text}>
                ShopMate ©2025
                All Rights Reserved
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(50, 200, 233)', 
        width: 'auto',
        height: 80, 

        
    },
    text: {
        textAlign: 'center', 
        color: 'white', 
        margin: 'auto', 



    }
})