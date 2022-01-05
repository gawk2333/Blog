import { CHANGE_PAGE } from '../actions/page'

const initialState = []

const page = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.page
    default:
      return state
  }
}

export default page
