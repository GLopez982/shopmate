import { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";


export default function GroceryForm({onNewItem = f => f}){
    const [inputValue, setInputValue] = useState("");
    const input = useRef();

    

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add an Item</Text>
            <TextInput
            ref={input}
            style={styles.textInput}
            value={inputValue}
            onChangeText={setInputValue}
            autoCapitalize="characters"
            placeholder="Enter a grocery item"
            />
            <Button
            title="Add Item"
            style={styles.button}
            onPress={() => {
                input.current.blur();
                onNewItem(inputValue)
                setInputValue("");
            }}
            />
       
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20, 
        padding: 10, 
        backgroundColor: 'rgb(9, 109, 124)', 
        alignContent: 'center',
        width: 300,
        height: 210,
        margin: 'auto', 
        // flex: 1, 
        // display: 'flex',
        alignItems: 'center', 

    },
    text: {

        fontSize: 35, 
        fontFamily: 'InknutAntiqua'

    },

    textInput: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 5, 
        fontSize: 20, 
        margin: 5, 
        padding: 5, 
        width: 200,
        alignContent: 'center', 
        justifyContent: 'center', 
    },
    button: {
        backgroundColor: 'green'
    }
})