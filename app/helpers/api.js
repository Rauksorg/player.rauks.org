import { ref } from 'config/constants'

// export function listenToUsersCharacters(cb, errorCB) {
//   ref.child('usersCharacters').on('value', (snapshot) => {
//     const feed = snapshot.val() || {}
//     cb({ feed })
//   }, errorCB)
// }

export function fetchUsersCharacters (userId) {
  return ref.child(`usersCharacters/${userId}`).once('value')
    .then((snapshot) => snapshot.val())
}

export function fetchUser (uid) {
  return ref.child(`users/${uid}`).once('value')
    .then((snapshot) => snapshot.val())
}

export function saveCharacterFirebase (newCharacter) {
  if (!newCharacter.ownerId) throw new Error('No ownerId Provided to newCharacter')
  const newCharacterKey = ref.child('characters').push().key
  const updates = {}
  updates[`/characters/${newCharacterKey}`] = newCharacter
  updates[`/usersCharacters/${newCharacter.ownerId}/${newCharacterKey}`] = newCharacter
  return ref.update(updates)
}
