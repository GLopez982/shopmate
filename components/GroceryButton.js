import { useState } from "react";
import { View,Text,TouchableHighlight, StyleSheet} from "react-native"

export default function GroceryButton({groceryItem, onPress = f => f}){

    const [isFocused, setIsFocused] = useState(false);

    return(
        <TouchableHighlight 
            onPress={() => onPress(groceryItem)} 
            underlayColor={'transparent'} 
        >
            <View style={[styles.row, isFocused && styles.rowFocused]}
             onFocus={() => setIsFocused(true)} 
             onBlur={() => setIsFocused(false)}
             
            >
                <View style={[styles.groceryBubble]}/>
                <Text>{groceryItem}</Text>
            </View>
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        fontSize: '20px', 
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    groceryBubble: {
        borderWidth: 2, 
        borderRadius: 20,
        borderColor: 'silver', 
        width: 20, 
        height: 20, 
        backgroundColor: 'rgba(17, 219, 255, 1)'
    },
    row: {
        flex: 1, 
        flexDirection: 'row', 
        borderWidth: 2, 
        borderColor: 'black', 
        width: 150, 
        gap: 10, 
        padding: 10, 
        margin: 5, 
        borderRadius: 30, 
        backgroundColor: 'brown'

    }, 
    rowFocused: {
        borderWidth: 5, 
        borderColor: 'white', 
        
    }
})
