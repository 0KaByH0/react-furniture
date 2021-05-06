//підключення бібліотке
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from '../styles';

// сторінка для регістрації
function Login({ onLogin }) {
  // підключення класів стилів
  const classes = useStyles();
  // створення хуків для додаткового функціоналу
  const [remember, setRemember] = React.useState(false);
  const [erroR, setError] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //коли користувач нажимаю на логін кнопку
  function onButtonClick() {
    if (email && password) {
      //запит до сервера за допомогою аксіос (пост запрос)
      //.post('http://localhost:5000/log', { email, password })
      return axios
        .post('/log', { email, password })
        .then((response) => response)
        .then((data) => getLogin(data));
    } else setError(true);
  }

  // перевірка на правильність вводу даних користувача
  function getLogin({ data }) {
    // валідація даних
    console.log(data);
    if (data.validEmail === true) {
      // відправка даних в редакс store
      onLogin({
        email: data.email,
        isAdmin: data.isAdmin,
      });
    } else setError(true);
  }

  const onCheckboxClick = (event) => {
    setRemember(event.target.checked);
  };

  return (
    <>
      <Container className={classes['login-container']} maxWidth="md">
        <Container maxWidth="sm">
          <Paper elevation={2} className={classes['login-form__paper']}>
            <Box className={classes['login-form__box']}>
              <Typography className={classes['login-form__text']} variant="h3">
                Sign in
              </Typography>
              <Box className={classes['login-form__input-box']}>
                {/* ввід емайлу */}
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes['login-form__input']}
                  value={email}
                  label="Email"
                  //variant="filled"
                  error={erroR}
                  fullWidth
                  required
                />
                {/* ввід паролю */}
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  label="Password"
                  type="password"
                  //variant="filled"
                  error={erroR}
                  fullWidth
                  required
                />
              </Box>
              <Container className={classes['login-form__checkbox']}>
                <Checkbox onClick={() => onCheckboxClick} color="primary" defaultChecked />
                <Typography variant="h6">Remember</Typography>
              </Container>
              {/* виведення помилки */}
              {erroR && (
                <Typography variant="h5" color="error">
                  Error happened, repeat please!!!
                </Typography>
              )}
              {/* виведення помилки */}
              <Box>
                <Button
                  className={classes['login-form__send-button']}
                  variant="contained"
                  size="large"
                  color="primary"
                  onClick={onButtonClick}
                  fullWidth>
                  Log In
                </Button>
              </Box>
              {/* переадресація на сторінку реєстрації */}
              <Link className={classes.link} to="/registration">
                <Typography variant="h6">Sign Up</Typography>
              </Link>
            </Box>
          </Paper>
        </Container>
      </Container>
    </>
  );
}

Login.propTypes = {};

export default Login;
