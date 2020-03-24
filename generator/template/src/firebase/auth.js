import store from '../store'
import firebase from "firebase/app";
import "firebase/auth";
import subsc from './subsc'

console.log('** auth', store.state)

if (store.state.ON_LINE) {

  //認証変更をリスン
  firebase.auth().onAuthStateChanged( (user) => {
    console.log(user, 'onAuthStateChanged')

    if (user) {
      
      // userオブジェクトすると参照で更新しないようにしなければならない
      store.commit('updateState', {
        'user':{
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL
          }
        })
      
        // store.dispatch('querySnapshot')
        // store.dispatch('queryPoints')
        // store.dispatch('gps_watch')

        subsc()
        
    } else {
      store.commit('updateState', {'user': {}})
    }

  })
}