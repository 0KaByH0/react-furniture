import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import useStyles from '../styles';

function MainDialog({ onClose, onAdd, open }) {
  const classes = useStyles();
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState({
    id: '',
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    amount: '',
  });

  const onHandleId = (id) => setData(() => ({ ...data, id }));
  const onHandleName = (name) => setData(() => ({ ...data, name }));
  const onHandleDescrip = (description) => setData(() => ({ ...data, description }));
  const onHandlePrice = (price) => setData(() => ({ ...data, price }));
  const onHandleImageUrl = (imageUrl) => setData(() => ({ ...data, imageUrl }));
  const onHandleAmount = (amount) => setData(() => ({ ...data, amount }));

  const onButtonClick = () => {
    if (!data.id) {
      setError(true);
    } else {
      let payload = {
        id: parseInt(data.id),
        name: data.name,
        description: data.description,
        price: parseInt(data.price),
        imageUrl: data.imageUrl,
        amount: parseInt(data.amount),
      };
      onAdd(payload);
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      //   style={{ overflowX: 'hidden', overflowY: 'auto' }}
      className={classes['dialog-wrapper']}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}>
      <DialogTitle style={{ textAlign: 'center' }}>Add item</DialogTitle>
      <Box style={{ minWidth: 600, minHeight: 525 }}>
        <Grid
          className={classes['dialog-grid-wrapper']}
          direction="column"
          alignItems="center"
          justify="center"
          spacing={2}
          container>
          <Grid xs={12} item>
            <TextField
              onChange={(e) => onHandleId(e.target.value)}
              value={data.id}
              label="Id"
              variant="outlined"
              fullWidth
              required
              error={error}
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => onHandleName(e.target.value)}
              value={data.name}
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => onHandleDescrip(e.target.value)}
              // className={classes['login-form__input']}
              value={data.description}
              label="Desctiption"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => onHandlePrice(e.target.value)}
              value={data.price}
              label="Price"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => onHandleImageUrl(e.target.value)}
              value={data.imageUrl}
              label="ImageUrl"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(e) => onHandleAmount(e.target.value)}
              value={data.amount}
              label="Amount"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>

          <Button
            // className={classes['login-form__send-button']}
            variant="contained"
            size="large"
            color="primary"
            onClick={onButtonClick}>
            Add
          </Button>
        </Grid>
      </Box>
    </Dialog>
  );
}

export default MainDialog;
