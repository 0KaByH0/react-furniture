import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      //margin: theme.spacing(1),
      width: 200,
    },
  },
  mainRoot: {
    background: 'rgb(253,156,29)',
    background:
      'radial-gradient(circle, rgba(253,156,29,0.2976540958180147) 0%, rgba(131,58,180,0.49933476808692223) 100%)',
  },
  link: {
    textDecoration: 'none',
    color: '#000',
    '&:hover': {
      //backgroundColor: '#fafafa',
      textDecoration: 'underline',
    },
  },
  //////////////////////////////////////////////////
  // rootCheckbox: {
  //   color: theme.primary,
  //   '&$checkedCheckbox': {
  //     color: theme.primary,
  //   },
  // },
  // checkedCheckbox: {},
  /////////////////////////////////////////
  //
  //////////////////////////////////////////////////

  'login-container': {
    minHeight: '430px',
    margin: '130px auto',
  },
  'login-form__paper': {
    background: 'rgb(253,156,29)',
    background:
      'linear-gradient(137deg, rgba(253,156,29,0.7766456924566701) 0%, rgba(252,176,69,0.5917717428768383) 33%, rgba(131,58,180,1) 87%, rgba(131,58,180,1) 100%)',
    borderRadius: '15px',
  },
  'login-form__box': {
    padding: '35px 0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  'login-form__text': {
    textAlign: 'center',
    margin: '0px 0px 15px',
  },
  'login-form__input-box': {
    width: '80%',
  },
  'login-form__input': {
    margin: '5px auto 20px',
    //
  },
  'login-form__checkbox': {
    display: 'flex',
    alignItems: 'center',
    padding: '0px 42px',
  },
  'login-form__send-button': {
    paddingRight: '100px',
    paddingLeft: '100px',
    margin: '25px 0px 15px',
  },

  'login-form-admin': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    '& .MuiTypography-body1': {
      fontSize: '22px',
      fontWeight: '500',
      lineHeight: 1.5,
      marginLeft: '25px',
    },

    '& .MuiSwitch-root': {
      marginRight: '20px',
    },
  },

  'login-form-admin__title': {
    textAlign: 'center',
  },

  'item-img': {
    width: '100%',
    maxHeight: '250px',
  },

  'item-action-area': {
    //textAlign: 'center',
  },

  'item-content': {
    padding: '12px 10px',
    marginBottom: '5px',
    height: '70px',
    '& .MuiTypography-root ': {
      fontSize: '16px',
    },
  },

  'item-grid-actions': {
    marginTop: '15px',
    '& .MuiGrid-root:first-child': {
      marginLeft: '20px',
    },
    '& .MuiGrid-root:last-child': { marginRight: '20px' },
  },

  'item-actions-price': {
    fontSize: '20px',
    fontWeight: 600,
  },

  'item-actions-amount': {
    fontSize: '16px',
    fontWeight: 500,
    marginRight: '20px',
  },

  'item-grid-admin-actions': {
    '& .MuiGrid-root:first-child': {
      marginLeft: '15px',
    },
    '& .MuiGrid-root:last-child': {
      marginLeft: '15px',
    },
    width: '150px',
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'dialog-grid-wrapper': {
    '& .MuiGrid-item:first-child': {
      marginTop: '10px',
    },
    '& .MuiGrid-item': {
      width: '375px',
    },
  },

  'dialog-wrapper': {
    '& .MuiDialog-paper': {
      overflowX: 'hidden',
      overflowY: 'auto',
    },
  },
}));

export default useStyles;
