import React, { useState } from 'react'
import { Card, CardContent, IconButton, Box, Typography, Grid, TextField, Modal } from '@material-ui/core'
import { useSelector, connect, useDispatch } from 'react-redux'
import { setAmount, getCur } from '../../redux/actions/currency'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Colors from '../../theme/colors'
import { useStyles } from '../../theme/styles'
import SetBaseModalBody from './SetBaseModalBody'

function BaseCurCard(props){
  const dispatch = useDispatch()
  const classes = useStyles();
  // const uline = underline();
  const [val, setVal] = useState(1);
  const base = useSelector(state => state.currency.base)
  const [open, setOpen] = useState(false)

  function handleChange(e){
    setVal(e.target.value)
    dispatch(setAmount(e.target.value))
  }

  function handleOpen(){
    setOpen(true)
  }
  function handleClose() {
    setOpen(false)
  }


  return (
    <Box border={4} borderRadius={10} borderColor={Colors.secondary}>
      <Card className={classes.card}>
          <CardContent>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid container direction="row" justify="space-between" alignItems="center" >
                <Typography className={classes.title}>Base Currency</Typography>
                <IconButton onClick={handleOpen} edge='end'><MoreVertIcon className={classes.input} /></IconButton>

              </Grid>
              <Grid container direction="row" justify="center" alignItems="center" >
                <Typography className={classes.cur}>
                {base} <TextField className={classes.textField} InputProps = {{ className: classes.input}} variant="outlined" size="small" type="number" defaultValue={val} onChange={handleChange}/>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <SetBaseModalBody onClose={handleClose}/>
      </Modal>
    </Box>
  )
}

function mapStateToProps(state) {
  return {
    amount: state.amount,
    base: state.base
  }
}
function mapDispatchToProps(dispatch){
  return{
    setAmount: () => dispatch(setAmount()),
    getCur: () => dispatch(getCur())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseCurCard);
