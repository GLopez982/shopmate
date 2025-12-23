import * as Font from "expo-font"; 
import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Header from './components/Header';
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";


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
   
      <View style={styles.container}>
        <ImageBackground 
        source={require("./assets/background.png")} 
        resizeMode="cover"
        style={styles.image}
        >
      <Header/>
      <GroceryList/>
      <Footer/>
      
   </ImageBackground>
      

      </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto', 
    height: 'auto', 
    flex: 1,
    backgroundColor: 'tan',
  },
  image: {
    flex: 1, 
    justifyContent: 'center',
    width: 'auto', 
    height: 1000,

  }
  
})