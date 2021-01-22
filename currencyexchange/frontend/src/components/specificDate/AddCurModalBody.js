import React, { useState } from 'react'
import { Select, MenuItem, Typography, FormControl, Button, Grid } from '@material-ui/core'
import { useSelector, useDispatch, connect } from 'react-redux';
import { getCur, setBase, addCur } from '../../redux/actions/currency';
import { useStyles } from '../../theme/styles';

function getModalStyle() {
  const top = 25;
  const left = 45

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



function ModalBody(props) {
  const dispatch = useDispatch();
  const classes = useStyles()
  const availableCurs = useSelector(state => state.currency.availableCurs);
  const [addedCur, setAddedCur] = useState('');
  const [modalStyle] = useState(getModalStyle)
  const [showButton, setShowButton] = useState(false);

  const list = availableCurs.map((cur, i) => <MenuItem key={i} value={cur}>{cur[0]}</MenuItem>)

  const handleChange = (e) => {
    setShowButton(true)
    setAddedCur(e.target.value)
  }
  const handleClick =() =>{
    dispatch(addCur(addedCur))

    props.onClose()
  }

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 300,
        width: 100
      }
    }
  }

  return (
    <div style={modalStyle} className={classes.modal}>
      <Grid container direction="column" justify="center" alignItems="center">
      <FormControl className={classes.formControl}>
          <Typography className={classes.modalTitle} style={{margin: 'auto'}}>Select Currency</Typography>
          <Select
            className={classes.select}
            value={addedCur}
            onChange={handleChange}
            MenuProps={MenuProps}
            >
            {list}
          </Select>

      </FormControl>
      <br />
      <Grid container direction="row" justify="space-around" alignItems="center">
        <Button size="small" onClick={() => {props.onClose()}} className={classes.cancel}>Back</Button>
        {showButton && (
          <Button size="small"className={classes.add} onClick={handleClick}>Add</Button>
        )}
      </Grid>
      </Grid>
    </div>
  )
}
function mapStateToProps(state){
  return{
    availableCurs: state.currency.availableCurs
  }
}
function mapDispatchToProps(dispatch){
  return{
    setBase: () => dispatch(setBase()),
    getCur: () => dispatch(getCur())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalBody)
