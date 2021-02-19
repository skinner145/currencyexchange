import React from 'react';
import { connect } from 'react-redux'

import BaseCurCard from './BaseCurCard'
import CurContainer from './CurContainer'
import AddCur from './AddCur'
import DatePicker from './DatePicker'

import { Grid } from '@material-ui/core'

import { setAmount, setBase, getCur } from '../../redux/actions/currency'

function SpecificDateWrapper(props){
  let { index, value } = props;
  return(
    <>
    {
      index === value && (
        <Grid container justify="center"
  alignItems="center"spacing={3}>
          <Grid item xs={12}>
            <DatePicker />
          </Grid>
          <Grid item xs={3}>
            <BaseCurCard />
          </Grid>
          <CurContainer />
          <Grid item xs={3}>
            <AddCur />
          </Grid>
        </Grid>
      )
    }
    </>
  )
}

// function mapStateToProps(state) {
//   return {
//     selectedCurs: state.currency.selectedCurs,
//   }
// }
// function mapDispatchToProps(dispatch){
//   return{
//     setAmount: () => dispatch(setAmount()),
//     setBase: () => dispatch(setBase()),
//     getCur: () => dispatch(getCur())
//   }
// }

export default SpecificDateWrapper;
