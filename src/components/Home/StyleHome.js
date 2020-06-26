import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "auto",
    marginTop: '200px',
    position: 'absolute',
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    backgroundColor: 'white',
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${
      theme.spacing(3)
    }px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  boards: {
    marginTop: theme.spacing(10),
    width: 900,
    marginLeft: "230px",
    marginRight: "auto",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  boxes: {
    padding: '6px 16px',
  },
  timelineContainer: {
    width: '500px',
    height: '380px',
    marginLeft: '700px',
    marginTop: '270px',
  },
  quoteContainer: {
    marginLeft: '30%',
  },
  homeBody: {
    height: '100%',
    width: '100%',
    color: 'white',
  },
  quote: {
    width: '10px',
    color: '#fff',
    margin: '7px',
  },
  heading: {
    color: '#fff !important',
    borderBottom: '2px solid #88F7FE',
    marginRight: '50px',
    fontWeight: '600px',
    justifyContent: 'center',
  },
  InspoQuotesText: {
    color: '#fff',
    marginTop: '80px',
    width: '90%',
    fontSize: '22px',
    paddingBottom: '100px',
  }
}));

export default useStyles;