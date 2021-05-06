import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  deleteItem,
  fetchProducts,
  onFindItem,
  editItem,
} from '../redux/actions/products.js';

import Item from '../components/Item';
import ItemAdd from '../components/ItemAdd';
import Header from '../components/Header.jsx';
import useStyles from '../styles';
import Search from '../components/Search.jsx';

// головна сторінка
function Main({ user, onLogout }) {
  // підключення класів стилів
  const classes = useStyles();
  // отримання даних з редакс
  const items = useSelector(({ products }) => products.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // функції для обробки даних
  function onSearch(payload) {
    payload !== '' ? dispatch(onFindItem(payload)) : dispatch(fetchProducts());
  }
  function onDelete(id) {
    if (window.confirm('Do you really want to delete this item?')) {
      dispatch(deleteItem(id));
    }
  }
  function onEdit(payload) {
    dispatch(editItem(payload));
  }
  function onAdd(data) {
    dispatch(addItem(data));
  }

  return (
    <>
      <div className={classes.mainRoot}>
        <Header user={user} onLogout={onLogout} classes={classes} />
        <Search onSearch={onSearch} />
        <Container style={{ marginTop: '35px' }} maxWidth="lg">
          <Grid alignItems="center" spacing={3} direction="row" container>
            {items.map((item) => (
              <Item
                onEdit={onEdit}
                onDelete={onDelete}
                key={`${item.name}__${item.id}`}
                classes={classes}
                user={user}
                {...item}
              />
            ))}
            {user.isAdmin && <ItemAdd onAdd={onAdd} classes={classes} user={user} />}
          </Grid>
        </Container>
      </div>
    </>
  );
}

Main.propTypes = {};

export default Main;
