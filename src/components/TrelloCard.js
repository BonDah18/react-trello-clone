import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default function TrelloCard() {
  return(
    <Card className={classes.root}>
      
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        
    </Card>
  )
}