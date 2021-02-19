import { makeStyles } from '@material-ui/core'
import { theme } from './theme'

export const useStyles = makeStyles({
  title:{
    fontSize: 15
  },
  cur: {
    fontSize: 20,
  },
  card:{
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: "0 0px 0px 0px",
    height: 130
  },
  textField:{
    width: 100,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: 5
  },
  input: {
    color: theme.palette.primary.contrastText
  },
  button: {
    backgroundColor: theme.palette.secondary
  },
  divider: {
    background: theme.palette.secondary,
    width: '100%'
  },
  modal: {
    position: 'absolute',
    width: 150,
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    transform: "translate(-50%, -%50)"
  },
  select: {
    backgroundColor: 'white',
    minWidth: 130,
    borderRadius: 5,
    underline: 'green'
  },
  cancel: {
    border: '1px solid red'
  },
  add: {
    border: `1px solid ${theme.palette.secondary.main}`,
    background: theme.palette.secondary.main
  },
  modalTitle: {
    color: theme.palette.primary.contrastText
  }
});
