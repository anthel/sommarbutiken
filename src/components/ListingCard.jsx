import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';

class ListingCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <Paper elevation={3} className >
          {/* TODO: Display uploaded image */}
          <div style={{width:'50px', height:'50px',backgroundColor:'red', display:'inline-block'}}>

          </div>
          <h3 style={{display:'inline-block'}}>{this.props.title}</h3>
        </Paper>
        
      </div>
    )
  }
}

export default ListingCard;