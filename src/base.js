import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDpOb9K_0smYucHFG34pB5OKHy7o1SVgGs',
  authDomain: 'recettes-app-1ffe1.firebaseapp.com',
  databaseURL: 'https://recettes-app-1ffe1.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
