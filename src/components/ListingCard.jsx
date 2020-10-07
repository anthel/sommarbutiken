import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    '& .MuiPaper-root': {
      height: theme.spacing(12.5),
    },
  },
  ImageWrapper: {
    width:'50px', 
    height:'100px',
    backgroundColor:'red', 
    display:'inline-block',
    position: 'relative',
  },
  ListingTitle: {
    display:'inline-block',
    fontFamily: 'Roboto',
  },
  ListingDate: {
    display:'inline-block',
    fontFamily: 'Roboto',
    fontSize: '12px',
  },
  Image: {
    height: '100%',
  },
  ItemWrapper: {
    
  },
});

class ListingCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={3} >
          {/* TODO: Card styling, item text styling */}
          
            {this.props.image ? 
            <div className={classes.ImageWrapper}>
            <img src={this.props.image} className={classes.Image} /> 
            </div> :
            <div className={classes.ImageWrapper}></div>
            }
            
              <h5 className={classes.ListingTitle}>{this.props.title}</h5>
              <p className={classes.ListingDate}>{this.props.date.toDateString()}</p>
              
        </Paper>
        </div>
    )
  }
}


export default withStyles(styles)(ListingCard)