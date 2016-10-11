import { Map} from 'immutable'

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_AGE = 'UPDATE_AGE'
const UPDATE_ETHNICITY = 'UPDATE_ETHNICITY'
const UPDATE_GENDER = 'UPDATE_GENDER'

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name
  }
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
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

const initialState = Map({ 'name': '', 'age': '', 'ethnicity': '', 'gender':'' })

export default function newCharacters(state = initialState, action) {
  switch (action.type) {
  case UPDATE_NAME:
    return state.merge({
      name: action.name
    })
  case UPDATE_AGE:
    return state.merge({
      age: action.age
    })
  case UPDATE_ETHNICITY:
    return state.merge({
      ethnicity: action.ethnicity
    })
  case UPDATE_GENDER:
    return state.merge({
      gender: action.gender
    })
  default:
    return state
  }
}
