// підключенння різних бібліотек та компонентів
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import React from 'react';

import Login from './pages/Login';
import Main from './pages/Main';
import Reg from './pages/Reg';

import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { logout, login } from './redux/actions/auth';

//Головний компонент нашого додатку реалізований наступним чином
function App() {
  const classes = useStyles();
  //отримання даних з Redux
  const user = useSelector(({ login }) => login);
  // створення хуку для маршрутизації
  let history = useHistory();
  const dispatch = useDispatch();

  //авторизація
  function onLogin(payload) {
    dispatch(login(payload));
    history.push('/main');
  }
  //вихід
  function onLogout() {
    dispatch(logout());
  }
  //console.log(user);
  return (
    //Рендер головного компоненту
    // маршрутизація
    <Switch>
      <Route path="/" exact>
        {/* Перехід до авторизації */}
        <Login onLogin={onLogin} />
      </Route>
      <Route path="/registration" exact>
        {/* Перехід до регістрації */}
        <Reg onLogin={onLogin} />
      </Route>
      <Route path="/main" exact>
        {user.loggedIn ? (
          <div>
            {/* Перехід до головної */}
            <Main user={user} onLogout={onLogout} />
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
    </Switch>
  );
}

export default App;
