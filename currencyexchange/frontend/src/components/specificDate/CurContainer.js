import React, { useEffect } from 'react'
import CurCard from './CurCard';
import { Grid } from '@material-ui/core'
import { connect, useDispatch, useSelector } from 'react-redux'
import { setBase, addCur } from '../../redux/actions/currency'

function CurContainer(props) {



const dispatch = useDispatch();
let selectedCurs = props.selectedCurs
console.log(selectedCurs);

let a = useSelector(state => state.currency.allCurs)
console.log(a);
  return(
    <>
      {selectedCurs.map((cur, i) => <Grid key={i} item xs={3} ><CurCard cur={cur} /></Grid>)}
    </>
  )
}

function mapStateToProps(state){
  return  {
  selectedCurs: state.currency.selectedCurs
  }
}
function mapDispatchToProps(dispatch){
  return {
    addCur: () => dispatch(addCur())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurContainer)
