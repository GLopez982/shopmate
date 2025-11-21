import * as Font from "expo-font"; 
import { useEffect, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import GroceryForm from './components/GroceryForm';
import Header from './components/Header';

import { generate } from 'shortid';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(()=>{
    async function loadFonts() {
      await Font.loadAsync({
        'InknutAntiqua': require('./assets/fonts/InknutAntiqua-Regular.ttf'), 

      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if(!fontLoaded) {
    return null;
  }





  return (
    <>
      <View style={styles.container}>
      <Header/>
      <GroceryForm onNewItem={addItem}/>
   

      </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccbcbcff',

  },
});
