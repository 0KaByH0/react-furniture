import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import AddIcon from '@material-ui/icons/Add';

import Dialog from './Dialog';

function Item({ onAdd, classes }) {
  const [open, setOpen] = React.useState(false);

  const handleAdd = (data) => {
    onAdd(data);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onAdd={handleAdd} onClose={handleClose} />
      <Grid md={3} item>
        <Card style={{ height: '450px', background: 'transparent' }}>
          <CardActionArea
            className={classes['item-action-area']}
            style={{ height: '100%' }}
            onClick={handleOpen}>
            <CardMedia
              style={{
                height: '450px',
                textAlign: 'center',
                margin: '60% 0',
              }}>
              <AddIcon
                style={{
                  fontSize: '90px',
                  fontWeight: '200',
                  color: '#4caf50c2',
                }}
              />
              <Typography
                style={{
                  fontSize: '32px',
                  fontWeight: '500',
                }}>
                Add
              </Typography>
            </CardMedia>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

Item.propTypes = {};

export default Item;
