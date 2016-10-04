const ADD_USERS_CHARACTER = 'ADD_USERS_CHARACTER'

export function addCharacter (newCharacter) {
  return {
    type: ADD_USERS_CHARACTER,
    newCharacter
  }
}

const initialState = {characterIds: {abcud123: {name: 'Gunther Olsen', avatar: 'NeanSuit'}, ffsjfhsekf3344: {name: 'Arakel Sarif', avatar: 'Cowboy'}, vdhkfh53452: {name: 'Klaus Müller', avatar: 'Cowboy'}}}

export default function usersCharacters (state = initialState, action) {
  switch (action.type) {
    case ADD_USERS_CHARACTER:
      return {
        ...state,
        ...action.newCharacter
      }
    default:
      return state
  }
}
