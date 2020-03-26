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


// MyPlugin.install = function (Vue, options) {
//   // インスタンスメソッドを追加
//   Vue.prototype.$firebase = function (methodOptions) {
//     return firebase  
//   }
// }
