import { fromJS } from 'immutable'

const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_AGE = 'UPDATE_AGE'
const UPDATE_ETHNICITY = 'UPDATE_ETHNICITY'
const UPDATE_GENDER = 'UPDATE_GENDER'
const UPDATE_PHYSICAL = 'UPDATE_PHYSICAL'
const UPDATE_MENTAL = 'UPDATE_MENTAL'
const UPDATE_PERCEPTION = 'UPDATE_PERCEPTION'
const UPDATE_SOCIAL = 'UPDATE_SOCIAL'
const UPDATE_REROLL = 'UPDATE_REROLL'
const UPDATE_SKILL = 'UPDATE_SKILL'
const ADD_SKILL = 'ADD_SKILL'
const REMOVE_SKILL = 'REMOVE_SKILL'

export function updateName (name) {
  return {
    type: UPDATE_NAME,
    name
  }
}

export function updateAge (age) {
  return {
    type: UPDATE_AGE,
    age
  }
}

export function updateEthnicity (ethnicity) {
  return {
    type: UPDATE_ETHNICITY,
    ethnicity
  }
}

export function updateGender (gender) {
  return {
    type: UPDATE_GENDER,
    gender
  }
}

export function updatePhysical (physical) {
  return {
    type: UPDATE_PHYSICAL,
    physical
  }
}

export function updateMental (mental) {
  return {
    type: UPDATE_MENTAL,
    mental
  }
}

export function updatePerception (perception) {
  return {
    type: UPDATE_PERCEPTION,
    perception
  }
}

export function updateSocial (social) {
  return {
    type: UPDATE_SOCIAL,
    social
  }
}

export function updateReroll (reroll) {
  return {
    type: UPDATE_REROLL,
    reroll
  }
}

export function updateSkill (skill) {
  return {
    type: UPDATE_SKILL,
    skill
  }
}

export function addSkill (skillId) {
  return {
    type: ADD_SKILL,
    skillId
  }
}

export function removeSkill (skillId) {
  return {
    type: REMOVE_SKILL,
    skillId
  }
}

const initialState = fromJS({ 'name': '', 'age': '', 'ethnicity': '', 'gender': '', 'stats': { 'physical': 2, 'perception': 2, 'mental': 2, 'social': 2, 'reroll': 2, 'skill': 2 }, 'skill': {} })

export default function newCharacters (state = initialState, action) {
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
    case UPDATE_PHYSICAL:
      return state.mergeDeep({
        stats: ({ physical: action.physical })
      })
    case UPDATE_PERCEPTION:
      return state.mergeDeep({
        stats: ({ perception: action.perception })
      })
    case UPDATE_MENTAL:
      return state.mergeDeep({
        stats: ({ mental: action.mental })
      })
    case UPDATE_SOCIAL:
      return state.mergeDeep({
        stats: ({ social: action.social })
      })
    case UPDATE_REROLL:
      return state.mergeDeep({
        stats: ({ reroll: action.reroll })
      })
    case UPDATE_SKILL:
      return state.mergeDeep({
        stats: ({ skill: action.skill })
      })
    case ADD_SKILL:
      return state.mergeDeep({
        stats: ({ skill: action.skillId })
      })
    case REMOVE_SKILL:
      return state.mergeDeep({
        stats: ({ skill: action.skillId })
      })
    default:
      return state
  }
}
