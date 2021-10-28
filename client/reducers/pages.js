import {CHANGE_PAGE} from '../actions/page'

const initialState = 'HOME'

const page =(state=initialState,action) => {
  switch(action.type)
  {
    case CHANGE_PAGE:
      return action.page
      default:
    return state;
  }
  
}

export default page;