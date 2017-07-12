import React from 'react'
import Tile from './Tile'

class Board extends React.Component {


  render(){
    const boardSquares = this.props.grid.map( ( tile, index ) => {
      return <Tile key={ index } value={ index } symbol={ tile } onClick={this.props.tileClicked.bind(this)}/>
    })

    return(
      <div id="board">
        <h1 id="winner-text">The Winner is : {this.props.winner}</h1>
        { boardSquares }
      </div>
    )
  }
}

export default Board
