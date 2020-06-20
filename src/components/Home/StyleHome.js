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
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${
      theme.spacing(3)
    }px`,
  },
  avatar: {
    margin: theme.spacing.unit,
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
  }
}));

export default useStyles;
