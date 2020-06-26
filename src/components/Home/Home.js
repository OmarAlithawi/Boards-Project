import React, { useEffect, useState } from "react";
import { Typography, Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import firebase from "../auth/firebase";
import Sidebar from "../bars/Sidebar";
import useStyles from "./StyleHome";
import InspoQuotes from "./InspoQuotes";


function Home(props) {

  // Clock //
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  const tick = () => {
    setDate(new Date());
  };
  // Clock ends //

  const partOfTheDay = () => {
    if (date.getHours() > 6 && date.getHours() < 12) {
      return "Good Morning";
    } else if (date.getHours() > 12 && date.getHours() < 18) {
      return "Good Afternoon";
    } else if (date.getHours() > 18 && date.getHours() < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  const classes = useStyles();

  if (!firebase.getCurrentUserName()) {
    //user is not loggen in we run this function
    // alert('Please login first.')
    props.history.replace("/login");
    return null;
  }

  return (
    <div className="homeBody">
      <Sidebar />
          <main className={classes.welcomeMessageContainer}>
            <div className="messege-container">
              <Typography className="heading" component="h1" variant="h3">
                {partOfTheDay()}, {firebase.getCurrentUserName()}
              </Typography>
              <Typography className={classes.heading} component="h4" variant="h5" >{date.toLocaleTimeString()}</Typography>
            </div>
          </main>
      <div>
        <InspoQuotes />
      </div>
    </div>
  );
}


export default withRouter(Home);

/*
Hello {firebase.getCurrentUserName()}
*/
