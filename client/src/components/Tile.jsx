import React from 'react'

class Tile extends React.Component{

  handleTileClick(event){
    this.props.onClick(event, this.props.value)
  }

  render(){
    console.log(this.props.value)
    return(
      <div className="tile"
        onClick={this.handleTileClick.bind(this)}
        >
        <p>{this.props.symbol}</p>
      </div>
    )
  }

}

export default Tile
