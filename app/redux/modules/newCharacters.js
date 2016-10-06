const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
const UPDATE_AGE = 'UPDATE_AGE'
const UPDATE_ETHNICITY = 'UPDATE_ETHNICITY'
const UPDATE_GENDER = 'UPDATE_GENDER'

export function updateLastName(lastName) {
  return {
    type: UPDATE_LAST_NAME,
    lastName
  }
}

export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRST_NAME,
    firstName
  }
}

export function updateAge(age) {
  return {
    type: UPDATE_FIRST_NAME,
    age
  }
}

export function updateEthnicity(ethnicity) {
  return {
    type: UPDATE_ETHNICITY,
    ethnicity
  }
}

export function updateGender(gender) {
  return {
    type: UPDATE_GENDER,
    gender
  }
}

const initialState = { 'lastName': '', 'firstName': '', 'age': '', 'ethnicity': '', 'gender': '' }

export default function newCharacters(state = initialState, action) {
  switch (action.type) {
  case UPDATE_LAST_NAME:
    return {
      ...state,
      lastName: action.lastName
    }
  case UPDATE_FIRST_NAME:
    return {
      ...state,
      firstName: action.firstName
    }
  case UPDATE_AGE:
    return {
      ...state,
      age: action.age
    }
  case UPDATE_ETHNICITY:
    return {
      ...state,
      ethnicity: action.ethnicity
    }
  case UPDATE_GENDER:
    return {
      ...state,
      gender: action.gender
    }
  default:
    return state
  }
}
