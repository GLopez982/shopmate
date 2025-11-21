import { useEffect, useState } from "react";
import { generate } from "shortid";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const useGrocery = () => {

    console.log("Testing Grocery Hook");
      
    const [groceries, setItems] = useState([]);

    const loadGroceries = async () => {
        const groceryData = await AsyncStorage.getItem("@GroceryListStore:Items");
        console.log("Retrieved Data: ", groceryData);
        if(groceryData){
            const groceries = JSON.parse(groceryData);
            console.log("Parsed Groceries: ", groceries);
            setItems(groceries);
        }
    }

    //USE EFFECT TO LOAD GROCERIES
    useEffect(()=>{
        if(groceries.length){return;}
        loadGroceries();

    }, []);


    //USE EFFECT HOOK TO SAVE GROCERIES
    useEffect(()=>{
        AsyncStorage.setItem("@GroceryListStore:Items", JSON.stringify(groceries))
    }, [groceries]);



      const addItem = (grocery) => {
        const newGrocery = {id: generate(), grocery}
        setItem([newGrocery , ...groceries])
        console.log(groceries)  
      };
      return {groceries, addItem}
};
