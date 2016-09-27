import { ref } from 'config/constants'

export function listenToFeed (cb, errorCB) {
  ref.child('ducks').on('value', (snapshot) => {
    const feed = snapshot.val() || {}
    cb({feed})
  }, errorCB)
}

export function fetchUser (uid) {
  return ref.child(`users/${uid}`).once('value')
    .then((snapshot) => snapshot.val())
}