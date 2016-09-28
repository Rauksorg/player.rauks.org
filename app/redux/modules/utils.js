import { hashHistory } from 'react-router'

const SET_TITLE = 'SET_TITLE'
const DYN_NAVIGATE = 'DYN_NAVIGATE'

export function setTitle (newTitle) {
  return {
    type: SET_TITLE,
    newTitle
  }
}

function dynNavigate () {
  return {
    type: DYN_NAVIGATE
  }
}

export function navigateTo (url) {
  return function (dispatch) {
    hashHistory.push(url)
    dispatch(dynNavigate())
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
    case DYN_NAVIGATE:
      return state
    default:
      return state
  }
}
