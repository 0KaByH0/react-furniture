let initialState = {
  loggedIn: false,
  userName: 'guest',
  isAdmin: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOGIN':
      console.log('state', state);
      return {
        loggedIn: true,
        userName: action.payload.email,
        isAdmin: action.payload.isAdmin,
      };
    case 'SET_LOGOUT':
      return {
        loggedIn: false,
        userName: 'guest',
        isAdmin: false,
      };
    default:
      return state;
  }
}
