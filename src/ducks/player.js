import React from 'react'
import grid from './data'
import { fromJS } from 'immutable'

//Actions
const SET_PLAYER = 'SET_PLAYER'
const MOVE_PLAYER = 'MOVE_PLAYER'

//Action Creator
export const setPlayer = (position) => {
  return {
    type: SET_PLAYER,
    position
  }
}

export const movePlayer = (direction) => {
  return {
    type: MOVE_PLAYER,
    direction
  }
}

const defaultState = fromJS({
  grid: grid,
  position: {
    x: 0,
    y: 0
  }
})

//Reducer
const reducer = (state=defaultState, action={}) => {
  switch(action.type){
    case SET_PLAYER:
      //console.log(state.getIn(['position', 'x']));
      return state.set('position', fromJS(action.position))
    case MOVE_PLAYER:
      let x = Number(state.getIn(['position', 'x'])) + action.direction.x
      let y = Number(state.getIn(['position', 'y'])) + action.direction.y  
      let position = state.getIn(['grid', x, y])
      //console.log(position, x, y)
      if(position === ' '){
        const s1 = state.setIn(['grid', state.getIn(['position', 'x']), state.getIn(['position', 'y'])], ' ')
        const s2 = s1.setIn(['grid', x, y], 'p')
        return s2.set('position', fromJS({ x, y }))
      }else if(position === 'g'){
        alert('You won')
      }
      return state
    default:
      return state
  }
}

export default reducer