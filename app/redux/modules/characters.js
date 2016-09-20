const ADD_CHARACTER = 'ADD_CHARACTER'

export function addCharacter(newCharacter) {
  return {
    type: ADD_CHARACTER,
    newCharacter,
  }
}

const initialState = {characterIds : {1: {name:'Gunther Olsen', avatar:'NeanSuit'}, 2: {name:'Arakel Sarif', avatar:'Cowboy'}, 3:{name: 'Klaus Müller', avatar:'Cowboy.'}}}

export default function base(state = initialState, action) {
  switch (action.type) {
  case ADD_CHARACTER:
    return {
      ...state,
      ...action.newCharacter
    }
  default:
    return state
  }
}
