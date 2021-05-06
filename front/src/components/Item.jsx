import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DialogEdit from './DialogEdit';

function Item({ classes, onDelete, onEdit, user, id, name, price, imageUrl, description, amount }) {
  const [open, setOpen] = React.useState(false);

  const handleEdit = (payload) => {
    onEdit(payload);
  };

  const handleDelete = () => {
    console.log(id);
    onDelete(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DialogEdit
        open={open}
        onEdit={handleEdit}
        onClose={handleClose}
        payload={{ id, name, price, imageUrl, description, amount }}
      />
      <Grid md={3} item>
        <Card style={{ height: '460px', borderRadius: '15px' }}>
          <CardActionArea
            className={classes['item-action-area']}
            style={{ height: '270px', textAlign: 'center' }}>
            <img src={imageUrl} alt={name} className={classes['item-img']} />
            {/* <img src={img1} alt={name} className={classes['item-img']} /> */}
          </CardActionArea>
          <CardContent className={classes['item-content']}>
            <Typography>{name}</Typography>
            {/* <Typography>{description}</Typography> */}
          </CardContent>

          <Grid alignItems="center" justify="flex-end" container>
            {amount > 0 ? (
              <Typography className={classes['item-actions-amount']}>
                Осталось всего <b>{amount}</b> шт
              </Typography>
            ) : (
              <Typography className={classes['item-actions-amount']}>Нет в наличии</Typography>
            )}
          </Grid>
          <Grid
            className={classes['item-grid-actions']}
            alignItems="center"
            justify="space-between"
            container>
            <Grid item>
              <Typography className={classes['item-actions-price']}>{price}₴</Typography>
            </Grid>
            {user.isAdmin ? (
              <Grid className={classes['item-grid-admin-actions']}>
                <Grid item>
                  <Button onClick={handleOpen} size="small" color="primary" variant="contained">
                    Edit
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={handleDelete} size="small" color="secondary" variant="contained">
                    Delete
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Grid item>
                <Button
                  disabled={amount !== 0 ? false : true}
                  size="medium"
                  color="secondary"
                  variant="contained">
                  Buy
                </Button>
              </Grid>
            )}
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

Item.propTypes = {};

export default Item;
