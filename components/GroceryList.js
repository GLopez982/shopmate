import { StyleSheet, FlatList } from "react-native";
import GroceryForm from "./GroceryForm";
import { useGrocery } from "../hooks";


export default function GroceryList(){

    //RESERVED FOR THE CUSTOM HOOK
    const {groceryItems, addItem} = useGrocery();

    return(
        <FlatList
        data={groceryItems}
        renderItem={({item}) => {
            return(
                <>
                </>
            )


        }}
        />
    )
}


