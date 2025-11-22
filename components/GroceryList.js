import { StyleSheet, FlatList, View, Text} from "react-native";
import GroceryForm from "./GroceryForm";
import { useGrocery } from "../hooks";
import GroceryButton from "./GroceryButton";


export default function GroceryList(){

    //RESERVED FOR THE CUSTOM HOOK
    const {groceries, addItem, removeItem} = useGrocery();

    const handlePress = (item) => {
        removeItem(item.id)

    }

    return(
    <> 
    <GroceryForm onNewItem={addItem}/>
    <View style={styles.container}>
        <View style={styles.plankContainer}>
            <Text style={styles.plankText}>Plank</Text>
        </View>

        <FlatList
        data={groceries}
        renderItem={({item}) => (
                <GroceryButton key= {item.id}
                groceryItem={item.grocery}
                onPress={() => handlePress(item)}
                />
            )}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        />
    </View>
   </>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 50, 
        flex: 1, 
        borderWidth: 20, 
        borderColor: 'brown',
        backgroundColor: 'white',
        marginTop: 20, 
        padding: 10, 
        width: 'auto', 
        height: 'auto', 
        alignContent: 'center', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'tan',

    }, 
    plankContainer: {
        backgroundColor: 'brown',
        width: 200,
        height: 25,
        alignContent: 'center', 
        justifyContent: 'center', 
    },
    plankText: {
    color: 'white',
    textAlign: 'center', 
    fontSize: 20, 
    fontFamily: 'InknutAntiqua',
    
  }

})

