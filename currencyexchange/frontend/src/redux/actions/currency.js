import { SET_BASE,SET_AMOUNT, GET_CUR, ADD_CUR, REMOVE_CUR, TEST, SWAP_BASE, SET_DATE } from '../actions/actionTypes'
import axios from 'axios';
import store from '../store'



export const getCur = (base = store.getState().currency.base, date = store.getState().currency.date) => {
  return async dispatch => {
    date = date.toISOString().slice(0,10)
    let response = []
    await axios.get(`https://api.exchangeratesapi.io/${date}?base=${base}`)
    .then(res => response = res.data)
    console.log(response);
    console.log(date);
    dispatch({ type: GET_CUR, data: response, base: base })
  }
}

export const test = () => {
  console.log(store.getState().currency.date);

}


export const setBase = base => ({
  type: SET_BASE,
  base: base
})

export const addCur = cur => ({
  type: ADD_CUR,
  cur: cur
})

export const removeCur = cur => ({
  type: REMOVE_CUR,
  cur: cur
})

export const setAmount = amount => {
  return{
    type: SET_AMOUNT,
    amount: Number(amount)
  }
}

export const swapBase = base => {
  return {
    type: SWAP_BASE,
    base: base
  }
}

export const setDate = date => {
  return {
    type: SET_DATE,
    date: date
  }
}
