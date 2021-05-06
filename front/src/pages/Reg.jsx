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
import Switch from '@material-ui/core/Switch';

import useStyles from '../styles';

//секретне слово для регістрації як адмін
const secretWord = 'newAdmin';
let isAdmin = false;

//сторінка регістрації
function Reg({ onLogin }) {
  // створення хуків для додаткового функціоналу
  const classes = useStyles();
  const [admin, setAdmin] = React.useState(false);
  const [secret, setSecret] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [erroR, setError] = React.useState(false);

  // включає адмінстратора
  const toggleAdmin = () => {
    setAdmin((prev) => !prev);
  };

  // валідація емайлу
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // валідація паролю
  const validatePass = () => (password === password2 && password.length > 4 ? true : false);

  // реєстрація користувача
  const onButtonClick = (e) => {
    e.preventDefault();
    secret === secretWord ? (isAdmin = true) : (isAdmin = false);
    if (validateEmail(email) && validatePass(password, password2)) {
      let payload = { email, password, isAdmin };
      // пост запрос до сервера для регістрації користувача
      axios
        .post('http://localhost:5000/reg', payload)
        .then((response) => response)
        .then(({ data }) => data.addEmail && onLogin(payload));
    } else {
      setPassword('');
      setPassword2('');
      setError(true);
    }
  };

  return (
    <Container className={classes['login-container']} maxWidth="md">
      <Container maxWidth="sm">
        <Paper elevation={2} className={classes['login-form__paper']}>
          <Box className={classes['login-form__box']}>
            <Typography className={classes['login-form__text']} variant="h4">
              Sign Up
            </Typography>
            <Container>
              <Box>
                {/* email */}
                <TextField
                  className={classes['login-form__input']}
                  value={email}
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  error={erroR}
                  required
                  fullWidth
                />
              </Box>
              <Box>
                {/* Pass */}
                <TextField
                  className={classes['login-form__input']}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  label="Password"
                  variant="outlined"
                  error={erroR}
                  fullWidth
                  required
                />
              </Box>
              <Box>
                {/* confirm pass */}
                <TextField
                  className={classes['login-form__input']}
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                  value={password2}
                  label="Confirm password"
                  variant="outlined"
                  error={erroR}
                  fullWidth
                  required
                />
              </Box>
            </Container>
            {/* admin mode if 'secret==admin' */}
            <Container className={classes['login-form-admin']}>
              <Typography>Sign up as admin</Typography>
              <Switch size="medium" checked={admin} onChange={toggleAdmin} />
            </Container>
            {admin && (
              <div>
                <Typography className={classes['login-form-admin__title']} variant="h6">
                  KeyWord
                </Typography>
                <TextField
                  className={classes['login-form__input']}
                  onChange={(e) => setSecret(e.target.value)}
                  type="Secret word"
                  value={secret}
                  label="Secret word"
                  variant="outlined"
                  error={erroR}
                  required
                  fullWidth
                />
              </div>
            )}
            {/* Error  */}
            {erroR && (
              <Typography variant="h5" color="error">
                Error happened, repeat please!!!
              </Typography>
            )}
            <Box>
              <Button
                className={classes['login-form__send-button']}
                variant="contained"
                size="large"
                color="primary"
                onClick={onButtonClick}
                fullWidth>
                Sign Up
              </Button>
            </Box>
            <Link className={classes.link} to="/">
              <Typography variant="h6">Sign in</Typography>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Container>
  );
}

Reg.propTypes = {};

export default Reg;
