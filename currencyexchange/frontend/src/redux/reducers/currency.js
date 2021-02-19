import { SET_BASE, SET_AMOUNT, GET_CUR, ADD_CUR, REMOVE_CUR, TEST, SWAP_BASE, SET_DATE } from '../actions/actionTypes';

const initialState = {
  base: 'EUR',
  curs: [],
  selectedCurs: [],
  availableCurs: [],
  allCurs: [],
  amount: 1,
  prevBase: '',
  date: new Date(),
}

export default (state = initialState, action) => {
  switch(action.type){
    case GET_CUR:
    let base = action.base;
    let prevBase = state.prevBase
    let allCurs = Object.entries(action.data.rates)
    let found = false;
    for(let i = 0; i < allCurs.length; i++){
      if(allCurs[i][0] == base){
        found = true
      }
    }
    if(!found){
        allCurs.push([base, 1])
    }
    allCurs = allCurs.sort()
    let availableCurs = []
    console.log(base, prevBase);
    let selectedCurs = [...state.selectedCurs];
        availableCurs = allCurs.filter(cur => cur[0] !== base);
        for(let i = 0; i < selectedCurs.length; i++){
          availableCurs = availableCurs.filter(cur => cur[0] !== selectedCurs[i][0])
          for(let j = 0; j < allCurs.length; j++){
            if(selectedCurs[i][0] == allCurs[j][0]){
              selectedCurs[i] = allCurs[j]
            }
          }
        }
    console.log(allCurs, selectedCurs);
    return {
      ...state,
      base: base,
      availableCurs: availableCurs,
      selectedCurs: selectedCurs,
      allCurs: allCurs,
      prevBase: base,
    }
    case SET_BASE:
    let newBase = action.base
    return {
      ...state,
      base: newBase
    }
    case 'SET_AMOUNT':
    return{
      ...state,
      amount: action.amount
    }
    case ADD_CUR:
    let cur = action.cur;
    return{
      ...state,
      selectedCurs: [...state.selectedCurs, cur],
      availableCurs: state.availableCurs.filter(e => e[0] !== cur[0] && e[1] !== cur[1])
    }

    case REMOVE_CUR:
    let removeCur = action.cur;
    let arr = state.availableCurs;
    arr.push(removeCur)
    arr = arr.sort()
    return {
      ...state,
      selectedCurs: state.selectedCurs.filter(e => e[0] !== removeCur[0] && e[1] !== removeCur[1]),
      availableCurs: arr
    }
    case SWAP_BASE:
    let swapBase = action.base
    let currentBase = state.base
    let ar = [...state.selectedCurs]
    for(let i = 0; i < ar.length; i++){
      if(ar[i][0] == swapBase[0]){
        console.log(currentBase);
        ar[i] = [currentBase.toString(), 1]
      }
    }
    return{
      ...state,
      base: swapBase[0],
      selectedCurs: ar
    }
    case SET_DATE:
    return{
      ...state,
      date: action.date
    }
    case TEST:
    console.log('test');
  }
  return state
}
