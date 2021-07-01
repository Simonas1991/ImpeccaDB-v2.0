import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCKO0hqmUZMlPx348NMS2-WzWumr1P2LPg",
    authDomain: "impeccadb-v2.firebaseapp.com",
    projectId: "impeccadb-v2",
    storageBucket: "impeccadb-v2.appspot.com",
    messagingSenderId: "673326974506",
    appId: "1:673326974506:web:ff2703dbf96e13acb62553"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;