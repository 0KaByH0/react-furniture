import axios from 'axios';

export const login = (payload) => ({
  type: 'SET_LOGIN',
  payload,
});

export const logout = () => ({
  type: 'SET_LOGOUT',
});

// function getLogin(data, dispatch) {
//   //console.log(data);
//   if (data.validEmail === true) {
//     dispatch(
//       login({
//         user: data.email,
//         isAdmin: data.isAdmin,
//       }),
//     );
//   } else return;
// }

// export function setLogin(payload) {
//   console.log(payload);
//   return function (dispatch) {
//     return axios
//       .post('http://localhost:5000/log', payload)
//       .then((response) => response)
//       .then(({ data }) => getLogin(data, dispatch));
//   };
// }
