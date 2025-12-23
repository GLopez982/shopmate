import { StyleSheet, FlatList, View, Text, TouchableOpacity, Pressable} from "react-native";
import GroceryForm from "./GroceryForm";
import { useGrocery } from "../hooks";
import GroceryButton from "./GroceryButton";
import { useMemo, useState } from "react";


export default function GroceryList(){

    //CUSTOM USEGROCERY() HOOK CREATED IN HOOK.JS FILE AND IMPORTED. 
    //HOOK IS MADE TO HANDLE ADDITION AND REMOVAL OF GROCERY ARRAY
    const {groceries, addItem, removeItem, clearList} = useGrocery();
    
    //USESTATE HOOK FOR HANDLING SORTING STATE
    const [sortType, setSortType] = useState('added');

    //FUNCTION TO REMOVE ITEM FROM THE LIST
    const handlePress = (item) => {
        removeItem(item.id)

    }

    //FUNCTION TO SORT GROCERIES BY A-Z, Z-A OR BACK TO RECENTLY ADDED STATE. 
    //THIS FUNCTION UTILIZES THE USEMEMO HOOK TO HANDLE CALCULATION FOR WHEN SORTING SHOULD OCCUR 
    //THIS IS ONLY TRIGGERED ON SORT OR CHANGE TO GROCERY ARRAY
    const sortedGroceries = useMemo(() => {
        const sorted = [...groceries]
        if(sortType === 'alphabetical'){
            sorted.sort((a,b) => a.grocery.localeCompare(b.grocery ))
        }else if(sortType === 'reverse'){
            sorted.sort((a,b) => b.grocery.localeCompare(a.grocery ))
        }
        return sorted;

    }, [groceries, sortType]);

   

    return(
    <View style={{flex: 1}}>
    <GroceryForm onNewItem={addItem}/>
    <View style={styles.container}>
        <View style={styles.plankContainer}>
            <Text style={styles.plankText}>Plank</Text>
        </View>
        <View style={styles.sortContainer}>

        <TouchableOpacity
        style={[styles.sortButton, sortType ==='added' && styles.sortButtonActive]}
        onPress={() => setSortType('added')}><Text>Recently Added</Text></TouchableOpacity>

        <TouchableOpacity
        style={[styles.sortButton, sortType ==='alphabetical' && styles.sortButtonActive]}
        onPress={() => setSortType('alphabetical')}><Text>A-Z</Text></TouchableOpacity>

        <TouchableOpacity
        style={[styles.sortButton, sortType ==='reverse' && styles.sortButtonActive]}
        onPress={() => setSortType('reverse')}><Text>Z-A</Text></TouchableOpacity>

        <Pressable style={styles.sortButton} onPress={clearList}><Text>Clear List!</Text></Pressable>
        </View>



        <FlatList
        data={sortedGroceries}
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
   </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 10, 
        margin: 50, 
        flex: 1, 
        borderWidth: 20, 
        borderColor: 'brown',
        backgroundColor: 'white',
        marginTop: 20, 
        padding: 10, 
        width: 'auto', 
        height: 'auto', 
        backgroundColor: 'rgba(240, 191, 148, 0.68)',
        justifyContent: 'center', 
        alignContent: 'center',
        alignItems: 'center'



    }, 
    plankContainer: {
        backgroundColor: 'brown',
        width: 200,
        height: 'auto',
        borderRadius: 5,
        alignContent: 'center', 
        justifyContent: 'center', 
        alignSelf: 'center', 
    },
    plankText: {
    color: 'white',
    textAlign: 'center', 
    fontSize: 20, 
    fontFamily: 'InknutAntiqua',
    
  }, 
  sortContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 5, 
    marginVertical: 10, 

  },
   sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'brown',
    backgroundColor: '#fff',

  },
   sortButtonActive: {
    backgroundColor: 'brown',
    borderColor: 'brown',
  }, 
  sortBtnText: {
fontSize: 12,
    fontWeight: '500',
    color: 'brown',
  },
    
});

