const SET_TITLE = 'SET_TITLE'

export function setTitle (newTitle) {
  return {
    type: SET_TITLE,
    newTitle
  }
}

const initialState = { title: 'Rauks Player' }

export default function utils (state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.newTitle
      }
    default:
      return state
  }
}
