import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Search = React.memo(function Search({ onSearch }) {
  const [search, setSearch] = React.useState('');

  const handleSearch = () => {
    onSearch(search);
  };
  return (
    <Container maxWidth="md">
      <Grid justify="center" alignItems="center" direction="column" spacing={2} container>
        <Grid item md={6}>
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            label="Search"
            fullWidth
          />
        </Grid>
        <Grid item md={2}>
          <Button onClick={handleSearch} size="large" variant="contained" color="primary">
            Find Item
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
});

Search.propTypes = {};

export default Search;
