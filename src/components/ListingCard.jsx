import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {

  },
  ImageWrapper: {
    width:'50px', 
    height:'100px',
    backgroundColor:'red', 
    display:'inline-block'
  },
  ListingTitle: {
    display:'inline-block',
  },
  Image: {
    height: '100%',
  },
});

class ListingCard extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <div>
        <Paper elevation={3} padding={0} >
          {/* TODO: Card styling, item text styling */}
          {this.props.image ? 
          <div className={classes.ImageWrapper}>
          <img src={this.props.image} 
            className={classes.Image}
            /> 
          </div> :
          <div className={classes.ImageWrapper}></div>
          }
          <h3 className={classes.ListingTitle}>{this.props.title}</h3>
          
        </Paper>
        
      </div>
    )
  }
}


export default withStyles(styles)(ListingCard)