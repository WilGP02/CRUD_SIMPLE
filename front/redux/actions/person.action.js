import request from "../../shared/utils/request";

export const PERSONS_REQUEST = "PERSONS_REQUEST";
export const PERSONS_SUCCESS = "PERSONS_SUCCESS";
export const PERSONS_SAVE = "PERSONS_SAVE";
export const PERSONS_ERROR = "PERSONS_ERROR";
export const PERSONS_FINISH = "PERSONS_FINISH";

export const PersonsRequest = (type) => {
  return {
    type: PERSONS_REQUEST,
    payload: type
  }
}

export const PersonsSave = data => {
  return {
    type: PERSONS_SAVE,
    payload: data
  }
}

export const PersonsSuccess = data => {
  return {
    type: PERSONS_SUCCESS,
    payload: data
  }
}

export const PersonsFailure = error => {
  return {
    type: PERSONS_ERROR,
    payload: error
  }
}

export const PersonsFinish = () => {
  return {
    type: PERSONS_FINISH,
  }
}

export const savePersons = (body, type) => {
  return dispatch => {
    dispatch(PersonsRequest(type));
    request({
      url: `/persons`,
      method: "post",
      data: body
    })
    .then(({ data }) => dispatch(PersonsSave({ data, type })))
    .catch((error) => dispatch(PersonsFailure({ error })))
  }
}

export const updatePersons = (body, id, type) => {
  return dispatch => {
    dispatch(PersonsRequest(type));

    request({
      url: `/persons/${id}`,
      method: "put",
      data: body
    })
    .then(({ data }) => dispatch(PersonsSuccess({ data, type })))
    .catch(error => dispatch(PersonsFailure({ error })))
  }
}

export const findAllPersons = (type) => {
  return dispatch => {
    dispatch(PersonsRequest(type));

    request({
      url: `/persons`,
      method: "get",
    })
    .then(({ data }) => dispatch(PersonsSuccess({ data, type })))
    .catch(error => dispatch(PersonsFailure({ error })))
  }
}

export const findByIdPersons = (id, type) => {
  return dispatch => {
    dispatch(PersonsRequest(type));

    request({
      url: `/persons/${id}`,
      method: "get",
    })
    .then(({ data }) => dispatch(PersonsSuccess({ data, type })))
    .catch(error => dispatch(PersonsFailure({ error })))
  }
}