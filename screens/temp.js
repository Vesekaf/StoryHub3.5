import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Touchable,
  
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import db from '../config'


export default class ReadTheStory extends React.Component {

  constructor(){

    super();

    this.state = {

        search: '', 
        bookTitle:  "", 
        bookArthur: "", 
        bookStory: "", 
        ref: [],
        bookDataArthur: '', 
        pageState: true, 

    }

}

refreshPage = () => {
  db.collection("bookInfo")
    .where("bookAuthor", "==", )
    .get()
    .then(snapshot => {
      snapshot.docs.map(doc => {
        this.setState({
          bookData: doc.data().bookAuthor,
          
        });
      });
    });

  

};


searchStory = async (text) => {
  const storyRef = await db
    .collection('bookInfo')
    .where('bookTitle', '===', text)
    .get();

  storyRef.docs.map((doc) => {

    this.setState({
      ref:[...this.state.ref, doc.data()],
        bookAuthor: doc.data().bookAuthor,
        bookStory: '',
    });
  });
};

presetStory = async (text) => {
  const storyRef = await db
    .collection('readStory')
    .where('bookTitle', '===', text)
    .get();

  storyRef.docs.map((doc) => {

    this.setState({
      ref:[...this.state.ref, doc.data()],
        bookAuthor: doc.data().bookAuthor,
        bookStory: '',
    });
  });
};


updateSearch = (search) => {
  this.setState({ search });
};



    render(){
        return(
            <View style = {styles.backStyle}>
              <View >

                <Text style = {styles.headerStyle}>Read a Story</Text>

              </View>

              <View style = {{

                alignItems: 'center', 
                justifyContent: 'center',


              }}>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: '#f74040',
                    borderWidth: 2,
                    placeholderTextColor: 'black',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    borderRadius: 30,
                    width:'45%',
                    color: 'white',
                    marginTop: 10, 
                    alignItem: 'center', 
                    marginLeft: '-10%', 
                    color: 'black', 
                  }}
                  placeholder="Search Here - Title of The Story"
                  onChangeText={(text) => {
                    this.setState({
                      search: text,
                    });
                  }}
                />
                <TouchableOpacity
                  onPress={() => {
                    this.searchStory(this.state.bookTitle);
                  }}
                  style={{
                    backgroundColor: '#e58080',
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 100,
                    borderWidth: '3px',
                    padding: 0,
                    marginTop: -40, 
                    borderColor: '#f74040',
                    marginLeft: '40%', 
                    width: 65,
                    height: 40, 
                  }}><Text
                    style = {{
                      color: '#f2cdcd',
                      fontSize: 20,
                      fontWeight: 'bold',
                      fontFamily: 'cursive',
                    }}
                  >       
                    Go
                  </Text></TouchableOpacity>

                </View>

              <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Title : {this.state.search}
                </Text>

                <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Author : {this.state.bookArthur}
                </Text>

                <Text
                    style={{
                      color: 'black',
                      fontSize: 20,
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Story : {this.state.bookStory}
                </Text>


                

            </View>
        );
        }
       /* else if(this.state.pageState === false){

          return(

            <View style = {styles.backStyle} >
              <View >
                <Text style = {styles.headerStyle}>Read a Story</Text>
              </View>

              <TouchableOpacity
                onPress = {this.refreshPage}
                style = {styles.buttonStyle}

              >
                <Text style = {styles.buttonText} >Click Again to Refresh the Page</Text>

              </TouchableOpacity>

            </View>
          ); 

        }
        
        
        <TouchableOpacity
                onPress = {
                  this.setState({
                    pageState: false
                  })
                }
                style = {this.buttonStyle}

              >
                <Text style = {this.buttonStyle} >Click to Refresh the Page</Text>

              </TouchableOpacity>
              
        */

    }


  

const styles = StyleSheet.create({
    
    backStyle: {

      backgroundColor: '#ffdddd', 
      flex: 1, 

    },

    headerStyle: {

      textAlign: 'center', 
      fontSize: 35, 
      color: 'white', 
      backgroundColor: '#aa0000', 
      height: 50,

    }, 
    buttonStyle: {
      width: '40%',
      height: 50,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      borderWidth: 4,
      borderRadius: 20,
      borderColor: 'black',
      backgroundColor: 'white', 
      marginTop: 50, 
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 25,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    
})

