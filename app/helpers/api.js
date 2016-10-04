import { ref } from 'config/constants'

export function listenToUsersCharacters (cb, errorCB) {
  ref.child('usersCharacters').on('value', (snapshot) => {
    const feed = snapshot.val() || {}
    cb({feed})
  }, errorCB)
}

export function fetchUsersCharacters (uid) {
  return ref.child(`usersCharacters/${uid}`).once('value')
    .then((snapshot) => snapshot.val())
}

export function fetchUser (uid) {
  return ref.child(`users/${uid}`).once('value')
    .then((snapshot) => snapshot.val())
}
