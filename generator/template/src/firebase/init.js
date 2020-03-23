// Initialize Firebase
import firebase from "firebase";

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};


firebase.initializeApp(config);
global.firebase = firebase
  // global.firebase = require('./firebase-init')


  // MyPlugin.install = function (Vue, options) {
  //   // インスタンスメソッドを追加
  //   Vue.prototype.$firebase = function (methodOptions) {
  //     return firebase  
  //   }
  // }

  
  /**
   * Firestore の Timestamp の仕様変更による警告と、その対処 - Qiita
https://qiita.com/teramotodaiki/items/b3592326579166003102
   */
  const firestore = firebase.firestore();
  const settings = { timestampsInSnapshots: true };
  firestore.settings(settings);