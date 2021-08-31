import firebase from "firebase"

require("@firebase/firestore")
   

  const firebaseConfig = {
    apiKey: "AIzaSyC8NuaSK9Qo-xHfBcot0wxlrcmVrTUAYyw",
    authDomain: "storyhub-57736.firebaseapp.com",
    projectId: "storyhub-57736",
    storageBucket: "storyhub-57736.appspot.com",
    messagingSenderId: "504858167131",
    appId: "1:504858167131:web:68fcbe5eccfbe0ad773c7e"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

export default firebase.firestore(); 