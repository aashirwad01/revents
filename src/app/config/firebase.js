import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyC_1ksC_wgUdg_YfOvpu19jqgAOAOWAiOE",
  authDomain: "re-events-340f2.firebaseapp.com",
  projectId: "re-events-340f2",
  storageBucket: "re-events-340f2.appspot.com",
  messagingSenderId: "470812027999",
  appId: "1:470812027999:web:a043ab0b565c6b7fbbbfea"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore();

export default firebase;