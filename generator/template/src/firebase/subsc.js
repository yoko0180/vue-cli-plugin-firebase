console.log('subsc.js **');
import store from '../store'



function mapItems(snap) {
  var _items = [];
  snap.forEach(function(doc) {
    let data = doc.data();
    data.id = doc.id;
    _items.push(data);
  });
  return _items
}

function standardCollection(collection_name) {
  return firebase.firestore().collection(collection_name)
  .doc(store.state.user.uid)
  .collection(collection_name)
}

function onsnap_collection({collection, state_key}) {
  const cancelSnapshot = collection
    // .where("timestamp", ">=", today_zero.toDate())
    // .orderBy("timestamp", "desc")
    .onSnapshot((querySnapshot) => {
        store.commit('updateState', {[state_key]: mapItems(querySnapshot)})
      });
}

function onsnap_standard({collection_name, state_key}) {
  if (!state_key) state_key = collection_name

  onsnap_collection({
    collection: standardCollection(collection_name), 
    state_key
  })
}


export default () => {
  console.log('subsc.js ** user', store.state.user);


  // Book割当に使うBooksを参照する
  onsnap_standard({collection_name:'books'})
  onsnap_standard({collection_name:'districts'})

}
