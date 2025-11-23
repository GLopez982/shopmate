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
            placeholder="Enter a grocery item"
            />
            <Button
            title="Add Item"
            color={'white'}
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
        borderRadius: 20, 
        marginTop: 15, 
        padding: 5, 
        backgroundColor: 'rgba(50, 161, 178, 0.87)', 
        alignContent: 'center',
        width: 280,
        height: 180,
        margin: 'auto', 
        alignItems: 'center'

    },
    text: {

        color: 'brown', 
        fontSize: 30, 
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
       width: 10, 
       color: 'yellow',
    }
})