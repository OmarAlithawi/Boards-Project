import React from 'react'
import { Typography } from "@material-ui/core";
import useStyles from "./StyleHome";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const InspoQuotes = React.memo( function InspoQuotes() {
/*.. */
 const Quote = require('inspirational-quotes');
 const classes = useStyles();

 var newQuote = Quote.getRandomQuote()


 //console.log(newQuote.text)
 return (
  <div className={classes.quoteContainer}>
   <Typography className={classes.InspoQuotesText} component="h1" variant="h4">
    <FaQuoteLeft className={classes.quote} />
    { newQuote }  
    <FaQuoteRight className={classes.quote} />
   </Typography>
  </div>
 )
}
)

export default React.memo(InspoQuotes);