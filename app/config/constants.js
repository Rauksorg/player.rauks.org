import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBnQVhZpxJTv0CECBC2xGpHi8HgMX_-Kmc',
  authDomain: 'player-rauks-org.firebaseapp.com',
  databaseURL: 'https://player-rauks-org.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '163782773488'
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
