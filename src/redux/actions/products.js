import axios from 'axios';

const setProducts = (payload) => {
  return {
    type: 'SET_PRODUCTS',
    payload,
  };
};

const onDeleteItem = (id) => {
  return {
    type: 'DELETE_ITEM',
    payload: id,
  };
};

const onAddItem = (payload) => {
  return {
    type: 'ADD_ITEM',
    payload,
  };
};

const onEditItem = (payload) => {
  console.log(payload);
  return {
    type: 'EDIT_ITEM',
    payload,
  };
};

export const onFindItem = (payload) => {
  return {
    type: 'FIND_ITEM',
    payload,
  };
};

export function fetchProducts() {
  return function (dispatch) {
    return axios
      .post('http://localhost:5000/products')
      .then((response) => response)
      .then(({ data }) => dispatch(setProducts(data)));
  };
}

export function editItem(payload) {
  return function (dispatch) {
    dispatch(onEditItem(payload));
    return axios.post('http://localhost:5000/edit', { payload });
  };
}

export function addItem(data) {
  return function (dispatch) {
    dispatch(onAddItem(data));
    return axios.post('http://localhost:5000/add', { data });
  };
}

export function deleteItem(id) {
  console.log(id);
  return function (dispatch) {
    dispatch(onDeleteItem(id));
    return axios.post('http://localhost:5000/delete', { id });
  };
}
