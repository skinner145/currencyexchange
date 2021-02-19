import React from 'react'
import { InputLabel, MenuItem, FormControl, Select, makeStyles } from '@material-ui/core';
import rd3 from 'react-d3-library';
const BarChart = rd3.BarChart;

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 300
  },
  root:{
    minWidth:300
  }
}))

function TimePeriodWrapper(props){
  const classes = useStyles()

  let { value, index } = props
  let data = {
    width: 200,
    height: 200,
    dataset: [{
      label: 'apples', value: 25
    },{
      label: 'oranges', value: 40
    }],
    margins: {top: 20, right: 10, bottom: 0, left: 10},
    yAxisLabel: 'Y Label',
    fill: 'red',
    ticks: 10,
    barClass: 'barChart'
  }
  return(
    <>
    {
      value === index && (
        <div>
          <br /><br /><br /><br />
          <BarChart data={data} />
        </div>
      )
    }
    </>
  )
}


export default TimePeriodWrapper
