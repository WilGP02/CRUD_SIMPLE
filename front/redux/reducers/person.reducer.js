import { PERSONS_ERROR, PERSONS_FINISH, PERSONS_REQUEST, PERSONS_SAVE, PERSONS_SUCCESS } from "../actions/person.Action"

const initialState = {
  loading: {
    saveLoading: false,
    updateLoading: false,
    findAllLoading: false,
    findByIdLoading: false,
  },
  error: {
    saveError: null,
    updateError: null,
    findAllError: null,
    findByIdError: null,
  },
  data: {
    save: null,
    update: null,
    findAll: null,
    findById: null,
  },
}

const personReducer = (state = initialState, action= {}) => {
  switch (action.type){
    case PERSONS_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [`${action.payload.type}Loading`]: true
        },
      }
    case PERSONS_SAVE:
      return {
        ...state,
        loading: {
          ...state.loading,
          [`${action.payload.type}Loading`]: false,
        },
        data: {
          ...state.data,
          save: {
            ...action.payload.data,
            typeForm: action.payload.attributes.formName,
            position: action.payload.attributes.position
          }
        }
      }
    case PERSONS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          [`${action.payload.type}Loading`]: false,
        },
        data: {
          ...state.data,
          [action.payload.type]: action.payload.data
        },
      }
    case PERSONS_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          [`${action.payload.type}Loading`]: false,
        },
        error: {
          ...state.error,
          [`${action.payload.type}Error`]: action.payload.error
        },
      }
    case PERSONS_FINISH:
      return {
        ...initialState
      }
    default:
      return state;
  }
}

export default personReducer;