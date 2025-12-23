import { useState } from "react";
import { View,Text,TouchableHighlight, StyleSheet, Dimensions} from "react-native"


//THIS COMPONENT RETURNS THE BUTTON COMPONENT WEHRE THE GROCERY ITEM WILL BE DISPLAYED. 
export default function GroceryButton({groceryItem, onPress = f => f}){

    const [isFocused, setIsFocused] = useState(false);
    const display = Dimensions.get('window').width;
    return(
        <TouchableHighlight 
            onPress={() => onPress(groceryItem)} 
            underlayColor={'transparent'} 
        >
            <View style={[styles.row, isFocused && styles.rowFocused , {width: display / 2 }]}
             onFocus={() => setIsFocused(true)} 
             onBlur={() => setIsFocused(false)}
             
            >
                <View style={[styles.groceryBubble]}/>
                <Text style={styles.text} >{groceryItem}</Text>

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
        width: 12, 
        height: 20, 
        backgroundColor: 'rgba(17, 219, 255, 1)'
    },
    row: {
        flex: 1, 
        flexDirection: 'row', 
        borderWidth: 2, 
        borderColor: 'black', 
        gap: 10, 
        padding: 10, 
        margin: 5, 
        borderRadius: 10, 
        backgroundColor: 'brown',
        flexWrap: 'wrap', 
        
        
    }, 
    rowFocused: {
        borderWidth: 5, 
        borderColor: 'white', 
        
    },
    text: {
        color: 'white', 

    }
})
