import React from 'react'
import { Card, CardContent, Grid, Box, Typography, IconButton } from '@material-ui/core'
import { useSelector, connect, useDispatch } from 'react-redux'
import {addCur, removeCur, swapBase, getCur } from '../../redux/actions/currency'
import CloseIcon from '@material-ui/icons/Close'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { useStyles } from '../../theme/styles'
import Colors from '../../theme/colors'

const CurCard = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const amount = useSelector(state => state.currency.amount)
  const fudge = useSelector(state => state.currency)

  const handleRemove = (e) => {
    dispatch(removeCur(e))
  }

  const handleSwap = e => {
    dispatch(swapBase(e))
    dispatch(getCur(e[0]))
  }

    return (
      <Box  border={4} borderRadius={10} borderColor={Colors.secondary}>
        <Card className={classes.card}>
            <CardContent>
                <Grid container directiondirection="column" justify="center" alignItems="center">
                  <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Typography>Converted</Typography>
                    <Grid justify="flex-end">
                    <IconButton style={{marginTop: -5, marginRight: -20}} onClick={() =>{handleSwap(props.cur)}}>
                      <SwapHorizIcon className={classes.input} />
                    </IconButton>
                    <IconButton style={{marginTop: -5, marginRight: -10}} onClick={() => {handleRemove(props.cur)}}>
                      <CloseIcon className={classes.input} />
                    </IconButton>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justify="center" alignItems="center" >
                    <Typography className={classes.cur}>
                    {(props.cur[1] * amount).toFixed(4)}   {props.cur[0]}
                    </Typography>
                  </Grid>
                </Grid>
            </CardContent>
        </Card>
      </Box>
    )
}

function mapStateToProps(state) {
  return {
    selectedCurs: state.selectedCurs
  }
}
function mapDispatchToProps(dispatch){
  return{
    addCur: () => dispatch(addCur())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurCard);
