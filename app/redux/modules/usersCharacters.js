import { fetchUsersCharacters } from 'helpers/api'

const FETCHING_USERS_CHARACTERS = 'FETCHING_USERS_CHARACTERS'
const FETCHING_USERS_CHARACTERS_SUCCESS = 'FETCHING_USERS_CHARACTERS_SUCCESS'
const FETCHING_USERS_CHARACTERS_ERROR = 'FETCHING_USERS_CHARACTERS_ERROR'

export function fetchingUsersCharacters() {
  return {
    type: FETCHING_USERS_CHARACTERS
  }
}

export function fetchingUsersCharactersSuccess(characters) {
  return {
    type: FETCHING_USERS_CHARACTERS_SUCCESS,
    characters
  }
}

export function fetchingUsersCharactersError(error) {
  return {
    type: FETCHING_USERS_CHARACTERS_ERROR,
    error
  }
}

export function fetchAndHandleUsersCharacters() {
  return function (dispatch, getState) {
    dispatch(fetchingUsersCharacters())
    const userId = getState().users.authedId
    return fetchUsersCharacters(userId)
      .then((characters) => dispatch(fetchingUsersCharactersSuccess(characters)))
      .catch((error) => dispatch(fetchingUsersCharactersError(error)))
  }
}

const initialState = { characterIds: {} }

export default function usersCharacters(state = initialState, action) {
  switch (action.type) {
  case FETCHING_USERS_CHARACTERS_SUCCESS:
    return {
      ...state,
      characterIds:action.characters
    }
  default:
    return state
  }
}
