import { FormatListNumbered } from '@material-ui/icons';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyAA-4AKQn__fiQNHx5EqiQFIVBw_QZsdJ4",
  authDomain: "fir-database-1597a.firebaseapp.com",
  databaseURL: "https://fir-database-1597a.firebaseio.com",
  projectId: "fir-database-1597a",
  storageBucket: "fir-database-1597a.appspot.com",
  messagingSenderId: "121561518701",
  appId: "1:121561518701:web:ba89ae2c43447f15dee564",
  measurementId: "G-LSGCYTWDMS"
};

firebase.initializeApp(firebaseConfig)

export default firebase;