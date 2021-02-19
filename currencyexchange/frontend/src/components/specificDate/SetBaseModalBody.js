import React, { useState } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux';
import { Select, MenuItem, Button, Grid, Typography, FormControl } from '@material-ui/core';
import { useStyles } from '../../theme/styles';
import { setBase, getCur } from '../../redux/actions/currency'

function getModalStyle() {
  const top = 25;
  const left = 45

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function SetBaseModalBody(props){
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle)
  const b = useSelector(state => state.currency.base)
  const allCurs = useSelector(state => state.currency.allCurs)
  const [selectValue, setSelevtValue] = useState(b)

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 100
      }
    }
  }

  function handleChange(e){
    setSelevtValue(e.target.value)
  }

  function handleClick(){
    dispatch(setBase(selectValue))
    dispatch(getCur(selectValue))
    props.onClose()
  }

  const list = allCurs.map((cur, i) => <MenuItem key={i} value={cur[0]}>{cur[0]}</MenuItem>)

    return(
      <div style={modalStyle} className={classes.modal}>
        <Grid container direction="column" justify="center" alignItems="center">
        <FormControl className={classes.formControl}>
          <Typography className={classes.modalTitle} style={{margin: 'auto'}}>Change Base</Typography>
          <Select
            className={classes.select}
            value={selectValue}
            onChange={handleChange}
            MenuProps={MenuProps}
            >
            {list}
          </Select>
        </FormControl>
        <br />
        <Grid container direction="row" justify="space-around" alignItems="center">
          <Button size="small" onClick={() => {props.onClose()}} className={classes.cancel}>Cancel</Button>
          <Button size="small"  className={classes.add} onClick={handleClick}>Set Base</Button>
        </Grid>
        </Grid>
      </div>
    )
}

function mapStateToProps(state){
  return{
    allCurs: state.allCurs
  }
}

function mapDispatchToProps(dispatch){
  return{
    setBase: () => dispatch(setBase()),
    getCur: () => dispatch(getCur())
  }
}


export default SetBaseModalBody
