import React from 'react'
import Block from './Block'
import Redux from 'redux'
import { connect } from 'react-redux'
import Mousetrap from 'mousetrap'
import { movePlayer, setPlayer } from '../ducks/player.js'

const containerStyle = {
  display: 'flex',
  margin: 'auto' 
}

const rowStyle = {
  flexDirection: "row"
}

class App extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.grid.forEach((row, row_index) => {
      row.forEach((element, element_index) => {
        if(element === "p"){
          this.props.setPositionPlayer({x: element_index, y: row_index})
        }
      })
    })
  }

  componentDidMount() {
    Mousetrap.bind(['up'], () => this.props.onPressMove({x: 0, y: -1}))
    Mousetrap.bind(['down'], () => this.props.onPressMove({x: 0, y: 1}))
    Mousetrap.bind(['left'], () => this.props.onPressMove({x: -1, y: 0}))
    Mousetrap.bind(['right'], () => this.props.onPressMove({x: 1, y: 0}))
  }
  
  componentWillUnmount() {
    Mousetrap.bind(['up'], () => this.props.onPressMove({x: 0, y: 1}))
    Mousetrap.bind(['down'], () => this.props.onPressMove({x: 0, y: -1}))
    Mousetrap.bind(['left'], () => this.props.onPressMove({x: -1, y: 0}))
    Mousetrap.bind(['right'], () => this.props.onPressMove({x: 1, y: 0}))
  }

  render(){
    return (
      <div style={ containerStyle }>
        {this.props.grid.map((row, row_index) => (
          <div style={ rowStyle } key={ row_index }>
            {row.map((element, element_index) => (
              <Block key={ [row_index.toString(), element_index.toString(), element].toString() } text={ element }/>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grid: state.get('grid')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPressMove: direction => {
      dispatch(movePlayer(direction))
    },
    setPositionPlayer: position => {
      dispatch(setPlayer(position))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer