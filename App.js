import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/*import { NavigationContainer } from '@react-navigation/native';*/
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WriteTheStory from './screens/WriteStory'; 
import ReadTheStory from './screens/ReadStory'; 



export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const tabNavigator = createBottomTabNavigator({

  Writing: WriteTheStory, 
  Reading: ReadTheStory

}, 
{

  defaultNavigationOptions: ({navigation}) => ({

    tabBarIcon: ({}) => {

      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Reading"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Writing"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
          
        />)       
      }

    }

})


})

const AppContainer = createAppContainer(tabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
