import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';

class ListingCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Paper elevation={3}>
          {/* TODO: Display uploaded image */}
          Card {this.props.title}
        </Paper>
        
      </div>
    )
  }
}

export default ListingCard;