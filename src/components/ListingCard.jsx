import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    '& .MuiPaper-root': {
      padding: '10px',
      height: theme.spacing(15),
      display: 'flex',
    },
  },
  ImageWrapper: {
    width:'fit-content', 
    height:'100px',
    backgroundColor:'red', 
    alignSelf: 'flex-start',
    position: 'relative',
    flexShrink: 0,
  },

  Image: {
    height: '100%',
  },
  ContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginLeft: '16px',
  },
  TimeLocationWrapper: {
    display: 'flex',
    alignItems: 'baseline',
  },
  TopInfoWrapper: {
    flexGrow: 1, 
  },
  ListingCategory: {

  },
  ListingLocation: {

  },
  ListingDate: {
    display:'inline-block',
    fontFamily: 'Roboto',
    fontSize: '12px',
    textAlign: 'right',
  },
  SubjectWrapper: {
    display: 'flex',
  },
  ListingTitleWrapper: {

  },
  ListingTitleLink: {
    position: 'relative',
    fontSize: '17px',
    display:'inline-block',
    fontFamily: 'Roboto',
  },
  SubjectContainer: {

  },
  PriceInfo: {

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
        <Paper elevation={3} component={"article"}>
          {/* TODO: Card styling, item text styling */}
          
            {this.props.image ? 
            <div className={classes.ImageWrapper}>
            <img src={this.props.image} className={classes.Image} /> 
            </div> :
            <div className={classes.ImageWrapper}></div>
            }
            <div className={classes.ContentWrapper}>
              <div className={classes.TimeLocationWrapper}>
                <p className={classes.TopInfoWrapper}>
                  <a className={classes.ListingCategory}>Bilar</a>
                   - 
                  <a className={classes.ListingLocation}>Skåne</a>
                </p>
                <p className={classes.ListingDate}>{this.props.date.toDateString()}</p>
                
              </div>
              <div className={classes.SubjectWrapper}>
                <h5 className={classes.ListingTitleWrapper}>
                  <a 
                    className={classes.ListingTitleLink}
                    href='#'
                    >
                    <span className={classes.SubjectContainer}>{this.props.title}</span>
                    
                    </a>
                  
                  </h5>
              </div>
              <div className={classes.PriceInfo}>
                10 000 kr
              </div>
              
             
            </div>

              
        </Paper>
        </div>
    )
  }
}


export default withStyles(styles)(ListingCard)