import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const Header = React.memo(function Header({ onLogout, user, classes }) {
  return (
    <Container maxWidth="lg">
      <Paper
        style={{
          height: '75px',
          padding: '15px 25px',
          marginBottom: '35px',
          background: 'transparent',
        }}
        elevetion={2}>
        <Grid style={{ marginTop: '5px' }} alignItems="center" justify="space-between" container>
          <Grid md={9} item>
            <Typography variant="h4">Lab 5 React Furniture</Typography>
          </Grid>
          <Grid md={1} item>
            <Typography variant="h5">{user.userName}</Typography>
          </Grid>
          {/* {!user.isAdmin && (
            <Grid md={1} item>
              <Typography variant="h5">Bucket</Typography>
            </Grid>
          )} */}

          <Grid md={1} item>
            <Link className={classes.link} to="/" onClick={onLogout}>
              <Button variant="contained" color="primary">
                Exit
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
});

Header.propTypes = {};
export default Header;
