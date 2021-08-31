import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid, 
  KeyboardAvoidingView, 

} from 'react-native';

import db from '../config'


export default class WriteTheStory extends React.Component {



    constructor(){

        super();

        this.state = {

            bookTitle:  "", 
            bookAuthor: "", 
            bookStory: "", 

        }

    }



    submitStory = () => {

      db.collection('bookInfo').doc('bookInput').set({
        bookTitle: this.state.bookTitle,
        bookAuthor: this.state.bookAuthor,
        bookStory: this.state.bookStory,
      });

      this.setState({
        bookTitle: '',
        bookAuthor: '',
        bookStory: '', 
      });


      //ToastAndroid.show("This is a  message", ToastAndroid.SHORT);

    }



    render(){

        <View style = {styles.container} >

            <KeyboardAvoidingView

                behavior =   "padding"  enabled 
            >


            </KeyboardAvoidingView>
                                    
        </View>

        return(

            <View style = {styles.backStyle}>
              <View >

                <Text style = {styles.headerStyle}>Write a Story</Text>

              </View>

                <View>
                    <TextInput style = {styles.inputBox}  placeholder = "Title" 
                    
                    onChangeText = {text => {
                        this.setState({
                            bookTitle: text
                        })
                    }}

                    value = {this.state.bookTitle}


                        

                    />
                    <TextInput style = {styles.inputBox}  placeholder = "Author"
                    
                    onChangeText = {text => {
                        this.setState({
                            bookAuthor: text
                        })
                    }}

                    value = {this.state.bookAuthor}

                    />
                </View>

                <View style = {styles.inputHeaderStyle}>
                    <TextInput style = {styles.inputStoryBox}  placeholder = "Write Your Story"
                    
                    onChangeText = {text => {
                        this.setState({
                            bookStory: text
                        })
                    }}

                    value = {this.state.bookStory}

                    multiline = {true} />
                </View>
                <View>
                    <TouchableOpacity

                        style= {styles.buttonStyle}
                        onPress = {this.submitStory}
                    ><Text style = {styles.buttonText}> Submit Story </Text></TouchableOpacity>

                </View>
            </View>
        );

    }


}

const styles = StyleSheet.create({
    
    backStyle: {

      backgroundColor: '#ddffdd', 
      flex: 1, 

    },

    headerStyle: {

      backgroundColor: 'red',
      textAlign: 'center', 
      fontSize: 35, 
      color: 'white', 
      backgroundColor: '#00aa00', 
      height: 50,

    },

    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      borderColor: 'black',
      outline: 'none',
    },

    

    inputStoryBox: {

      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 350,
      textAlign: 'center',
      borderWidth: 4,
      borderColor: 'black',
      outline: 'none',
      textAlign: 'center',

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

